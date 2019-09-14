<template>
	<!--当月详情-->
	<view>
		<uni-notice-bar :show-icon="true" :single="true" color="#426ab3" text="新版库存表上线啦,接下来将更新此小程序,旧版的将不再更新" />

		<view style="background: #426ab3;" v-if="weather">
			<view class="display_flex" style="padding: 20rpx 30rpx 10rpx;">
				<fa-icon :type="welcome.icon" size="20" color="#fdb933" />
				<text style="font-weight: bold;margin-left: 10rpx;color: #fff;">{{welcome.text}}</text>
			</view>
			<view style="padding: 0 30rpx 10rpx;color: #fff;font-size: 24rpx;" class="display_flex_bet">
				<view class="display_flex">
					<view>{{weather.city.data}}</view>
					<view style="margin-left: 10px;">{{weather.temperature.data}}℃</view>
				</view>
				<view class="display_flex">
					<view>{{weather.weather.data}}</view>
					<view style="margin-left: 10px;">{{weather.winddirection.data}} {{weather.windpower.data}}</view>
				</view>
			</view>
		</view>
		
		<view>{{openid}}</view>

		<swiper indicator-dots="true" indicator-active-color="#fff" class='swiper' autoplay='true'>
			<block>
				<swiper-item class="item">
					<view class='every_item'>
						<view class='s_num'>{{get_reserve}}</view>
						<view>今日入库</view>
					</view>
					<view class='every_item'>
						<view class='s_num'>{{out_reserve}}</view>
						<view>今日出库</view>
					</view>
				</swiper-item>

				<swiper-item class="item">
					<view class='every_item'>
						<view class='s_num'>{{total_reserve}}</view>
						<view>库存总量</view>
					</view>
					<view class='every_item'>
						<view class='s_num'>{{total_money}}</view>
						<view>库存成本</view>
					</view>
				</swiper-item>

				<swiper-item class="item">
					<view class='every_item'>
						<view class='s_num'>{{total_products}}</view>
						<view>库存种类</view>
					</view>
				</swiper-item>
			</block>
		</swiper>


		<swiper vertical="true" style="color: #333 !important;height: 10vh;background:#426ab3 ;" autoplay="true">
			<block>
				<swiper-item class="item" v-for="(item,index) in logsList" :key="index">
					<navigator class="display_flex_bet" style="width: 100%;background: #fff;height: 100%;padding:0 30rpx;" hover-class="none"
					 :url="item.link">
						<view style="line-height: 5vh;width: 90%;">
							<view style="font-weight: bold;" class="text_overflow">{{item.log}}</view>
							<view style="font-size: 24rpx;color: #999;">{{item.createdAt}}</view>
						</view>
						<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
					</navigator>

				</swiper-item>
			</block>
		</swiper>

		<!--操作列表-->
		<view class='o_list' style="margin-top: 20rpx;">

			<navigator v-for='(value,index) in optionsLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
				<view style='width:100%'>
					<image :src="(value.icon)" class='o_image' />
				</view>
				<view class='o_text'>{{value.name}}</view>
			</navigator>
		</view>
		<view class='scan_code display_flex' @click='scan_code'>
			<fa-icon type="qrcode" size="20" color="#fff" class="icon-scan" />
			<text>扫描产品条形码</text>
		</view>


	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import amapFile from '@/utils/amap-wx.js';
	import common from '@/utils/common.js';
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	let that;
	let uid;

	export default {
		components: {
			faIcon,
			uniNoticeBar
		},
		data() {
			return {
				welcome: {
					text: '',
					icon: '',
				},
				weather: '',
				logsList: [],
				optionsLists: [{
						name: '产品入库',
						icon: '/static/entering.png',
						url: '/pages/common/goods-select/goods-select?type=entering'
					},
					{
						name: '产品出库',
						icon: '/static/delivery.png',
						url: '/pages/common/goods-select/goods-select?type=delivery'
					},
					{
						name: '退货入库',
						icon: '/static/return_goods.png',
						url: '/pages/common/goods-select/goods-select?type=returing'
					},
					{
						name: '库存盘点',
						icon: '/static/stocking.png',
						url: '/pages/common/goods-select/goods-select?type=counting'
					},
				],
				get_reserve: 0,
				out_reserve: 0,
				total_reserve: 0,
				total_money: 0,
				total_products: 0,
				openid:''
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			
			console.log(options)
			if(options.openid){
				uni.setStorageSync("openid",options.openid)
			}

			let now = new Date();
			let hour = now.getHours(); //得到小时
			let myAmapFun = new amapFile.AMapWX({
				key: 'ddf21583182190befcf92c027b97f8ab'
			});
			myAmapFun.getWeather({
				success: function(data) {
					console.log(data)
					that.weather = data

					if (hour < 6) {
						console.log(hour)
						that.welcome.text = "凌晨注意休息！好的身体才能高效的工作"
						that.welcome.icon = "moon-o"
					} else if (hour < 9) {
						that.welcome.text = "早上好，又是开心快乐的一天！"
						that.welcome.icon = "sun-o"
					} else if (hour < 11) {
						that.welcome.text = "上午好，请努力加油哦，会成功的！"
						that.welcome.icon = "sun-o"
					} else if (hour < 14) {
						that.welcome.text = "中午好，辛勤劳动的你是最可爱的！"
						that.welcome.icon = "sun-o"
					} else if (hour < 18) {
						that.welcome.text = "下午好，没有什么会阻挡你的，相信自己！"
						that.welcome.icon = "sun-o"
					} else {
						that.welcome.text = "晚上好，更深露重，适当工作，适当休息！"
						that.welcome.icon = "sun-o"
					}
					//成功回调
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}
			})
		},

		onShow() {
			that.gettoday_detail();
			that.loadallGoods();
			that.get_logsList();
		},

		methods: {
			//点击扫描产品条形码
			scan_code: function() {
				uni.showActionSheet({
					itemList: ['扫码出库', '扫码入库', '扫码盘点', '查看详情', '扫码添加商品'],
					success(res) {
						that.scan(res.tapIndex);
					},
					fail(res) {
						console.log(res.errMsg)
					}
				})
			},

			//扫码操作
			scan: function(type) {
				this.$wechat.scanQRCode().then(res => {
					let result = res.split(",")[1]
					let array = result.split("-");

					if (type == 0) {
						uni.navigateTo({
							url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 1) {
						uni.navigateTo({
							url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 2) {
						uni.navigateTo({
							url: '/pages/common/good_count/good_count?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 3) {
						uni.navigateTo({
							url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 4) {
						uni.navigateTo({
							url: '/pages/manage/good_add/good_add?id=' + result,
						})
					}
				})
			},
			//得到今日概况
			gettoday_detail: function() {
				let get_reserve = 0;
				let out_reserve = 0;
				let get_reserve_real_money = 0;
				let out_reserve_real_money = 0;
				let get_reserve_num = 0;
				let out_reserve_num = 0;

				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("createdAt", ">=", common.getDay(0, true));
				query.equalTo("createdAt", "<=", common.getDay(1, true));

				query.include("goodsId");
				query.find().then(res => {
					for (var i = 0; i < res.length; i++) {
						if (res[i].type == 1) {
							get_reserve = get_reserve + res[i].num;
							get_reserve_real_money = get_reserve_real_money + res[i].num * res[i].goodsId.retailPrice;
							get_reserve_num = get_reserve_num + res[i].total_money;
						} else if (res[i].type == -1) {
							out_reserve = out_reserve + res[i].num;
							out_reserve_real_money = out_reserve_real_money + res[i].num * res[i].goodsId.costPrice;
							out_reserve_num = out_reserve_num + res[i].total_money;
						}
					}

					that.get_reserve = get_reserve.toFixed(wx.getStorageSync("print_setting").show_float)
					that.out_reserve = out_reserve.toFixed(wx.getStorageSync("print_setting").show_float)
				})
			},

			//得到总库存数和总金额
			loadallGoods: function() {
				var total_reserve = 0;
				var total_money = 0;
				let length = 0
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.limit(500);
				query.find().then(res => {
					for (let item of res) {
						total_reserve = total_reserve + item.reserve;
						total_money = total_money + item.reserve * item.costPrice;
						if (res.length == 500) {
							const query = Bmob.Query("Goods");
							query.equalTo("userId", "==", uid);
							query.skip(500);
							query.limit(500);
							query.find().then(res => {
								for (var i = 0; i < res.length; i++) {
									total_reserve = total_reserve + res[i].reserve;
									total_money = total_money + res[i].reserve * res[i].costPrice;
								}
							})
							that.total_money = total_money.toFixed(uni.getStorageSync("print_setting").show_float),
								that.total_reserve = total_reserve.toFixed(uni.getStorageSync("print_setting").show_float),
								that.total_products = res.length
						} else {
							length += 1
							that.total_money = total_money.toFixed(uni.getStorageSync("print_setting").show_float),
								that.total_reserve = total_reserve.toFixed(uni.getStorageSync("print_setting").show_float),
								that.total_products = length
						}
					}

				});
			},

			//得到日志列表
			get_logsList() {
				const query = Bmob.Query("logs");
				query.equalTo("parent", "==", uid);
				query.equalTo("type", "!=", -2);
				query.order("-createdAt")
				query.limit(20);
				query.find().then(res => {
					//console.log(res)
					for (let item of res) {
						if (item.type == 5) {
							item.link = '/pages/manage/good_det/good_det?id=' + item.detail_id + '&type=false'
						} else if (item.type == -1 || item.type == 1 || item.type == 2 || item.type == 3) {
							item.link = '/pages/report/EnteringHistory/detail/detail?id=' + item.detail_id
						}
					}
					that.logsList = res
				});
			},

		}
	}
</script>

<style>
	.scan_code {
		position: fixed;
		width: calc(100% - 60rpx);
		left: 30rpx;
		right: 30rpx;
		bottom: 10%;
		background: linear-gradient(to right, #426ab3, #118fff);
		line-height: 80rpx;
		text-align: center;
		border-radius: 4px;
		color: #fff;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
	}

	.icon-scan {
		margin-right: 20rpx;
	}

	/* pages/home/index/index.wxss */
	.swiper {
		background: #426ab3;
		color: #fff;
		height: 14vh;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.every_item {
		width: 50%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
	}

	.s_num {
		font-size: 16px;
		font-weight: bold;
	}

	.o_list {
		background: #fff;
		padding: 15px 15px 0;
	}

	.o_image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		border: 3px solid#e2e2e2;
		padding: 6rpx 6rpx 0;
	}

	.o_item {
		width: 25%;
		text-align: center;
		display: inline-block;
		margin-bottom: 20rpx;
	}

	.o_text {
		color: #000;
		font-weight: bold;
		font-size: 23rpx;
	}

	.scan_code {
		position: fixed;
		width: calc(100% - 60rpx);
		left: 30rpx;
		right: 30rpx;
		bottom: 10%;
		background: linear-gradient(to right, #426ab3, #118fff);
		line-height: 80rpx;
		text-align: center;
		border-radius: 8rpx;
		color: #fff;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.2);
		justify-content: center;
	}

	.icon-scan {
		margin-right: 20rpx;
	}
</style>
