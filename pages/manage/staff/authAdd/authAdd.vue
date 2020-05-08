<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim"></uni-nav-bar>
		
		<scroll-view style="height: calc(100vh - 80rpx);" scroll-y="true">
			<uni-collapse style="margin-top: 0rpx;">
				<uni-collapse-item :show-animation="true" title="库存管理模块权限(修改完请退出员工账号,重新登陆)" :open="true">
					<view style="padding: 30rpx;">
						<checkbox-group @change="checkboxChange">
							<view class="rights_item" v-for="(item,index) in manage" :key="''+index">
								<view style="display: flex;">
									<checkbox :value="''+item.id" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;">{{item.name}}</text>
								</view>
			
								<view v-if="item.id == 2" style="padding-left: 80rpx;">
									<view v-if="item.notice" style="font-size: 20rpx;color: #999;"><text style="color: #f30;">注意：</text>{{item.notice}}</view>
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
									<checkbox :value="''+item.id" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
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
									<checkbox :value="''+item.id" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;font-size: 28rpx;color: #333;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="报表和分析模块权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChangeAnalysis">
								<view class="display_flex rights_item" v-for="(item,index) in analysisAuth" :key="''+index">
									<checkbox :value="''+item.id" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
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
									<checkbox :value="''+item.id" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
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
	let staff;
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},

		data() {
			return {
				manage: [{
						id: 0,
						name: '产品管理'
					},
					{
						id: 1,
						name: '员工管理'
					},
					{
						id: 2,
						name: '店仓管理',
						notice:'勾选了下面的仓库，子账户将会自动加载勾选仓库里的产品，如不勾选，则列表为空',
					},
					{
						id: 3,
						name: '客户管理'
					},
					{
						id: 4,
						name: '供货商管理'
					},
					{
						id: 5,
						name: '产品类别管理'
					},
					{
						id: 6,
						name: '库存管理（出库、入库、调拨、盘点操作）'
					},
					{
						id: 7,
						name: '采购（采购，采购退货操作）'
					},
					{
						id: 8,
						name: '销售（销售，销售退货操作）'
					},
				],
				
				//财务权限模块
				moneyAuth:[{
						id: 0,
						name: '财务管理模块查看'
					}
				],
				
				//分析模块权限
				analysisAuth:[{
						id: 0,
						name: '报表和分析模块查看'
					}
				],
				
				//记录模块权限
				recode: [{
						id: 0,
						name: '入库记录'
					},
					{
						id: 1,
						name: '出库记录'
					},
					{
						id: 2,
						name: '调拨记录'
					},
					{
						id: 3,
						name: '盘点记录'
					},{
						id: 4,
						name: '销售订单'
					},{
						id: 5,
						name: '销售单'
					},{
						id: 6,
						name: '销售退货单'
					},{
						id: 7,
						name: '采购订单'
					},{
						id: 8,
						name: '采购单'
					},{
						id: 9,
						name: '采购退货单'
					},{
						id: 10,
						name: '销售明细'
					},{
						id: 11,
						name: '采购明细'
					},{
						id: 12,
						name: '出入库明细'
					},
				],
				others: [{
					id: 0,
					name: '进价隐藏'
				},{
					id: 1,
					name: '审核'
				},{
					id: 2,
					name: '看板查看'
				}],
				stocks:[],
				current: [],//库存管理模块选中的权限
				analysisCurrent:[],//分析模块选中的权限
				moneyCurrent:[],//财务模块选中的权限
				recodecurrent: [],//记录模块选中的权限
				othercurrent: [],//其他选中的权限
				select_stocks: [], //选中的店仓
			}
		},
		
		onLoad() {
			that = this;
			staff = uni.getStorageSync("staff");
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
					for (let id of rights.current) {
						for(let item of that.manage){
							if(id == item.id){
								item.checked = true;
								that.current.push(id)
							}
						}
					}
				}
				
				if (rights.recodecurrent) {
					for (let id of rights.recodecurrent) {
						for(let item of that.recode){
							if(id == item.id){
								item.checked = true;
								that.recodecurrent.push(id)
							}
						}
					}
				}
				
				if (rights.othercurrent) {
					for (let id of rights.othercurrent) {
						for(let item of that.others){
							if(id == item.id){
								item.checked = true;
								that.othercurrent.push(id)
							}
						}
					}
				}
				
				if (rights.analysisCurrent) {
					for (let id of rights.analysisCurrent) {
						for(let item of that.analysisAuth){
							if(id == item.id){
								item.checked = true;
								that.analysisCurrent.push(id)
							}
						}
					}
				}
				
				if (rights.moneyCurrent) {
					for (let id of rights.moneyCurrent) {
						for(let item of that.moneyAuth){
							if(id == item.id){
								item.checked = true;
								that.moneyCurrent.push(id)
							}
						}
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
			query.limit(500);
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
				if(staff){
					const query = Bmob.Query("_User");
					query.set("rights", rights);
					query.set("stocks", rights.select_stocks || []);
					query.set("id", staff.objectId);
					query.save().then(res => {
						setTimeout(function(){
							uni.showToast({
								title: "修改成功"
							})
						},1000)
						uni.navigateBack({
							delta:3
						})
					}).catch(err => {
						console.log(err)
					
					})
				}else{
					uni.navigateBack({
						delta:1
					})
				}
				
			},
			
			//店仓多选器
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
