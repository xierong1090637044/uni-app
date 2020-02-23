<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="goto_add">
			<view class="input-view display_flex">
				<fa-icon type="search" size="16" color="#999"></fa-icon>
				<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="input_confirm" />
			</view>
		</uni-nav-bar>

		<view class="display_flex good_option_view" style="background: #fff;">
			<view class="good_option" @click="selectd('order')">
				<view class="good_optionText">{{headerSelection.order.desc || '排序'}}</view>
				<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
			</view>
			<!--<view class="good_option" @click="selectd('options')">
				<view class="good_optionText">筛选</view>
				<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
			</view>-->
			<view class="good_option" @click="option_reset">
				<view class="good_optionText">重置</view>
				<fa-icon type="repeat" size="16" color="#999"></fa-icon>
			</view>
		</view>

		<view style="padding: 10rpx 30rpx;background: #FAFAFA;color: #999;" class="display_flex_bet">
			<view style="font-size: 24rpx;font-weight: 500;">客户总数：{{customHeader.num}}</view>
			<view style="font-size: 24rpx;font-weight: 500;">应收欠款：{{customHeader.debtMoney}}</view>
		</view>

		<scroll-view class="content" scroll-y="true" v-if="people && people.length > 0">
			<view class="info_item">
				<radio-group @change="select_this">
					<label v-for="(item,index) in people" :key="index" style="width: 100%;padding: 20rpx 0 20rpx;" class="normalBorder display_flex_bet">
						<view class="display_flex_bet" @click="gotoDetail(item)" style="width: 100%;">
							<image v-if="item.Images && item.Images.length> 0 " :src="item.Images[0]" class="stock_avatar" @click.stop="priviewImg(item.Images[0])"
							 mode="aspectFit"></image>
							<image src="/static/custom.png" class="stock_avatar" v-else></image>
							<view style="width: 80%;margin-right: 20rpx;">
								<view style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">{{item.custom_name}}</view>
								<view class="display_flex_bet">
									<view style="color: #999;">应收欠款：<text style="color: #f30;">￥{{item.debt || 0}}</text></view>
									<view class="display_flex" @click.stop="makePhoneCall(item.custom_phone)">
										<fa-icon type="phone" size="14" color="#999" />
										<text style="margin-left: 10rpx;font-size: 24rpx;">打电话</text>
									</view>
								</view>
							</view>

							<view v-if="is_custom">
								<radio :value="JSON.stringify(item)" style="transform:scale(0.7)" />
							</view>
							<fa-icon type="angle-right" size="20" color="#999" v-else />

						</view>
					</label>
				</radio-group>

				<!--排序模板-->
				<view v-if="showOrder" class="modal_backgroundTransparent" @click="showOrder = false">
					<view class="showOptionsTransparent">
						<view class="display_flex_bet" v-for="(item,index) in orders" :key="index" style="padding: 16rpx 30rpx;border-bottom: 1rpx solid#F7F7F7;"
						 @click="selectOrder(item)">
							<view style="color: #333;">{{item.desc}}({{item.notice}})</view>
							<fa-icon type="check" size="18" color="#2ca879" v-if="item.checked"></fa-icon>
						</view>
					</view>
				</view>

			</view>
		</scroll-view>
		<nocontent v-else :type="1"></nocontent>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			uniNavBar,
		},
		data() {
			return {
				people: [], //获得人员数组
				is_producer: false,
				is_custom: false,
				showOrder: false, //是否显示排序
				showOptions:false,
				type: '', //选择类型,
				customHeader: {
					num: 0,
					debtMoney: 0
				},

				headerSelection: {
					order: {
						"order": "-createdAt"
					},
					options: '',
				},
				orders: [{
					"desc": "应收欠款",
					"notice": "从高到低",
					"order": "-debt",
					"checked": false,
				}, {
					"desc": "应收欠款",
					"notice": "从低到高",
					"order": "debt",
					"checked": false,
				}, {
					"desc": "创建日期",
					"notice": "最新",
					"order": "-createdAt",
					"checked": true,
				}, {
					"desc": "创建日期",
					"notice": "最晚",
					"order": "createdAt",
					"checked": false,
				}, {
					"desc": "名字",
					"notice": "正序",
					"order": "goodsName",
					"checked": false,
				}]
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');

			if (options.type == "custom" || options.type == "customFinance") {
				that.is_custom = true;
				that.load_data("customs")
			}

			that.type = options.type
		},

		onShow() {
			uni.removeStorageSync("customs")
			uni.removeStorageSync("custom_type")
			that.load_data("customs")
		},
		onUnload() {
			search_text = ""
		},
		methods: {

			//头部的options选择
			selectd(type) {
				if (type == "order") {
					that.showOrder = true
				} else if (type == "options") {
					that.showOptions = true
				}
			},
			
			//选择当前排序
			selectOrder(item){
				for(let item of that.orders){
					item.checked = false
				}
				item.checked = true
				that.headerSelection.order = item
				that.load_data("customs")
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
			
			//点击仓库去到详情
			gotoDetail(item) {
				if (that.is_custom) {
					return
				}
				uni.navigateTo({
					url: 'custom_detail/custom_detail?id='+item.objectId
				})
			},

			//选择此供货商
			select_this(e) {
				let custom =JSON.parse(e.detail.value);
				if (that.type == "customFinance") {
					if (custom.debt == 0 || custom.debt == '') {
						uni.showToast({
							icon: "none",
							title: "没有欠款"
						})
						return
					}
				}

				uni.setStorageSync("custom", custom)
				uni.navigateBack({
					delta: 1
				})
			},

			//前去添加客户
			goto_add() {
				uni.navigateTo({
					url: "add/add?type=customs"
				})
			},

			//输入内容筛选
			input_confirm(e) {
				search_text = e.detail.value
				that.load_data("customs")
			},
			
			//modal重置的确认点击
			option_reset() {
				that.headerSelection = {
					order: {"order":"-createdAt"},
					options: '',
				};
				that.orders =  [{
					"desc": "应收欠款",
					"notice": "从高到低",
					"order": "-debt",
					"checked": false,
				}, {
					"desc": "应收欠款",
					"notice": "从低到高",
					"order": "debt",
					"checked": false,
				}, {
					"desc": "创建日期",
					"notice": "最新",
					"order": "-createdAt",
					"checked": true,
				}, {
					"desc": "创建日期",
					"notice": "最晚",
					"order": "createdAt",
					"checked": false,
				}, {
					"desc": "名字",
					"notice": "正序",
					"order": "goodsName",
					"checked": false,
				}]
				that.load_data("customs")
			},

			//加载数据
			load_data(type) {
				uni.showLoading({title:"加载中..."});
				that.customHeader.num = 0;
				that.customHeader.debtMoney = 0;
				
				const query = Bmob.Query(type);
				query.equalTo("parent", "==", uid);
				query.order(that.headerSelection.order.order);
				query.limit(500);
				if (search_text) {
					query.equalTo("custom_name", "==", {
						"$regex": "" + search_text + ".*"
					});
				}
				query.find().then(res => {
					console.log(res)
					uni.hideLoading();
					that.people = res;

					for (let item of res) {
						that.customHeader.num += 1;
						that.customHeader.debtMoney += item.debt || 0
					}
				});
			},

		}
	}
</script>

<style>
	page {
		background: #FAFAFA;
	}

	.uni-common-mt {
		padding: 30rpx;
	}

	.content {
		height: calc(100vh - 214rpx);
	}

	.info_item {
		padding: 0rpx 30rpx;
		background: #fff;
	}
	.stock_avatar {
		width: 70rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}
	.item {
		border-bottom: 1rpx solid#ccc;
		padding-bottom: 10rpx;
		margin-bottom: 10rpx;
		width: 100%;
	}
</style>
