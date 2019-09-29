<template>
	<view>
		<loading v-if="loading"></loading>
		
		<view v-else>
			<view class="display_flex_bet list_item border_bottom">
				<view class="left_desc">客户昵称</view>
				<view>{{custom.custom_name}}</view>
			</view>
			
			<view class="display_flex_bet list_item border_bottom">
				<view class="left_desc">联系电话</view>
				<view v-if="custom.custom_phone">{{custom.custom_phone}}</view>
				<view v-else>未填写</view>
			</view>
			
			<navigator class="display_flex_bet list_item border_bottom" hover-class="none" :url="'debt_history/debt_history?id='+custom.objectId+'&name='+custom.custom_name">
				<view class="left_desc">客户欠款</view>
				<view class="display_flex">
					<text style="margin-right: 20rpx;">￥{{custom.debt?custom.debt:0}}</text>
					<fa-icon type="angle-right" size="20" color="#999" />
				</view>
			</navigator>
			
			<view class="display_flex_bet list_item border_bottom">
				<view class="left_desc">建立时间</view>
				<view>{{custom.createdAt}}</view>
			</view>
			
			
			<navigator class="list_item display_flex_bet" style="margin: 20rpx 0;" hover-class="none" :url="'history/history?id='+custom.objectId">
				<text class="left_desc">交易历史</text>
				<fa-icon type="angle-right" size="20" color="#999" />
			</navigator>
			
			<uni-popup :show="modal_show" position="middle" mode="fixed" @hidePopup="modal_show = false">
				<view style="width: 500rpx;">
					<view class="display_flex">
						<view style="width: 160rpx;color: #999;">本次收款：</view>
						<input class="uni-input" placeholder="请输入本次收款金额" v-model="modal_sk.sk_number" type="digit" />
					</view>
					<view class="display_flex">
						<view style="width: 160rpx;color: #999;">备注：</view>
						<input class="uni-input" placeholder="请输入备注信息" v-model="modal_sk.beizhu" />
					</view>
			
					<view class="modal_confrimbutton" @click="confrim_sk">确定</view>
				</view>
			</uni-popup>
			
			<view class="getmoney_button" @click="modal_show = true">收款</view>
		</view>
		

	</view>
</template>

<script>
	import customs from '@/utils/customs.js';
	import common from '@/utils/common.js';
	
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import Bmob from "hydrogen-js-sdk";
	import loading from "@/components/Loading/index.vue"
	
	let that;
	export default {
		components: {
			faIcon,
			loading,
			uniPopup
		},

		data() {
			return {
				loading: true,
				modal_show:false,
				custom: {},
				modal_sk: {
					sk_number: '',
					beizhu: ""
				}
			}
		},

		onLoad(options) {
			that = this;
			//console.log(options.id)
			customs.custom_detail(options.id).then(res => {
				console.log(res)
				that.custom = res
				that.loading = false
			})
		},
		methods: {
			//确认收款金额
			confrim_sk(){
				console.log(that.modal_sk)
				let input_money = that.modal_sk.sk_number
				let beizhu = that.modal_sk.beizhu
				let custom_id = that.custom.objectId
				
				if (input_money == null || input_money.length == 0) {
				      uni.showToast({
				        title: '请输入收款金额',
				        icon: "none"
				      });
				    } else {
				      uni.showLoading({ title: '加载中...' });
				      that.modal_show = false;
				      const query = Bmob.Query('customs');
				      query.get(custom_id).then(res => {
				        if (res.debt - Number(input_money) < 0)
				        {
				          uni.hideLoading();
				          uni.showToast({
				            icon:"none",
				            title: '收款金额过大',
				          })
				        } else if (res.debt == null || res.debt == 0 )
				        {
				          uni.hideLoading();
				          uni.showToast({
				            icon: "none",
				            title: '该客户没有欠款',
				          })
				        }
				        else{
				          res.set('debt', res.debt - Number(input_money));
				          res.save();
				
				          const pointer = Bmob.Pointer('customs');
				          const poiID = pointer.set(custom_id);
				          const pointer1 = Bmob.Pointer('_User');
				          const poiID1 = pointer1.set(uni.getStorageSync("uid"));
									const pointer2 = Bmob.Pointer('_User');
									const poiID2 = pointer2.set(uni.getStorageSync("masterId"));
									
				          const query = Bmob.Query('debt_history');
				          query.set("custom", poiID);
				          query.set("master", poiID1);
									query.set("operater", poiID2)
				          query.set("debt_number", Number(input_money))
									query.set("beizhu", beizhu)
				          query.save().then(res => {
				            console.log(res)
										common.log(uni.getStorageSync("user").nickName+"操作'"+that.custom.custom_name+"'客户还款￥"+input_money+"元",6,res.objectId);
				            uni.hideLoading();
										customs.custom_detail(that.custom.objectId).then(res => {
											console.log(res)
											
											that.custom = res
											uni.showToast({
											  title: '收款成功',
											});
										})
				            
				          }).catch(err => {
				            console.log(err)
				          })
				        }
				
				      }).catch(err => {
				        console.log(err)
				      })
				    }
			},

		},
	}
</script>

<style>
	page {
		color: #3D3D3D;
	}

	.modal_confrimbutton {
		background: #426AB3;
		color: #fff;
		width: 60%;
		padding: 20rpx 0;
		text-align: center;
		margin-left: 20%;
		border-radius: 8rpx;
		margin-top: 30rpx;
	}

	.list_item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
	}

	.left_desc {
		color: #999;
	}

	.border_bottom {
		border-bottom: 1rpx solid#DDDDDD;
	}

	.getmoney_button {
		width: 100%;
		background: #426AB3;
		color: #FFFFFF;
		padding: 20rpx 0;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
