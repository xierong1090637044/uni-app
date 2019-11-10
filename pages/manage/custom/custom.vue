<template>
	<view>
		<loading v-if="loading"></loading>
		
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加"  @click-right="goto_add" >
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666" />
				<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="input_confirm" />
			</view>
		</uni-nav-bar>
		
		<view class="uni-common-mt">
			<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
		</view>
		
		<scroll-view class="content" scroll-y="true"  v-if="people && people.length > 0">
			<view v-show="current === 0" class="info_item">
				<view v-for="(item,index) in people" :key="index" class="item">
					<navigator class="display_flex_bet" hover-class="none" :url="'custom_detail/custom_detail?id='+item.objectId">
						<view>
							<view style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">{{item.custom_name}}</view>
							<view v-if="item.beizhu">备注：{{item.beizhu}}</view>
							<view style="color: #999;">创建时间：{{item.createdAt}}</view>
						</view>
						<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
					</navigator>
					
					<view class="display_flex" style="justify-content: flex-end;">
						<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_custom" @click="select_this('custom',item)">
							<text style="color: #d93a49;">选择</text>
						</view>
						<!--<view class="display_flex" style="justify-content: flex-end;align-items: center;" v-else>
							<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(item.objectId)"></fa-icon>
							<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;padding-top: 6rpx;" @click="edit(item)"></fa-icon>
						</view>-->
						
					</view>

				</view>
			</view>

			<view v-show="current === 1" class="info_item">
				<view v-for="(item,index) in people" :key="index" class="item">
					<navigator class="display_flex_bet" hover-class="none" :url="'producer_detail/producer_detail?id='+item.objectId">
						<view>
							<view style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">{{item.producer_name}}</view>
							<view v-if="item.beizhu">备注：{{item.beizhu}}</view>
							<view style="color: #999;">创建时间：{{item.createdAt}}</view>
						</view>
						<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
					</navigator>
					<view class="display_flex" style="justify-content: flex-end;">
						
						<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_producer" @click="select_this('producer',item)">
							<text style="color: #d93a49;">选择</text>
						</view>
						<!--<view class="display_flex" style="justify-content: flex-end;align-items: center;" v-else>
							<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(item.objectId)"></fa-icon>
							<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;padding-top: 6rpx;" @click="edit(item)"></fa-icon>
						</view>-->
						
					</view>

				</view>
			</view>

		</scroll-view>
		<nocontent v-else :type="1"></nocontent>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			loading,
			faIcon,
			uniSegmentedControl,
			uniNavBar,
			uniIcon
		},
		data() {
			return {
				loading: true,
				items: [
					'销售客户',
					'供货商',
				],
				current: 0,
				people: null, //获得人员数组
				is_producer: false,
				is_custom:false
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			
			if (options.type == "producer") {
				that.is_producer = true,
				that.current = 1,
				that.load_data("producers")
			}else if(options.type == "custom"){
				that.is_custom = true,
				that.current = 0,
				that.load_data("customs")
			}
		},

		onShow() {
			uni.removeStorageSync("customs")
			uni.removeStorageSync("custom_type")
			if (that.current == 0) {
				that.load_data("customs")
			} else {
				that.load_data("producers")
			}

		},
		onUnload() {
			search_text =""
		},
		methods: {
			
			//选择此供货商
			select_this(type,producer) {
				uni.setStorageSync(type, producer)
				uni.navigateBack({
					delta: 1
				})
			},
			
			//前去添加员工
			goto_add(){
				uni.showActionSheet({
					itemList: ['新增客户', '新增供货商'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex == 0) {
							uni.navigateTo({
								url: "add/add?type=customs"
							})
						} else {
							uni.navigateTo({
								url: "add/add?type=producers"
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			
			//输入内容筛选
			input_confirm(e){
				search_text = e.detail.value
				if (this.current == 0) {
					that.load_data("customs")
				} else {
					that.load_data("producers")
				}
			},

			//tab点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index

					if (this.current == 0) {
						that.load_data("customs")
					} else {
						that.load_data("producers")
					}
				}
			},

			//加载数据
			load_data(type) {
				const query = Bmob.Query(type);
				query.equalTo("parent", "==", uid);
				query.limit(500);
				if (search_text) {
					if (type == "customs") {
						query.equalTo("custom_name", "==", {
							"$regex": "" + search_text + ".*"
						});
					} else {
						query.equalTo("producer_name", "==", {
							"$regex": "" + search_text + ".*"
						});
					}

				}
				query.find().then(res => {
					console.log(res)
					that.loading = false;
					that.people = res;
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
		background: #fff;
	}

	.info_item {
		padding: 20rpx 30rpx;
		background: #fff;
		;
	}

	.item {
		border-bottom: 1rpx solid#ccc;
		padding-bottom: 10rpx;
		margin-bottom: 10rpx;
	}
</style>
