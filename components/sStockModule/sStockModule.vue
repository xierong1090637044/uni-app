<template>
	<view>
		<view class="modelItem">
			<view class="title">库存基础资料</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in nowFristEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
					</view>
					<view class='o_text'>{{value.name}}</view>
					<view style="font-size: 20rpx;color: #333;font-weight: 100;">{{value.notice}}</view>
				</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				fristEle: [{
						name: '产品管理',
						notice: '产品添加',
						icon: 'envelope-open-o',
						url: '/pages/manage/goods/goods',
						id: 0,
					},
					{
						name: '员工管理',
						notice: '多人协同',
						icon: 'user',
						url: '/pages/manage/staff/staff',
						id: 1
					},
					{
						name: '店仓管理',
						notice: '先完善好店仓',
						icon: 'home',
						url: '/pages/manage/warehouse/warehouse',
						id: 2
					},
					{
						name: '客户管理',
						notice: '客户资料',
						icon: 'address-card',
						url: '/pages/manage/custom/custom',
						id: 3
					},
					{
						name: '供应商管理',
						notice: '供应商资料',
						icon: 'address-book',
						url: '/pages/manage/producer/producer',
						id: 4
					},
					{
						name: '产品类别管理',
						notice: '产品类别编辑',
						icon: 'list',
						url: '/pages/manage/category/category',
						id: 5
					},
					{
						name: '客户类别管理',
						notice: '客户类别相关',
						icon: 'list',
						url: '/pages/manage/customClass/customClass',
						id: 6
					},
				],

				nowFristEle: [],
				user: uni.getStorageSync("user"),
				identity:uni.getStorageSync("identity"),
			};
		},

		mounted() {
			if (this.identity == 2) {
				for (let item of this.user.rights.current) {
					//console.log(item)
					if (this.fristEle[item]) {
						this.nowFristEle.push(this.fristEle[item])
					}
				}
			}else{
				this.nowFristEle = this.fristEle
			}
		},
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 28rpx;
	}

	.modelItem {
		padding: 20rpx 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 30rpx;
		border-radius: 40rpx;
		background: #F7F7F7;
	}

	.o_list {
		background: #F7F7F7;
	}

	.o_headerItem {
		background: #F7F7F7;
	}

	.o_item {
		width: 33.33%;
		font-weight: bold;
		margin-bottom: unset;
	}

	.o_text {
		margin-top: unset;
	}
</style>
