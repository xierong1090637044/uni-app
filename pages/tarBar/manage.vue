<template>
	<!--操作列表-->
	<scroll-view scroll-y="true" style="height:100vh;">
		<view style="background: #FFFFFF;padding:20rpx;">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存管理模块</view>
			<view class='o_list'>
				<navigator v-for="(value,index) in now_optionsLists" :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem" style="background: #426ab3;">
						<fa-icon :type="value.icon" size="20" color="#fff" style="line-height: 80rpx;"></fa-icon>
					</view>
					<span class='o_text'>{{value.name}}</span>
					<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
				</navigator>
			</view>
		</view>
		
		<view style="background: #FFFFFF;padding:20rpx;margin: 30rpx 0;" v-if="financeModule.length > 0">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">财务模块</view>
			<view class='o_list'>
				<navigator v-for="(value,index) in financeModule" :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem" style="background: #2ca879;">
						<fa-icon :type="value.icon" size="20" color="#fff" style="line-height: 80rpx;"></fa-icon>
					</view>
					<span class='o_text'>{{value.name}}</span>
				</navigator>
				
			</view>
		</view>

		<view style="background: #FFFFFF;padding:20rpx;margin-top: 30rpx;">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">记录模块</view>
			<view class='o_list'>
				<navigator v-for="(value,index) in second_optionsLists" :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem" style="background: #a8522c;">
						<fa-icon :type="value.icon" size="20" color="#fff" style="line-height: 80rpx;"></fa-icon>
					</view>
					<span class='o_text'>{{value.name}}</span>
					<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
				</navigator>
			</view>
		</view>
		
		
		<view style="background: #FFFFFF;padding:20rpx;margin: 30rpx 0;" v-if="analysisModule.length > 0">
			<view style="font-size: 30rpx;color: #333;font-weight: bold;">分析模块</view>
			<view class='o_list'>
				<navigator v-for="(value,index) in analysisModule" :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem" style="background: #2ca0a8;">
						<fa-icon :type="value.icon" size="20" color="#fff" style="line-height: 80rpx;"></fa-icon>
					</view>
					<span class='o_text'>{{value.name}}</span>
				</navigator>
			</view>
		</view>
		
		
	</scroll-view>

</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import staffs from '@/utils/staffs.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"

	let that;
	let secOptionsLists = [{
			name: '入库记录',
			notice: '入库、采购、销售退货',
			icon: 'file-o',
			url: '/pages/report/EnteringHistory/EnteringHistory?type=1',
		},
		{
			name: '出库记录',
			notice: '出库、销售、采购退货',
			icon: 'file-o',
			url: '/pages/report/EnteringHistory/EnteringHistory?type=-1',
		},
		{
			name: '调拨记录',
			notice: '调拨记录',
			icon: 'file-o',
			url: '/pages/report/EnteringHistory/EnteringHistory?type=-2',
		},
		{
			name: '盘点记录',
			notice: '盘点记录',
			icon: 'file-o',
			url: '/pages/report/EnteringHistory/EnteringHistory?type=3',
		}
	];
	
	let optionsLists = [{
			name: '产品管理',
			notice: '查看,添加,编辑',
			icon: 'envelope-open-o',
			url: '/pages/manage/goods/goods',
		},
		{
			name: '员工管理',
			notice: '多人管理',
			icon: 'user',
			url: '/pages/manage/staff/staff',
		},
		{
			name: '店仓管理',
			notice: '先完善好店仓',
			icon: 'home',
			url: '/pages/manage/warehouse/warehouse',
		},
		{
			name: '门店管理',
			notice: '门店相关',
			icon: 'shopping-cart',
			url: '/pages/manage/shops/shops',
		},
		{
			name: '客户管理',
			notice: '客户,供应商相关',
			icon: 'address-card',
			url: '/pages/manage/custom/custom',
		},
		{
			name: '产品类别管理',
			notice: '产品类别相关',
			icon: 'list',
			url: '/pages/manage/category/category',
		},
	];
	
	let analysisLists= [{
			name: '畅销产品',
			icon: 'gg',
			url: '/pages/analysis/goodSell/goodSell',
		},{
			name: '预警产品',
			icon: 'exclamation-circle',
			url: '/pages/report/warningGoods/warningGoods',
		},{
			name: '客户销售',
			icon: 'id-card-o',
			url: '/pages/analysis/customSell/customSell',
		},
		{
			name: '供货商采购',
			icon: 'address-book',
			url: '/pages/analysis/producerSell/producerSell',
		},{
			name: '类别汇总',
			icon: 'list',
			url: '/pages/analysis/classAll/classAll',
		},{
			name: '单品统计',
			icon: 'quora',
			url: '/pages/manage/productCount/productCount',
		},{
			name: '销售业绩',
			icon: 'area-chart',
			url: '/pages/report/staffChart/staffChart',
		},{
			name: '经营状况',
			icon: 'recycle',
			url: '/pages/report/operational_status/operational_status',
		},
		{
			name: '报表',
			icon: 'pie-chart',
			url: '/pages/report/chart/chart',
		}
	];
	
	let financeLists= [{
			name: '应收款',
			icon: 'clock-o',
			url: '/pages/finance/customIn/customIn',
		},{
			name: '应付款',
			icon: 'calendar ',
			url: '/pages/finance/producerOut/producerOut',
		},{
			name: '记收入',
			icon: 'money ',
			url: '/pages/finance/InRecord/InRecord?type=record',
		},{
			name: '记支出',
			icon: 'hand-spock-o ',
			url: '/pages/finance/outRecord/outRecord?type=record',
		},{
			name: '我的账户',
			icon: 'gg',
			url: '/pages/finance/account/account',
		},{
			name: '收入类别',
			icon: 'list',
			url: '/pages/finance/inClass/inClass',
		},{
			name: '支出类别',
			icon: 'outdent',
			url: '/pages/finance/outClass/outClass',
		},{
			name: '流水记录',
			icon: 'repeat',
			url: '/pages/finance/history/history',
		},
	];
	
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				identity:uni.getStorageSync("identity"),
				setting: uni.getStorageSync("setting"),
				now_optionsLists: [],
				second_optionsLists: [],
				analysisModule:[],
				financeModule:[]
			}
		},
		onLoad() {
			that = this;
		},
		onShow() {
			that.setting = uni.getStorageSync("setting")
			uni.getStorage({
				key: 'identity',
				success: function(res) {
					if (res.data == "2") {
						let rights;
						let recordRights;
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
								rights = res.rights.current || [];
								recordRights = res.rights.recodecurrent || [];
								
								if(res.rights.analysisCurrent && res.rights.analysisCurrent.indexOf("0") !=-1){
									that.analysisModule = analysisLists
								}
								
								if(res.rights.moneyCurrent &&res.rights.moneyCurrent.indexOf("0") !=-1){
									that.financeModule = financeLists
								}
								
							} else {
								rights = uni.getStorageSync("user").rights.current ||  [];
								recordRights = uni.getStorageSync("user").rights.recodecurrent || [];
								
								if(res.rights.analysisCurrent &&uni.getStorageSync("user").rights.analysisCurrent.indexOf("0") !=-1){
									that.analysisModule = analysisLists
								}
								
								if(res.rights.moneyCurrent &&uni.getStorageSync("user").rights.moneyCurrent.indexOf("0") !=-1){
									that.financeModule = financeLists
								}
							}
							let manage_rights = []
							let record_rights = []
							for (let item of rights) {
								if(optionsLists[item]){
									manage_rights.push(optionsLists[item])
								}
							}
							for (let item of recordRights) {
								if(secOptionsLists[item]){
									record_rights.push(secOptionsLists[item])
								}
							}
							that.now_optionsLists = manage_rights
							that.second_optionsLists = record_rights
							uni.setStorageSync("user", now_staff)
						});
					} else if (res.data == "1") {
						that.now_optionsLists = optionsLists;
						that.second_optionsLists = secOptionsLists
						that.analysisModule = analysisLists
						that.financeModule = financeLists
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
		padding: 30rpx 0 0;
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
	
	.fa-icon{
		line-height: 80rpx !important;
	}
</style>
