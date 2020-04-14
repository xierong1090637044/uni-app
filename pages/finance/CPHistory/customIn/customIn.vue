<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF">
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666" />
				<input confirm-type="search" class="input" type="text" placeholder="输入搜索的客户名字" @confirm="input_confirm" />
			</view>
		</uni-nav-bar>

		<scroll-view class="content" scroll-y="true" v-if="people && people.length > 0">
			<view class="info_item">
				<view v-for="(item,index) in people" :key="index" class="item">
					<navigator class="display_flex_bet" hover-class="none" :url="'/pages/finance/CPHistory/costomInDet/costomInDet?customId='+item.custom.objectId">
						<view>
							<view style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;" v-if="item.custom &&item.custom.custom_name">{{item.custom.custom_name}}</view>
							<view>
								<text>联系电话：</text>
								<text v-if="item.custom &&item.custom.custom_phone" style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">{{item.custom.custom_phone}}</text>
								<text v-else style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">未填写</text>
							</view>
						</view>
						<view class="display_flex">
							<view class="moneyIcon">待收：￥{{item._sumDebt}}</view>
							<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
						</view>

					</navigator>
				</view>
			</view>

		</scroll-view>
		<nocontent v-else :type="1"></nocontent>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			loading,
			faIcon,
			uniSegmentedControl,
			uniNavBar,
			uniIcon
		},
		data() {
			return {
				loading: true,
				current: 0,
				people: null, //获得人员数组
				is_producer: false,
				is_custom: false,
				type: '', //选择类型
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			that.load_data()
		},
		onUnload() {

		},
		methods: {

			input_confirm(e) {
				console.log(e)
				let arr = []
				let keyWord = e.detail.value
				if(keyWord){
					for (let i = 0; i < that.people.length; i++) {
						if (that.people[i].custom.custom_name.split(keyWord).length > 1) {
							arr.push(that.people[i]);
						}
					}
					that.people = arr
				}else{
					that.load_data()
				}
				
			},

			//加载数据
			load_data(type) {
				let opreationList = []
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("order_opreations");
				query.equalTo("type", "==", -1);
				query.equalTo("extra_type", "==", 1);
				query.equalTo("master", "==", uid);
				query.include("opreater", "account", "custom", "producer", "secondClass", "fristClass");
				query.statTo("sum", "debt");
				query.statTo("groupby", "custom");
				query.find().then(res => {
					uni.hideLoading()
					that.people = res
					console.log(res)
				})
			},

		}
	}
</script>

<style>
	page {
		background: #FAFAFA;
	}

	.moneyIcon {
		color: #f30;
		border: 1rpx solid#f30;
		padding: 0rpx 12rpx;
		font-weight: bold;
		text-align: center;
		font-size: 24rpx;
		margin-right: 20rpx;
		border-radius: 4rpx;
	}

	.uni-common-mt {
		padding: 30rpx;
	}

	.content {
		height: calc(100vh - 80rpx);
		background: #fff;
	}

	.info_item {
		padding: 20rpx 30rpx;
		background: #fff;
	}

	.item {
		border-bottom: 1rpx solid#ccc;
		padding-bottom: 10rpx;
		margin-bottom: 10rpx;
	}
</style>
