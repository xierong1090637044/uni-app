<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim"></uni-nav-bar>
		
		<scroll-view style="height: calc(100vh - 80rpx);" scroll-y="true">
			<uni-collapse style="margin-top: 0rpx;">
				<uni-collapse-item :show-animation="true" title="库存管理模块权限" :open="true">
					<view style="padding: 30rpx;">
						<checkbox-group @change="checkboxChange">
							<view class="rights_item" v-for="(item,index) in manage" :key="''+index">
								<view class="display_flex">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;">{{item.name}}</text>
								</view>
			
								<view v-if="item.id == 3" style="padding-left: 80rpx;">
									<checkbox-group @change="checkstockChange" v-if="current.indexOf('2') != -1">
										<view class="display_flex rights_item" v-for="(item,index) in stocks" :key="index">
											<checkbox :value="item.objectId" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
											<text style="margin-left: 20rpx;font-size: 28rpx;color: #333;">{{item.name}}</text>
										</view>
									</checkbox-group>
								</view>
							</view>
			
						</checkbox-group>
			
					</view>
				</uni-collapse-item>
			</uni-collapse>
			
			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="财务模块权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChangeMoney">
								<view class="display_flex rights_item" v-for="(item,index) in moneyAuth" :key="''+index">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;font-size: 28rpx;color: #333;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="记录模块权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChange_record">
								<view class="display_flex rights_item" v-for="(item,index) in recode" :key="''+index">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;font-size: 28rpx;color: #333;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="分析模块权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChangeAnalysis">
								<view class="display_flex rights_item" v-for="(item,index) in analysisAuth" :key="''+index">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;font-size: 28rpx;color: #333;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="其他权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChange_other">
								<view class="display_flex rights_item" v-for="(item,index) in others" :key="''+index">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	
	let that;
	let uid;
	let rights = {};
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},

		data() {
			return {
				manage: [{
						id: 1,
						name: '产品管理'
					},
					{
						id: 2,
						name: '员工管理'
					},
					{
						id: 3,
						name: '仓库管理'
					},
					{
						id: 4,
						name: '门店管理'
					},
					{
						id: 5,
						name: '客户管理'
					},
					{
						id: 6,
						name: '产品类别管理'
					},
				],
				
				//财务权限模块
				moneyAuth:[{
						id: 1,
						name: '财务管理模块查看'
					}
				],
				
				//分析模块权限
				analysisAuth:[{
						id: 1,
						name: '分析模块查看'
					}
				],
				
				//记录模块权限
				recode: [{
						id: 1,
						name: '入库记录'
					},
					{
						id: 2,
						name: '出库记录'
					},
					{
						id: 3,
						name: '调拨记录'
					},
					{
						id: 4,
						name: '盘点记录'
					},
				],
				others: [{
					id: 1,
					name: '进价隐藏'
				}, {
					id: 2,
					name: '销售'
				}, {
					id: 3,
					name: '采购'
				}, {
					id: 4,
					name: '审核'
				},{
					id: 5,
					name: '看板查看'
				}],
				stocks:[],
				current: [],//库存管理模块选中的权限
				analysisCurrent:[],//分析模块选中的权限
				moneyCurrent:[],//财务模块选中的权限
				recodecurrent: [],//记录模块选中的权限
				othercurrent: [],//其他选中的权限
				select_stocks: [], //选中的仓库
			}
		},
		
		onLoad() {
			that = this;
			uid = uni.getStorageSync('uid');
		},
		
		onShow() {
			that.current = []
			that.analysisCurrent = []
			that.moneyCurrent = []
			that.recodecurrent = []
			that.othercurrent = []
			that.select_stocks = []
			
			if(uni.getStorageSync("staffRights")){
				rights = uni.getStorageSync("staffRights")
				if (rights.current) {
					for (let i of rights.current) {
						//console.log(i)
						that.manage[i].checked = true;
						that.current.push(i)
					}
				}
				
				if (rights.recodecurrent) {
					for (let i of rights.recodecurrent) {
						that.recode[i].checked = true;
						that.recodecurrent.push(i)
					}
				}
				
				if (rights.othercurrent) {
					for (let i of rights.othercurrent) {
						that.others[i].checked = true;
						that.othercurrent.push(i)
					}
				}
				
				if (rights.analysisCurrent) {
					for (let i of rights.analysisCurrent) {
						that.analysisAuth[i].checked = true;
						that.analysisCurrent.push(i)
					}
				}
				
				if (rights.moneyCurrent) {
					for (let i of rights.moneyCurrent) {
						that.moneyAuth[i].checked = true;
						that.moneyCurrent.push(i)
					}
				}
				
				rights.current = that.current
				rights.recodecurrent = that.recodecurrent
				rights.othercurrent = that.othercurrent
				rights.analysisCurrent = that.analysisCurrent
				rights.moneyCurrent = that.moneyCurrent
			}
			
			const query = Bmob.Query("stocks");
			query.order("-num");
			query.include("charge", "shop", "Ncharge")
			query.equalTo("parent", "==", uid);
			query.equalTo("disabled", "!=", true);
			query.find().then(res => {
				let stocks = res;
				let _warehouse = []
				for (let item of stocks) {
					let warehouse = {}
					warehouse.name = item.stock_name
					warehouse.objectId = item.objectId
					if(rights.select_stocks){
						if(rights.select_stocks.indexOf(item.objectId) !=-1){
							warehouse.checked = true
						}
					}
					_warehouse.push(warehouse)
				}
				that.stocks = _warehouse
			})
		},
		
		methods: {
			
			confrim(){
				uni.setStorageSync("staffRights",rights)
				uni.navigateBack({
					delta:1
				})
			},
			
			//仓库多选器
			checkstockChange(e) {
				that.select_stocks = e.detail.value
				rights.select_stocks = e.detail.value;
			},
			
			//管理权限
			checkboxChange(e) {
				that.current = e.detail.value
				rights.current = e.detail.value;
			},
			
			//分析记录模块
			checkboxChangeAnalysis(e){
				that.analysisCurrent = e.detail.value
				rights.analysisCurrent = e.detail.value;
			},
			
			checkboxChangeMoney(e){
				that.moneyCurrent = e.detail.value
				rights.moneyCurrent = e.detail.value;
			},
			
			//记录权限
			checkboxChange_record(e) {
				that.recodecurrent = e.detail.value
				rights.recodecurrent = e.detail.value;
			},
			
			//其他权限
			checkboxChange_other(e) {
				that.othercurrent = e.detail.value
				rights.othercurrent = e.detail.value;
			},
			
		}
	}
</script>

<style>
.rights_item{
	padding: 6rpx 0;
}
</style>
