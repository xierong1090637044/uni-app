<template>
	<view class="container">
		<view class="content">
			<view class="version">
				<view class="version-title">
					<text class="title-name">库存表KCB版</text>
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
						<text class="desc-v">v1.0.0 公测版</text>
						<text class="desc-time">2019.11.24</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>库存表KCB版-正式上线</text>
						<text>对于原库存表的用户，用户信息都是通用的</text>
						<text>电脑版将于此月底与大家见面</text>
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
				version: "1.0.0",
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
