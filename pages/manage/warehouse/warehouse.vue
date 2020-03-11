<template>
	<view style="height: 100vh;">
		<view>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="goto_add"
			 :shadow="false">
				<view class="input-view display_flex">
					<fa-icon type="search" size="16" color="#999"></fa-icon>
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="input_confirm" />
				</view>
			</uni-nav-bar>

			<!--<view class="uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
			</view>-->

			<view style="padding: 10rpx 30rpx;background: #FAFAFA;color: #999;" class="display_flex_bet">
				<view style="font-size: 24rpx;font-weight: 500;">仓库总数：{{header.userNum}}</view>
				<view style="font-size: 24rpx;font-weight: 500;">停用仓库：{{header.noUserNum}}</view>
			</view>

			<scroll-view scroll-y class="indexes" style='height:calc(100vh - 142rpx)' scroll-with-animation="true"
			 enable-back-to-top="true" v-if="stocks && stocks.length > 0">
				<radio-group @change="select_this">
					<label v-for="(stock,index) in stocks" :key="index" class="display_flex content">
						<view style="width: 100%;">
							<view class="display_flex_bet" @click.stop="goto_detail(stock)" style="padding: 10rpx 0;">
								<view class="display_flex" style="width: 100%;margin-right: 30rpx;">
									<image v-if="stock.Image && stock.Image.length> 0 " :src="stock.Image[0]" class="stock_avatar" @click.stop="priviewImg(stock.Image[0])"
									 mode="aspectFit"></image>
									<image src="/static/warehouse.png" class="stock_avatar" v-else></image>
									<view style="width: 100%;">
										<view class='stock_name'>{{stock.stock_name}}</view>
										<view class='stock_mobile' v-if="stock.charge &&stock.charge.nickName">负责人：{{stock.charge.nickName}}</view>
										<view class='stock_mobile' v-else-if="stock.Ncharge &&stock.Ncharge.nickName">负责人：{{stock.Ncharge.nickName}}</view>
										<view class='stock_mobile' v-else>负责人：未填写</view>

										<view class="display_flex_bet" style="width: 100%;">
											<view class='stock_mobile'>地址：{{stock.address || ''}}</view>
											<view class="display_flex" @click.stop="makePhoneCall(stock.phoneNumber)">
												<fa-icon type="phone" size="14" color="#999" />
												<text style="margin-left: 10rpx;font-size: 24rpx;">打电话</text>
											</view>
										</view>

									</view>
								</view>

								<view v-if="is_choose">
									<radio :value="JSON.stringify(stock)" style="transform:scale(0.7)" />
								</view>
								<fa-icon type="angle-right" size="20" color="#999" v-else />

							</view>

							<view class="right_item normalBorder"></view>
						</view>

					</label>
				</radio-group>
			</scroll-view>
			<nocontent v-else :type="1"></nocontent>

		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import staffs from "@/utils/staffs.js"

	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			uniSegmentedControl,
			loading,
			uniNavBar
		},
		data() {
			return {
				is_choose: false,
				loading: true,
				stocks: [],
				items: ['已启用', '未启用'],
				current: 0,
				disabled: false,
				type: '', //'out_choose'是调拨时的选择
				header: {
					userNum: 0,
					noUserNum: 0,
				},
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');

			//console.log(options)
			if (options.type == "choose" || options.type == "out_choose" || options.type == "choose_more" || options.type =="in_choose") {
				that.is_choose = true
				that.type = options.type
			}
		},
		onShow() {
			that.getstock_list()
		},
		onUnload() {
			search_text = ""
		},
		methods: {

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

			//预览图片
			priviewImg(url) {
				uni.previewImage({
					current: url,
					urls: [url],
				});
			},

			//tab点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index

					if (index == 0) {
						that.disabled = false;
						that.getstock_list()
					} else if (index == 1) {
						that.disabled = true;
						that.getstock_list()
					}
				}
			},

			//点击仓库去到详情
			goto_detail(stock) {
				if (that.is_choose) {
					return
				}
				uni.setStorageSync("stock", stock)
				uni.navigateTo({
					url: "detail/detail"
				})
			},

			//选择此仓库
			select_this(e) {
				console.log(e)
				let item = JSON.parse(e.detail.value);
				let warehouse;
				if (that.type == "choose_more") {
					warehouse = uni.getStorageSync("warehouse") || [];
				} else {
					warehouse = []
				}

				let _stocks = {};

				_stocks.stock = item;
				_stocks.reserve = 0;
				_stocks.warning_num = 0;

				if (JSON.stringify(warehouse).indexOf(JSON.stringify(_stocks)) == -1) {
					warehouse.push(_stocks);
					if (that.type == "out_choose") {
						uni.setStorageSync("out_warehouse", warehouse)
					} else if(that.type == "in_choose"){
						uni.setStorageSync("in_warehouse", warehouse)
					}else {
						uni.setStorageSync("warehouse", warehouse)
					}
					uni.navigateBack({
						delta: 1
					})
				} else {
					uni.showToast({
						title: "已选择此仓库",
						icon: "none"
					})
				}

			},

			//前去添加仓库
			goto_add() {
				let user = uni.getStorageSync("user")
				let identity = uni.getStorageSync("identity")
				uni.navigateTo({
					url: "add/add"
				})
			},

			//输入内容筛选
			input_confirm(e) {
				search_text = e.detail.value
				that.getstock_list();
			},

			//得到仓库列表
			getstock_list: function() {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("stocks");
				query.order("-num");
				query.include("charge", "shop", "Ncharge")
				query.equalTo("parent", "==", uid);
				//query.equalTo("disabled", "!=", !that.disabled);
				if (search_text) {
					query.equalTo("stock_name", "==", {
						"$regex": "" + search_text + ".*"
					});

				}
				query.limit(500);
				query.find().then(res => {
					//console.log(res)

					uni.hideLoading();
					let stocks = res;
					that.header.userNum = res.length;
					let _warehouse = [];
					for (let item of stocks) {
						if (item.disabled) {
							that.header.noUserNum += 1
						}
						let warehouse = {}
						warehouse.name = item.stock_name
						warehouse.objectId = item.objectId
						_warehouse.push(warehouse)
					}
					uni.setStorageSync("_warehouse", _warehouse)

					uni.getStorage({
						key: 'identity',
						success: function(res) {
							if (res.data == "2") {
								staffs.get_satffAuth().then(res => {
									console.log(res)
									let manange_stocks = []
									for (let item of res.stocks) {
										for (let stock of stocks) {
											if (stock.objectId == item) {
												manange_stocks.push(stock)
											}
										}
									}
									that.stocks = manange_stocks
								});
							} else if (res.data == "1") {
								that.stocks = stocks
							}
						},
					})
				});
			},

		}
	}
</script>

<style>
	page {
		height: 100vh;
		background: #FAFAFA;
	}

	.uni-common-mt {
		background: #FFFFFF;
		padding: 20rpx 0;
	}

	.stock_name {
		font-weight: bold;
		font-size: 30rpx;
		color: #3D3D3D;
		margin-bottom: 4rpx;
		line-height: 36rpx;
	}

	.stock_mobile {
		color: #999;
		line-height: 36rpx;
		font-size: 24rpx;
	}

	.right_item {
		width: 100%;
		padding-bottom: 0 10rpx;
	}

	.stock_avatar {
		width: 82rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}

	.content {
		padding: 0rpx 30rpx;
		background: #FFFFFF;
	}
</style>
