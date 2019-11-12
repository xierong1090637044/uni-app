<template>	
	<view>
		<view style="background: #FFFFFF;padding: 30rpx 20rpx 0;">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存管理记录</view>
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
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">物料管理记录</view>
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
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import staffs from "@/utils/staffs.js"
	
	let that;
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				now_optionsLists:[],
				product_optionsLists: [{
					name: '物料采购',
					icon: 'file-o',
					url: '/pages/report/matterRecord/matterRecord?type=4',
					color: "#704fbb"
				},{
					name: '物料生产单',
					icon: 'tasks',
					url: '/pages/report/EnteringHistory/EnteringHistory?type=5',
					color: "#bba14f"
				}],
				optionsLists: [{
						name: '入库或采购记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=1',
						color: "#2ca879"
					},
					{
						name: '出库或销售记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-1',
						color: "#f30"
					},
					{
						name: '调拨记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-2',
						color: "#4e72b8"
					},
					{
						name: '客户退货记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=2',
						color: "#b3b242"
					},
					{
						name: '盘点记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=3',
						color: "#b3424a"
					},
					{
						name: '经营状况',
						icon: 'recycle',
						url: '/pages/report/operational_status/operational_status',
						color: "#426ab3"
					},
					{
						name: '报表',
						icon: 'pie-chart',
						url: '/pages/report/chart/chart',
						color: "#0c95bc"
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
					if(res.data == "2"){
						let rights;
						staffs.get_satffAuth().then(res=>{
							console.log(res)
							let now_staff = uni.getStorageSync("user")
							if(res.masterId.is_vip){
								now_staff.is_vip = true
								now_staff.vip_time = now_staff.masterId.vip_time
							}else{
								now_staff.is_vip = false
								now_staff.vip_time = 0
							}
							
							if(res){
								rights= res.rights.recodecurrent;
							}else{
								rights = uni.getStorageSync("user").rights.recodecurrent;
							}
							let manage_rights=[]
							for(let item in rights){
								manage_rights.push(that.optionsLists[item])
							}
							that.now_optionsLists = manage_rights
							uni.setStorageSync("user",now_staff)
						});
					}else if(res.data == "1"){
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
