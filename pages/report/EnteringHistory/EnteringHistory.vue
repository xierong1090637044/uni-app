<template>
	<view>
		<view>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="筛选" @click-right="shaixuan_click"
			 :left-text="operaterTypeDesc" @click-left="select_operatertype"></uni-nav-bar>

			<view class="display_flex good_option_view">
				<view class="good_option" @click="selectd('all')">
					<text :class="(checked_option == 'all')?'option_selected':''">全部</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'all'"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('one')">
					<text :class="(checked_option == 'one')?'option_selected':''">今天</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'one'"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('two')">
					<text :class="(checked_option == 'two')?'option_selected':''">昨天</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'two'"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('three')">
					<text :class="(checked_option == 'three')?'option_selected':''">七天</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'three'"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('four')">
					<text :class="(checked_option == 'four')?'option_selected':'three'">一个月</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'four'"></fa-icon>
				</view>
			</view>

			<view>
				<view class='page'>
					<scroll-view class='page' scroll-y="true" v-if="list.length > 0">
						<view class='list-item'>
							<view v-for="(item,index) in list" :key="index" class='item' @click='get_detail(item)'>
								<view style='display:flex;width:100%;'>
									<view style='line-height:80rpx'>
										<fa-icon v-if='item.type == 1' type="sign-in" size="20" color="#2ca879" />
										<fa-icon v-if='item.type == -1' type="sign-out" size="20" color="#f30" />
										<fa-icon v-if='item.type == -2' type="random" size="20" color="#4e72b8" />
										<fa-icon v-if='item.type == 2' type="leanpub" size="20" color="#b3b242" />
										<fa-icon v-if='item.type == 3' type="check-square-o" size="20" color="#000" />
										<fa-icon v-if='item.type == 5' type="tasks" size="20" color="#bba14f" />
									</view>
									<view style='margin-left:20rpx;width: 100%;'>
										<view class="display_flex_bet">
											<view><text style='color:#999'>操作者：</text>{{item.opreater.nickName}}</view>
											<view v-if='item.type == -1'>
												<view v-if="item.extra_type == 1" class='order_get' :style="(item.status == false)?'border:1rpx solid#f30;color:#f30':''">
													<text>销售</text>
												</view>
												<view v-else-if="item.extra_type == 4" class='order_get' :style="(item.status == false)?'border:1rpx solid#f30;color:#f30':''">
													<text>采购退货</text>
												</view>
												<view v-else class='order_get'>
													<text>出库</text>
												</view>
											</view>
											<view v-if='item.type == 1'>
												<view v-if="item.extra_type == 1" class='order_get' :style="(item.status == false)?'border:1rpx solid#f30;color:#f30':''">
													<text>采购</text>
												</view>
												<view v-else-if="item.extra_type == 3" class='order_get' style="border:1rpx solid#704fbb;color:#704fbb;font-size: 20rpx;width: 96rpx;text-align: center;">
													<text>生产入库</text>
												</view>
												<view v-else-if="item.extra_type == 4" class='order_get' :style="(item.status == false)?'border:1rpx solid#f30;color:#f30':''">
													<text>销售退货</text>
												</view>
												<view v-else class='order_get'>
													<text>入库</text>
												</view>
											</view>
											<view v-else-if='item.type == -2' class='order_returning' style="color: #4e72b8;border: 1rpx solid#4e72b8;">调拨</view>
											<view v-else-if='item.type == 2' class='order_returning'>退货</view>
											<view v-else-if='item.type == 3' class='order_counting'>盘点</view>
											<view v-else-if='item.type == 5' class='order_get' style="font-size: 20rpx;width: 120rpx;text-align: center;border: 1rpx solid#bba14f;color: #bba14f;">生产单</view>
										</view>

										<view v-if="item.stock && item.stock.stock_name"><text style='color:#999'>仓库：</text>{{item.stock.stock_name}}</view>
										<view class="display_flex_bet">
											<view v-if='item.goodsName'><text style='color:#999'>操作商品：</text>{{item.goodsName}} 等...</view>
											<view style="color: #999;" v-if="item.type !=-2">X{{item.real_num}}</view>
										</view>

										<view v-if="item.beizhu" class='item_beizhu'><text style='color:#999'>备注：</text>{{item.beizhu}}</view>
										<view><text style='color:#999'>操作时间：</text>{{item.createdAt}}</view>
									</view>
								</view>

							</view>
						</view>

					</scroll-view>
					<nocontent v-else :type="1"></nocontent>
				</view>
				<view style="padding: 6rpx 0;border-top: 1rpx solid#ddd;">
					<uni-pagination :show-icon="true" total="100000" :current="page_num" @change="change_page($event)"></uni-pagination>
				</view>


			</view>
		</view>

		<!--筛选模板-->
		<view v-if="showOptions" class="modal_background" @tap.stop.native="showOptions = false">
			<view class="showOptions">
				<view class="input_item1" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">产品名称</view>
						<view class="right_input"><input placeholder="产品名称" v-model="goodsName" @click.stop></input></view>
					</view>
				</view>

				<navigator class="input_item1" hover-class="none" url="/pages/manage/staff/staff?type=choose" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">操作者</view>
						<view class="right_input"><input placeholder="操作者" :value="staff.username" disabled="true"></input></view>
					</view>

					<view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</view>
				</navigator>

				<navigator class="input_item1" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">仓库</view>
						<view class="right_input"><input placeholder="选择仓库" :value="stock.stock_name" disabled="true"></input></view>
					</view>

					<view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</view>
				</navigator>

				<view class="input_item1" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;">
					<view>
						<picker mode="date" :value="option_now_day" @change.stop="bindDateChange1" :end="max_day" @click.stop>
							<view style="display: flex;align-items: center;">
								<view style="margin-right: 20rpx;">{{option_now_day}}</view>
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</picker>
					</view>
					<view>至</view>
					<view>
						<picker mode="date" :value="option_end_day" :end="max_day" @change.stop="bindDateChange2" @click.stop>
							<view style="display: flex;align-items: center;">
								<view style="margin-right: 20rpx;">{{option_end_day}}</view>

								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</picker>
					</view>
				</view>

				<view class="option_bottom">
					<view class="selection" @click="option_reset">重置</view>
					<view class="selection1" @click="option_confrim">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniPagination from "@/components/uni-pagination/uni-pagination.vue"

	let uid;
	let that;
	let opeart_type;
	let extra_type;
	let page_size = 30;
	let page_num = 1;

	export default {
		components: {
			uniPagination,
			uniNavBar,
			uniIcon
		},
		data() {
			return {
				stock: '',
				now_day: common.getDay(0, false),
				end_day: common.getDay(1, false),
				option_now_day: common.getDay(0, false),
				option_end_day: common.getDay(1, false),
				max_day: common.getDay(0, false),
				page_num: 1,
				checked_option: "all",
				list: [],

				showOptions: false, //是否显示筛选
				is_checked: false,
				data_change: false,
				goodsName: "", //输入的操作产品名字
				staff: "", //选择的操作者
				operaterTypeDesc: '', // 操作类型描述
			}
		},

		onLoad(options) {
			that = this;
			uni.removeStorageSync("charge");
			uni.removeStorageSync("is_option");
			opeart_type = Number(options.type);
			extra_type = Number(options.extra_type);
			uid = uni.getStorageSync("uid");

			if (opeart_type == 1) {
				that.operaterTypeDesc = "全部"
				uni.setNavigationBarTitle({
					title: "入库记录"
				})
			} else if (opeart_type == -1) {
				that.operaterTypeDesc = "全部"
				uni.setNavigationBarTitle({
					title: "出库记录"
				})
			}

			that.get_list()
		},

		onShow() {
			if (uni.getStorageSync("charge")) {
				that.staff = uni.getStorageSync("charge")
			}

			if (uni.getStorageSync("warehouse")) { //存在此缓存证明选择了仓库
				that.stock = uni.getStorageSync("warehouse")[0].stock
			}

			if (uni.getStorageSync("is_option")) {
				that.get_list()
			}
		},

		onUnload() {
			page_size = 30;
			page_num = 1;
		},

		methods: {

			//选择操作类型
			select_operatertype() {
				uni.showActionSheet({
					itemList: (opeart_type == 1) ? ['全部','入库', '采购'] : ['全部','出库'],
					success: function(res) {
						if (opeart_type == 1) {
							if (res.tapIndex == 0) {
								that.operaterTypeDesc = "全部"
								extra_type = ''
							}else if (res.tapIndex == 1) {
								that.operaterTypeDesc = "入库"
								extra_type = 2
							} else if (res.tapIndex == 2) {
								that.operaterTypeDesc = "采购"
								extra_type = 1
							} else {
								that.operaterTypeDesc = "销售退货"
								extra_type = 4
							}
						} else if (opeart_type == -1) {
							if (res.tapIndex == 0) {
								that.operaterTypeDesc = "全部"
								extra_type = ''
							}else if (res.tapIndex == 1) {
								that.operaterTypeDesc = "出库"
								extra_type = 2
							} else if (res.tapIndex == 2) {
								that.operaterTypeDesc = "销售"
								extra_type = 1
							} else {
								that.operaterTypeDesc = "采购退货"
								extra_type = 4
							}
						}
						that.get_list();
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			bindDateChange1(e) {
				that.data_change = true
				that.now_day = e.detail.value;
				that.option_now_day = e.detail.value;
			},

			bindDateChange2(e) {
				that.data_change = true
				that.end_day = e.detail.value;
				that.option_end_day = e.detail.value;
			},

			selectd(type) {
				if (type == 'one') {
					that.now_day = common.getDay(0, false)
					that.end_day = common.getDay(1, false)
				} else if (type == 'two') {
					that.now_day = common.getDay(-1, false)
					that.end_day = common.getDay(0, false)
				} else if (type == 'three') {
					that.now_day = common.getDay(-7, false)
					that.end_day = common.getDay(1, false)
				} else if (type == 'four') {
					that.now_day = common.getDay(-30, false)
					that.end_day = common.getDay(1, false)
				} else {
					that.now_day = ''
					that.end_day = ''
				}

				page_num = 1
				that.page_num = 1
				that.checked_option = type
				that.get_list()
			},

			shaixuan_click() {
				that.showOptions = true;
			},

			//modal重置的确认点击
			option_reset() {
				uni.removeStorageSync("charge");
				uni.removeStorageSync("warehouse");
				that.stock = '';
				that.goodsName = "";
				that.staff = "";
				that.data_change = false;
				that.is_checked = false;
				that.showOptions = false;
				that.get_list()
			},

			//modal筛选的确认点击
			option_confrim() {
				that.is_checked = true;
				that.showOptions = false;
				that.get_list()
			},

			//分页点击
			change_page(e) {
				page_num = e.current
				that.get_list();
			},

			//得到列表
			get_list() {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", uid);
				query.equalTo("type", '==', opeart_type);
				if (extra_type) {
					query.equalTo("extra_type", "==", extra_type);
				}
				if (uni.getStorageSync("charge")) query.equalTo("opreater", '==', that.staff.userId.objectId);
				query.equalTo("goodsName", "==", {
					"$regex": "" + that.goodsName + ".*"
				});
				if (that.stock) query.equalTo("stockIds", "==", {
					"$regex": "" + that.stock.objectId + ".*"
				});
				if (that.checked_option != 'all') {
					query.equalTo("createdAt", ">=", that.now_day + ' 00:00:00');
					query.equalTo("createdAt", "<=", that.end_day + ' 00:00:00');
				} else {
					if (that.is_checked == true && that.data_change == true) {
						query.equalTo("createdAt", ">=", that.option_now_day + ' 00:00:00');
						query.equalTo("createdAt", "<=", that.option_end_day + ' 00:00:00');
					}
				}

				query.limit(page_size);
				query.skip(page_size * (page_num - 1));
				query.include("opreater", "stock");
				query.order("-createdAt");
				query.find().then(res => {
					//console.log(res)
					this.list = res;
					wx.hideLoading()
				});
			},

			//点击得到详情
			get_detail: function(item) {
				if (item.extra_type == 5) {
					wx.navigateTo({
						url: 'productDet/productDet?id=' + item.objectId,
					})
				} else if (item.extra_type == 4) { //退货详情
					uni.navigateTo({
						url: 'returnDetail/returnDetail?id=' + item.objectId,
					})
				} else {
					if (item.recordType == "new") {
						wx.navigateTo({
							url: 'SellDetail/SellDetail?id=' + item.objectId,
						})
					} else {
						wx.navigateTo({
							url: 'detail/detail?id=' + item.objectId,
						})
					}

				}

			},
		}
	}
</script>

<style>
	.page {
		overflow: hidden;
		height: calc(100vh - 234rpx);
		font-size: 28rpx;
		color: #3D3D3D;
		background: #fafafa;
	}

	.status_noconfrim {
		border: 1prx solid#f30 !important;
		color: #f30 !important;
	}

	.item {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 20rpx;
		border-bottom: .5rpx solid#ddd;
	}

	.icon-order {
		font-size: 44rpx;
		color: #426ab3;
	}

	.list-item {
		height: 100%;
		overflow: scroll;
	}

	.select_time {
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		color: #999;
		padding: 0 30rpx;
	}

	.item_beizhu {
		max-width: calc(100% - 120rpx);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.order_get {
		padding: 0rpx 30rpx;
		color: #2ca879;
		border: .5rpx solid#2ca879;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 8rpx;
	}

	.order_out {
		padding: 0px 15px;
		color: #f30;
		border: 1px solid#f30;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}

	.order_counting {
		padding: 0px 15px;
		color: #000;
		border: 1px solid#000;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}

	.order_returning {
		padding: 0px 15px;
		color: #b3b242;
		border: 1px solid#b3b242;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}
</style>
