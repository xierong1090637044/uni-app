<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="start_add">
			<view></view>
		
		</uni-nav-bar>
		<view>
			<view class="display_flex item">
				<text style="margin-right: 6rpx;">名称</text><text style="color: #d93a49;margin-right: 20rpx;">*</text>
				<input placeholder="请输入名称" v-model="warehouse_name" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 6rpx;">排序</text><text style="color: #d93a49;margin-right: 20rpx;">*</text>
				<input placeholder="请输入排序(数值越小,排列越靠前)" v-model="warehouse_num" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>

			<navigator class="display_flex_bet item" hover-class="none" url="../../shops/shops?type=choose">
				<view class="display_flex">
					<text style="margin-right: 20rpx;">门店</text>
					<input placeholder="请选择门店" v-model="warehouse_shop" style="width: calc(100% - 200rpx)" />
				</view>

				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>
			<navigator class="display_flex_bet item" style="margin-bottom:60rpx"  hover-class="none" url="../../staff/staff?type=choose">
				<view class="display_flex" >
					<text style="margin-right: 6rpx;">负责人</text><text style="color: #d93a49;margin-right: 20rpx;">*</text>
					<input placeholder="请选择负责人" v-model="warehouse_charge" style="width: calc(100% - 200rpx)" disabled="true"/>
				</view>

				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>

			<view class="display_flex item">
				<text style="margin-right: 20rpx;">备注</text>
				<input placeholder="请输入备注" v-model="warehouse_beizhu" style="width: calc(100% - 200rpx)" />
			</view>

			<view class="display_flex_bet item" style="margin-bottom:60rpx">
				<text style="margin-right: 20rpx;">启用</text>
				<switch :checked="disabled" @change="switchChange" />
			</view>

		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let warehouse;//仓库
	let charge;//负责人
	let shop;//门店
	let shopId;
	let uid;
	export default {
		components: {
			faIcon,
			uniNavBar
		},
		data() {
			return {
				warehouse_name: '', //名称
				warehouse_shop: '', //门店
				warehouse_num: 0, //排序
				warehouse_charge: '', //负责人
				warehouse_beizhu: '', //备注
				disabled: true, //是否启用
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			warehouse = uni.getStorageSync("warehouse");
			charge = uni.getStorageSync("charge");
			shop = uni.getStorageSync("shop");
			

			if (warehouse) {
				that.warehouse_name = warehouse.stock_name
				that.warehouse_shop = warehouse.shop
				that.warehouse_num = warehouse.num
				that.warehouse_charge = warehouse.charge
				that.warehouse_beizhu = warehouse.beizhu
				that.disabled = !warehouse.disabled;
				uni.setNavigationBarTitle({
					title: '修改仓库信息'
				});
			}else{
				uni.setNavigationBarTitle({
					title: '新增仓库'
				});
			}
			
			if(shop){
				that.warehouse_shop = shop.name
				
				const pointer = Bmob.Pointer('shops');
				shopId = pointer.set(shop.objectId);
			}
			
			that.warehouse_charge = charge.username

		},
		
		onUnload() {
			uni.removeStorageSync('warehouse')
			uni.removeStorageSync('shop')
			uni.removeStorageSync('charge')
		},

		methods: {
			
			//启用的switech
			switchChange(e){
				that.disabled = e.detail.value;
			},
			
			start_add(){
				if (this.warehouse_name == '') {
					uni.showToast({
						title: "请输入仓库名字",
						icon: "none"
					})
				} else if (this.warehouse_charge == ''||this.warehouse_charge == null) {
					uni.showToast({
						title: "请选择仓库负责人",
						icon: "none"
					})
				} else {
					that.add_data()
				}
			},

			//增加数据操作
			add_data() {
				uni.showLoading({
					title: '上传中...'
				})
				
				const pointer = Bmob.Pointer('_User');
				let poiID = pointer.set(uid);
				const pointer1 = Bmob.Pointer('staffs');
				let chargeId = pointer1.set(charge.objectId);
				
				if (warehouse) {//修改操作
					const query = Bmob.Query('stocks');
					query.set("stock_name", that.warehouse_name);
					query.set("num", Number(that.warehouse_num));
					if(shop) query.set("shop",shopId);
					//query.set("shop", that.warehouse_shop);
					query.set("charge", chargeId);
					query.set("beizhu", that.warehouse_beizhu);
					query.set("disabled", !that.disabled);
					query.set("parent", poiID);
					query.set("id", warehouse.objectId);
					query.save().then(res => {
						uni.hideLoading();
						console.log(res)
						uni.showToast({
							title: "修改成功"
						})
					}).catch(err => {
						console.log(err)

					})
				} else {

					const query = Bmob.Query("stocks");
					query.equalTo("parent", "==", uid);
					query.equalTo("stock_name", "==", that.warehouse_name);
					query.find().then(res => {
						console.log(res)
						if (res.length == 0) {
							
							//console.log(that.warehouse_name,that.warehouse_num,chargeId,that.warehouse_beizhu,that.disabled)
							
							const query = Bmob.Query('stocks');
							query.set("stock_name", that.warehouse_name);
							query.set("num", Number(that.warehouse_num));
							if(shop) query.set("shop",shopId);
							query.set("charge", chargeId);
							query.set("beizhu", that.warehouse_beizhu);
							query.set("disabled", !that.disabled);
							query.set("parent", poiID);
							query.save().then(res => {
								console.log(res)
								uni.hideLoading();
								uni.showToast({
									title: "添加成功"
								})
								
								that.warehouse_name = '' //名称
								that.warehouse_shop = '' //门店
								that.warehouse_num = 0 //排序
								that.warehouse_charge = '' //负责人
								that.warehouse_beizhu = '' //备注
								that.disabled = true //是否启用
							}).catch(err => {
								console.log(err)

							})
						} else {
							uni.showToast({
								title: "已存在此仓库",
								icon: "none"
							})
						}

					});

				}


			},
		}
	}
</script>

<style>
	page {
		background: #FAFAFA;
	}

	.item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
	}

	.rights_item {
		margin-bottom: 20rpx;
	}
</style>
