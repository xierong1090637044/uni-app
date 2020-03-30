<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<camera device-position="back" flash="off" binderror="error" style="width: 300rpx;height: 300rpx;margin: 0 auto;margin-top: 30rpx;" mode="scanCode" @scancode="scanCode"></camera>
		<!-- #endif -->
		
		<!--<image mode="widthFix" src="{{src}}"></image>-->
		
		<view>
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>			
						<view class="display_flex_bet" style="margin-bottom: 10rpx;">
							<view>库存：{{item.reserve}}</view>
							<view style="color: #f30;">零售价：{{item.retailPrice}}(元)</view>
						</view>
			
						<view class="display_flex_bet" v-if="value == 1 || value == 3" style="margin-bottom: 10rpx;">
							<view class='input_withlabel'>
								<view>实际零售价<text style="font-size: 24rpx;color: #999;">(可修改)</text>：</view>
								<view><input :placeholder='item.retailPrice' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
							</view>
						</view>
			
						<view v-if="item.selectd_model">
							<view class='margin-t-5' v-for="(model,key) in (item.selectd_model)" :key="key" style="margin-bottom: 10rpx;">
								<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>
								<text>数量：</text>
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" :value='key==0?1:0'/>
							</view>
						</view>
						<view class='margin-t-5' v-else>
							<text>数量：</text>
							<uninumberbox :min="1" @change="handleNumChange($event, index)" :value='1' v-if="negativeOut" />
							<uninumberbox :min="1" @change="handleNumChange($event, index)" :max="Number(item.reserve)" :value='1' v-else />
						</view>
			
						<view class="bottom_del display_flex_bet">
							<view>
								<view v-if="user.identity !=2">
									<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/Ngood_det?id=' + item.objectId + '&type=false'">
										<fa-icon type="magic" size="12" color="#fff"></fa-icon>
										<text style="margin-left: 10rpx;">详情</text>
									</navigator>
								</view>
							</view>
							<view class='del' @click="handleDel(index)">
								<fa-icon type="close" size="12" color="#fff"></fa-icon>
								<text style="margin-left: 10rpx;">删除</text>
							</view>
						</view>
					</view>
				</unicard>
			</view>
		</view>
	</view>
</template>

<script>
	
	import Bmob from "hydrogen-js-sdk";
	import unicard from '@/components/uni-card/uni-card.vue'
	import uninumberbox from '@/components/uni-number-box/uni-number-box.vue'
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	
	let uid;
	let that;
	let value;
	export default {
		components: {
			unicard,
			faIcon,
			uninumberbox,
			uniNavBar
		},
		data() {
			return {
				products:[]
			}
		},
		onLoad() {
			that = this
			uid = uni.getStorageSync("uid")
			uni.setNavigationBarTitle({
				title:"连续扫码"
			})
		},
		
		methods: {
			scanCode(e){
				console.log(e)
				let code = e.detail.result
				let array = code.split("-");
				console.log(array[0],array[1])
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('Goods');
				if (array[1] == "false" || array[1] == false) {
					query.equalTo("objectId", "==",array[0]);
				} else {
					query.equalTo("productCode", "==", array[0])
				}
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.find().then(res => {
					
					if(res.length == 0){
						uni.showToast({
							icon:"none",
							title:"没有此产品"
						})
						uni.hideLoading();
						return;
					}
					
					for (let item of res) {
						item.num = 1;
						item.total_money = 1 * item.retailPrice;
						item.really_total_money = 1 * item.retailPrice;
						item.modify_retailPrice = item.retailPrice;
						if (item.models) {
							let count = 0
							for (let model of item.models) {
								model.num = 0
								count += 1
							}
							item.num = count
							item.selectd_model = item.models
							item.selected_model = item.models
						}
					}
					this.products =this.products.concat(res);
					uni.hideLoading()
				})
			}
		},
		
	}
</script>

<style>
.page {
		font-size: 28rpx;
		height: calc(100vh - 88rpx);
		overflow: scroll;
	}

	.margin-b-10 {
		margin-top: 20rpx;
	}

	.input_withlabel {
		display: flex;
		align-items: center;
		margin: 10rpx 0;
	}

	.bottom_del {
		text-align: right;
		margin-top: 10rpx;
	}

	.del {
		display: inline-flex;
		align-items: center;
		background: #aa2116;
		color: #fff;
		justify-content: flex-end;
		padding: 4rpx 20rpx;
		border-radius: 8rpx;
		font-size: 20rpx;
	}

	.input_label {
		border: 1rpx solid#ddd;
		border-radius: 8rpx;
		padding: 0 6rpx;
		width: 140rpx;
		color: #aa2116;
	}
</style>
