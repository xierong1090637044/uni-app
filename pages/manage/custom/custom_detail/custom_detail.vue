<template>
	<view>
		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>

		<view>
			<view class="display_flex_bet frist" style="background: #fff;padding: 20rpx 30rpx;">
				<view>
					<image v-if="custom.Images && custom.Images.length > 0" :src="custom.Images[0]" style="width: 100rpx;height: 100rpx;"
					 mode="aspectFit"></image>
					<image v-else src="/static/custom.png" style="height: 100rpx;width: 100rpx;" mode="aspectFit"></image>
				</view>

				<view style="width: calc(100% - 120rpx);">
					<view style="color: #3d3d3d;font-weight: bold;">
					<text>{{custom.custom_name}}</text>
					<text style="font-size: 20rpx;color: #999" v-if="custom.orginDebt">（期初欠款：￥{{custom.orginDebt}})</text>
					</view>
					<view class="display_flex_bet">
						<view class="noticeText">地址:{{custom.custom_address || "未填写"}}</view>
						<view class="noticeText">电话:{{custom.custom_phone || "未填写"}}</view>
					</view>
					<view class="display_flex_bet">
						<view>
							欠款金额：<text style="color: #f30;font-weight: bold;">￥{{custom.debt}}</text>
							
						</view>
						<view class="display_flex labeNotice" @click.stop="makePhoneCall(custom.custom_phone)">
							<fa-icon type="phone" size="14" color="#fff" />
							<text style="margin-left: 10rpx;font-size: 24rpx;">打电话</text>
						</view>
					</view>
				</view>
			</view>

			<view style="margin: 30rpx 0;">
				<uni-segmented-control :current="current" :values="items" style-type="button" active-color="#426ab3" @clickItem="onClickItem" />
			</view>

			<!--销售情况-->
			<view v-if="current == 0">
				<view class="frist">
					<view class="display_flex_bet header">
						<view class="listItem" @click="showOptions">
							<text v-if="sellType == 0">销售</text>
							<text v-else-if="sellType == 1">退货</text>
							<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
						</view>
						<view class="display_flex listItem" @click="open">
							<view>
								<view style="font-size: 24rpx;line-height: 28rpx;">{{sellParams.startDate}}</view>
								<view style="font-size: 24rpx;line-height: 28rpx;">{{sellParams.endDate}}</view>
							</view>
							<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
						</view>
					</view>
				</view>

				<view class="display_flex_bet second">
					<view class="secondItem">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">{{buyTotal.num || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text v-if="sellType == 0">销售笔数</text>
							<text v-if="sellType == 1">退款笔数</text>
						</view>
					</view>
					<view class="secondItem">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">{{buyTotal.total || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text v-if="sellType == 0">销售数量</text>
							<text v-if="sellType == 1">退货数量</text>
						</view>
					</view>
					
					<view class="secondItem" v-if="sellType == 0">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">￥{{buyTotal.realCost || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text>销售成本</text>
						</view>
					</view>
					<view class="secondItem" v-else-if="sellType == 1">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">￥{{buyTotal.money || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text>退款金额</text>
						</view>
					</view>
					
					<view class="secondItem" v-if="sellType == 0">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">￥{{buyTotal.realMoney || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text>实际销售金额</text>
						</view>
					</view>
				</view>
			</view>
			
			<!--收款情况-->
			<view v-else-if="current == 1">
				<view class="frist">
					<view class="display_flex_bet header">
						<view class="listItem">
							<text>收款</text>
							<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
						</view>
						<view class="display_flex listItem" @click="open">
							<view>
								<view style="font-size: 24rpx;line-height: 28rpx;">{{sellParams.startDate}}</view>
								<view style="font-size: 24rpx;line-height: 28rpx;">{{sellParams.endDate}}</view>
							</view>
							<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
						</view>
					</view>
				</view>
			
				<view class="display_flex_bet second">
					<view class="secondItem">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">{{getMoney.num || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text>收款笔数</text>
						</view>
					</view>
					<view class="secondItem">
						<view style="line-height: 40rpx;color: #333;font-weight: bold;">{{getMoney.money || 0}}</view>
						<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">
							<text>收款金额</text>
						</view>
					</view>
				</view>
			</view>
			
			<!--跟进记录-->
			<view v-if="current ==2" style="background: #fff;padding: 10rpx 20rpx 0;">
				<view class="display_flex_bet" style="border-bottom: 1rpx solid#ddd;padding-bottom: 10rpx;">
					<view>跟进情况</view>
					<view style="color: #f30;" @click="customFollowMore">更多</view>
				</view>
				<view style="padding: 0 20rpx;">
					<view v-for="(item,index) in CustomFollowList" :key="index" style="border-bottom: 1rpx solid#ddd;">
						<view style="min-height: 120rpx;border-bottom: 1rpx solid#ddd;border-bottom-style: dashed;">{{item.content}}</view>
						<view class="display_flex_bet" style="padding: 10rpx 0;">
							<view style="font-size: 20rpx;">{{item.nowTime.iso}}</view>
							<view style="font-size: 20rpx;">下次跟进时间：{{item.nextTime.iso}}</view>
						</view>
					</view>
				</view>
			</view>

		</view>

		<uni-calendar ref="calendar" :date="sellParams.startDate" :insert="false" :lunar="true" :range="true" @confirm="confirm"
		 :endDate="sellParams.startDate" />
		 
		 <customDetBottom :custom="custom"></customDetBottom>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import customs from '@/utils/customs.js';

	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
	import customDetBottom from '@/components/customDetBottom.vue'

	let that;
	let uid;
	export default {
		components: {
			customDetBottom,
			uniCalendar,
			uniSegmentedControl
		},

		data() {
			return {
				items: ['销售情况', '收款记录','跟进记录'],
				current: 0,
				sellType: 0,

				custom: {},
				sellParams: {
					customId: '',
					startDate: common.getDay(0, false),
					endDate: common.getDay(1, false),
					type: -1,
					extra_type: 1,
				}, //获取销售情况参数
				
				getParams:{
					type:"get",
					custom_name:'',
					pageSize:3,
					pageNum:1,
				},
				CustomFollowList:[],
				
				buyTotal: {},//销售情况记录
				getMoney:{},//收款情况记录
			}
		},

		onLoad(options) {
			that = this;
			that.sellParams.customId = options.id;
			uid = uni.getStorageSync('uid');
			//console.log(options.id)
		},
		
		onShow() {
			customs.custom_detail(that.sellParams.customId).then(res => {
				//console.log(res)
				let custom = res
				that.getParams.custom_name = res.custom_name
				const query = Bmob.Query("order_opreations");
				query.equalTo("type", "==", -1);
				query.equalTo("extra_type", "==", 1);
				query.equalTo("master", "==", uid);
				query.equalTo("custom", "==", that.sellParams.customId);
				query.statTo("sum", "debt");
				query.find().then(res => {
					if(res.length > 0){
						custom.debt = res[0]._sumDebt
					}else{
						custom.debt = 0
					}
					
					that.custom = custom
				})
				
				that.sellParams.customId = res.objectId
				if(that.current == 0){
					customs.getAllCustomSellList(that.sellParams).then(res => {
						that.buyTotal = res
					})
				}else if(that.current == 1){
					customs.getAllCustomInRecord(that.sellParams).then(res => {
						that.getMoney = res
					})
				}else if(that.current == 2){
					this.$http.Post("stock_customFollow", this.getParams).then(res => {
						this.CustomFollowList = res.data
					})
				}
			})
		},
		
		methods: {
			
			customFollowMore(){
				uni.navigateTo({
					url:"/pages/manage/customFollowHistory/customFollowHistory?custom_name="+that.custom.custom_name
				})
			},

			showOptions() {
				uni.showActionSheet({
					itemList: ['销售', '退货'],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.sellType = 0
							that.sellParams.type = -1
							that.sellParams.extra_type = 1
						} else {
							that.sellType = 1
							that.sellParams.type = 1
							that.sellParams.extra_type = 4
						}
						customs.getAllCustomSellList(that.sellParams).then(res => {
							that.buyTotal = res
						})
					}
				});
			},

			open() {
				that.$refs.calendar.open();
			},

			confirm(e) {
				console.log(e)
				if (e.range.data.length == 0) {
					that.sellParams.startDate = e.fulldate
				} else {
					that.sellParams.startDate = e.range.data[0];
					that.sellParams.endDate = e.range.data[e.range.data.length - 1];
				}
				if(that.current == 0){
					customs.getAllCustomSellList(that.sellParams).then(res => {
						console.log(res)
						that.buyTotal = res
					})
				}else if(value == 1){
					customs.getAllCustomInRecord(that.sellParams).then(res => {
						console.log(res)
						that.getMoney = res
					})
				}
			},

			onClickItem(value) {
				that.current = value
				if(that.current == 0){
					customs.getAllCustomSellList(that.sellParams).then(res => {
						console.log(res)
						that.buyTotal = res
					})
				}else if(that.current == 1){
					customs.getAllCustomInRecord(that.sellParams).then(res => {
						console.log(res)
						that.getMoney = res
					})
				}else if(that.current == 2){
					this.$http.Post("stock_customFollow", this.getParams).then(res => {
						this.CustomFollowList = res.data
					})
				}
			},

			//打电话
			makePhoneCall(phone) {
				if (phone) {
					uni.makePhoneCall({
						phoneNumber: phone //仅为示例
					});
				} else {
					uni.showToast({
						icon: "none",
						title: "未填写联系电话"
					})
				}
			},

			show_options() {
				uni.showActionSheet({
					itemList: ["编辑", "删除"],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edit(that.custom)
						} else if (res.tapIndex == 1) {
							that.delete_this(that.custom.objectId)
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			//编辑操作
			edit(item) {
				uni.setStorageSync("customs", item);
				uni.setStorageSync("custom_type", "customs");
				uni.navigateTo({
					url: "../add/add"
				})
			},

			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '是否删除此客户',
					success: function(res) {
						if (res.confirm) {
							that.delete_data("customs", id)
						}
					}
				});
			},

			//删除数据
			delete_data(type, id) {
				console.log(id)
				const query = Bmob.Query(type);
				query.destroy(id).then(res => {
					console.log(res)
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					uni.navigateBack({
						delta: 1
					})
				}).catch(err => {
					console.log(err)
				})
			},

		},
	}
</script>

<style lang="scss">
	page {
		color: #3D3D3D;
	}

	.labeNotice {
		background: #426ab3;
		color: #fff;
		padding: 2rpx 8rpx;
		border-radius: 8rpx;
	}

	.frist {
		background: #fff;

		.header {
			padding: 10rpx 0;
		}

		.listItem {
			text-align: center;
			width: 33.33%;
			justify-content: center;
		}
	}

	.second {
		background: #fff;
		border-top: 1rpx solid#ddd;
		padding: 20rpx 0;

		.secondItem {
			width: 50%;
			text-align: center;
		}
	}
</style>
