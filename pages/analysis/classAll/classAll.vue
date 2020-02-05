<template>
	<view class='page'>
		<loading v-if="loading"></loading>

		<view v-else class="content">
			<view class="left_content">
				<view style="height: 100vh;overflow: scroll;">
					<view v-for="(item,index) in frist_class" :key="index" :class="selected_id===item.objectId?'selectd_item':''"
					 class="class_item" @click="get_second_category(item.objectId,index)">
						<view class="class_texxt_view" style="font-weight: bold;">{{item.class_text}}</view>
						<view>
							<view>总库存：{{item.reserve}}</view>
							<view>总成本：{{item.allCostPrice}}</view>
						</view>
					</view>
				</view>

			</view>
			<view class="right_content">
				<view style="height: 100vh;overflow: scroll;">
					<view v-for="(item,index) in second_class" :key="index" class="class_item" style="color: #333333;">
						<view class="class_texxt_view">{{item.class_text}}</view>
						<view>
							<view>总库存：{{item.reserve}}</view>
							<view>总成本：{{item.allCostPrice}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	let that;
	let user;
	let uid;
	let fristClass;
	export default {
		components: {
			loading,
			faIcon,
			uniPopup
		},
		data() {
			return {
				is_choose: false,
				loading: true,
				frist_class: null, //一级分类
				second_class: null, //二级分类
				selected_id: null, //选择的id
			}
		},
		onLoad(options) {
			that = this;
			user = uni.getStorageSync("user");
			uid = uni.getStorageSync("uid");
		},
		onShow() {
			that.get_category();
		},
		methods: {

			//得到一级分类
			get_category() {

				const query = Bmob.Query("class_user");
				query.equalTo("parent", "==", uid);
				query.find().then(res => {
					//console.log(res)
					let fristClass = res
					let count = 0
					for (let item of fristClass) {
						let fristReserve = 0;
						let fristCostprice = 0;
						let countLength = 0;

						const query = Bmob.Query("Goods");
						query.equalTo("userId", "==", uid);
						query.equalTo("status", "!=", -1);
						query.equalTo("order", "!=", 1);
						query.equalTo("goodsClass", "==", item.objectId);
						query.count().then(res => {
							let allLength = res;

							for (let i = 0; i < Math.ceil(allLength / 500); i++) {
								query.limit(500);
								query.skip(500 * i);
								query.find().then(res => {
									//console.log(i)
									for (let good of res) {
										fristReserve += good.reserve
										fristCostprice += good.reserve * Number(good.costPrice)
										countLength += 1
									}

									if (countLength == allLength) {
										item.reserve = fristReserve
										item.allCostPrice = fristCostprice

										if (count == fristClass.length - 1) {
											that.frist_class = fristClass
										}
										count += 1
									}
								})
							}
						})
					}
					if (res.length == 0) {
						that.loading = false;
					} else {
						that.get_second_category(res[0].objectId, 0)
					}
				});
			},

			//得到二级分类
			get_second_category(id, index) {
				let fristReserve = 0;
				let fristCostprice = 0;

				that.selected_id = id;
				const query = Bmob.Query('class_user')
				query.field('second', id)
				query.relation('second_class').then(res => {
					console.log(res);
					let secondClass = res.results;
					let count = 0
					that.loading = false;

					for (let item of secondClass) {
						const query = Bmob.Query("Goods");
						query.equalTo("userId", "==", uid);
						query.equalTo("status", "!=", -1);
						query.equalTo("order", "!=", 1);
						query.equalTo("second_class", "==", item.objectId);
						query.limit(200);
						query.find().then(res => {
							//console.log(res)
							let fristReserve = 0;
							let fristCostprice = 0;
							for (let good of res) {
								fristReserve += good.reserve
								fristCostprice += good.reserve * Number(good.costPrice)
							}
							item.reserve = fristReserve
							item.allCostPrice = fristCostprice

							if (count == secondClass.length - 1) {
								//console.log("sssssssss",secondClass)
								that.second_class = secondClass
							}

							count += 1
						});
					}

				})
			},

		}
	}
</script>

<style>
	.page {
		background: #fff;
	}

	.content {
		display: flex;
	}

	.left_content {
		width: 50%;
		border-right: 1rpx solid#ddd;
		height: 100vh;
	}

	.right_content {
		width: 50%;
	}

	.class_item {
		padding-left: 10rpx;
		padding-right: 10rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid#ddd;
		font-size: 26rpx;
		color: #3D3D3D;
	}

	.selectd_item {
		background: #df9464 !important;
		color: #fff !important;
	}

	.class_item_bottom {
		padding-left: 10rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid#ddd;
		font-size: 26rpx;
		color: #3D3D3D;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.class_texxt_view {
		padding: 10rpx 0;
		width: calc(100% - 30rpx);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.popup {
		text-align: center;
		color: #3D3D3D;
	}

	.popup_content {
		width: 500rpx;
	}

	.popup_title {
		margin-bottom: 40rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.popup_input {
		border: 1rpx solid#ddd;
		margin-bottom: 40rpx;
		line-height: 90rpx;
		height: 90rpx;
		border-radius: 8rpx;
		font-size: 26rpx;
	}

	.popup_button {
		background: #426ab3;
		color: #fff;
	}
</style>
