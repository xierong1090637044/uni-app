<template>
	<view class="container">
		<view class="content">
			<view class="version">
				<view class="version-title">
					<text class="title-name">库存表</text>
					<text class="version-text">{{version}}</text>
					<text class="version-text">公测版</text>
				</view>
				<view>
					<text class="version-log-link">升级日志</text>
				</view>
			</view>
			<view class="log-list">
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.1 公测版</text>
						<text class="desc-time">2019.08.30</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>产品出库、入库、盘点、退货操作优化</text>
						<text>产品选择操作优化</text>
						<text>操作记录新增时间筛选</text>
						<text>首页新增天气，通知跳转</text>
						<text>与扫码中心对接，支持扫码添加商品</text>
						<text>输入自己商品的条形码信息时，不再有后缀</text>
						<text>出入库关联仓库，仓库新增仓库操作记录</text>
					</view>
				</view>
				
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.0 公测版</text>
						<text class="desc-time">2019.08.21</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>员工管理时，操作记录显示bug修复</text>
						<text>电脑端仓库管理修改bug修复</text>
						<text>增加产品修改信息功能</text>
						<text>增加客户明细，收款明细</text>
						<text>增加供货商明细，还款明细</text>
						<text>产品详情，新增客户统计</text>
						<text>首页统计实时更新</text>
						<text>客户管理的交易历史增加统计</text>
						<text>库存盘点bug修复</text>
						<text>出入库操作记录不显示优化</text>
						<text>添加产品优化</text>
					</view>
				</view>

			</view>
		</view>
		<view class="footer">
			<text>Copyright @ {{year}} 谢荣 All Rights Reserved</text>
			<text>wx:xierong1090637044</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version:"1.0.0",
				year: new Date().getFullYear()
			}
		},
		methods: {

		}
	}
</script>

<style>
	/* pages/mine/upgrade/upgrade.wxss */
	.container {
		background: #f4f4f4;
		padding: 0;
		font-size: 11pt;
	}

	.content {
		flex: 1;
	}

	.version {
		height: 100rpx;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0 45rpx;
		box-sizing: border-box;
		font-size: 13pt;
		color: #666;
		border-bottom: 1px #e5e5e5 solid;
	}

	.version-title {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.title-name {
		padding-right: 10rpx;
	}

	.version-text {
		font-size: 10pt;
		line-height: 100%;
		color: #426ab3;
		border: 1px solid #426ab3;
		padding: 5rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 10rpx;
		text-align: center;
	}

	.version-log-link {
		position: relative;
		font-size: 12pt;
		color: #426ab3;
	}

	.version-log-link:active {
		opacity: .8;
	}

	.update-log::after {
		content: '';
		position: absolute;
		right: -3px;
		top: -1px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #e55c5c;
	}

	.log-list {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.describe {
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx 45rpx 30rpx;
		display: flex;
		flex-flow: column nowrap;
		color: #545454;
		line-height: 175%;
		background: #fff;
		margin-top: 15rpx;
		border-top: 1px #e5e5e5 solid;
		border-bottom: 1px #e5e5e5 solid;
	}

	.desc-title {
		display: flex;
		font-size: 13pt;
		line-height: 200%;
		margin-bottom: 15rpx;
	}

	.desc-v {
		flex: 1;
	}

	.desc-time {
		font-size: 11pt;
		color: #888;
	}

	.desc-list {
		display: flex;
		flex-direction: column;
		border-left: 8rpx solid #ddd;
		padding-left: 15rpx;
		color: #777;
		margin-bottom: 15rpx;
		font-size: 10pt;
	}

	.desc-content {
		padding-bottom: 15rpx;
	}

	.footer {
		display: flex;
		flex-direction: column;
		font-size: 28rpx;
		line-height: 150%;
		text-align: center;
		padding: 50rpx 0 15rpx;
		color: #c2c2c2;
	}
</style>
