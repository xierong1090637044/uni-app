<template>
	<!--操作列表-->
	<view>
		<view style="background: #FFFFFF;padding: 30rpx 20rpx 0;">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存管理模块</view>
			<view class='o_list'>
				<navigator v-for="(value,index) in now_optionsLists" :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view>
						<fa-icon :type="value.icon" size="20" :color="value.color"></fa-icon>
					</view>
					<span class='o_text'>{{value.name}}</span>
				</navigator>
			</view>
		</view>

		<view style="background: #FFFFFF;padding: 30rpx 20rpx 0;margin-top: 30rpx;">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">物料管理模块</view>
			<view class='o_list'>
				<navigator v-for="(value,index) in product_optionsLists" :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view>
						<fa-icon :type="value.icon" size="20" :color="value.color"></fa-icon>
					</view>
					<span class='o_text'>{{value.name}}</span>
				</navigator>
			</view>
		</view>

	</view>



</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import staffs from '@/utils/staffs.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"

	let that;
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				now_optionsLists: [],
				product_optionsLists: [{
					name: '物料管理',
					icon: 'cubes',
					url: '/pages/production/matterList/matterList',
					color: "#704fbb"
				},{
					name: '物料类别管理',
					icon: 'database',
					url: '/pages/production/matterCategroy/matterCategroy',
					color: "#bba14f"
				},{
					name: '物料采购',
					icon: 'money',
					url: '/pages/production/matterSelect/matterSelect?type=entering',
					color: "#4fbbab"
				}],
				optionsLists: [{
						name: '产品管理',
						icon: 'envelope-open-o',
						url: '/pages/manage/goods/goods',
						color: "#af42b3"
					},
					{
						name: '员工管理',
						icon: 'user',
						url: '/pages/manage/staff/staff',
						color: "#b38c42"
					},
					{
						name: '仓库管理',
						icon: 'home',
						url: '/pages/manage/warehouse/warehouse',
						color: "#b34742",
					},
					{
						name: '门店管理',
						icon: 'shopping-cart',
						url: '/pages/manage/shops/shops',
						color: "#6f60aa",
					},
					{
						name: '客户管理',
						icon: 'address-card',
						url: '/pages/manage/custom/custom',
						color: "#82b342"
					},
					{
						name: '产品类别管理',
						icon: 'list',
						url: '/pages/manage/category/category',
						color: "#426ab3"
					},
					{
						name: '单品统计',
						icon: 'quora',
						url: '/pages/manage/productCount/productCount',
						color: "#65c294"
					},
				]
			}
		},
		onLoad() {
			that = this;
		},
		onShow() {
			uni.getStorage({
				key: 'identity',
				success: function(res) {
					if (res.data == "2") {
						let rights;
						staffs.get_satffAuth().then(res => {
							console.log(res)
							let now_staff = uni.getStorageSync("user")
							if (res.masterId.is_vip) {
								now_staff.is_vip = true
								now_staff.vip_time = now_staff.masterId.vip_time
							} else {
								now_staff.is_vip = false
								now_staff.vip_time = 0
							}

							if (res) {
								rights = res.rights.current;
							} else {
								rights = uni.getStorageSync("user").rights.current;
							}
							let manage_rights = []
							for (let item in rights) {
								manage_rights.push(that.optionsLists[item])
							}
							that.now_optionsLists = manage_rights
							uni.setStorageSync("user", now_staff)
						});
					} else if (res.data == "1") {
						that.now_optionsLists = that.optionsLists;
					}
				},
			})
		},
		methods: {

		}
	}
</script>

<style>
	/* pages/home/index/index.wxss */
	.manage_icon {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.every_item {
		width: 50%;
		text-align: center;
		line-height: 30rpx;
		font-size: 14rpx;
	}

	.s_num {
		font-size: 16rpx;
		font-weight: bold;
	}

	.o_list {
		background: #fff;
		display: flex;
		flex-wrap: wrap;
	}

	.o_item {
		width: 25%;
		text-align: center;
		padding: 30rpx 0;
	}

	.o_left_item {
		display: flex;
		align-items: center;
	}

	.o_text {
		color: #000;
		font-weight: bold;
		font-size: 24rpx;
	}
</style>
