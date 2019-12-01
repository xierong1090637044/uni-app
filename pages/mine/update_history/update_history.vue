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
						<text class="desc-v">v1.1.0 公测版</text>
						<text class="desc-time">2019.11.30</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>产品添加优化升级</text>
						<text>出库、入库、销售、采购、盘点、调拨操作优化</text>
						<text>操作记录详情优化</text>
						<text>新增消息中心</text>
						<text>员工列表优化</text>
						<text>产品添加以及多规格产品添加优化</text>
						<text>新增预警产品筛选</text>
						<text>暂时移除物料管理模块</text>
					</view>
				</view>
				
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.9 公测版</text>
						<text class="desc-time">2019.11.26</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>新增库存表KCB版</text>
						<text>两个除了商品信息外，其他信息互通</text>
					</view>
				</view>
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.8 公测版</text>
						<text class="desc-time">2019.11.17</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>出入库逻辑优化，一些bug修复</text>
						<text>电脑版将于此月底与大家见面</text>
						<text>新增产品详情分享以及操作记录分享</text>
						<text>增加物料管理模块以及生产模块</text>
						<text>商品关联类别bug修复</text>
						<text>筛选样式优化，产品信息修改样式优化</text>
						<text>精度问题bug修复</text>
						<text>出库、调拨可以关联到仓库</text>
					</view>
				</view>
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.7 公测版</text>
						<text class="desc-time">2019.11.09</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>销售单、出库单功能完善，并增加审核功能</text>
						<text>员工权限增加并优化</text>
						<text>多规格产品操作优化</text>
						<text>操作记录支持跳转到详情</text>
						<text>操作记录bug修复</text>
						<text>连续扫码bug修复</text>
						<text>二维码bug修复</text>
						<text>UI升级优化</text>
					</view>
				</view>
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.6 公测版</text>
						<text class="desc-time">2019.11.01</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>新增自动打印</text>
						<text>新增批量导入导出</text>
						<text>新增上传门店图片，以及仓库图片</text>
						<text>新增会员可以在操作记录详情查看物流详情</text>
						<text>出入库新增凭证图</text>
						<text>预警记录以及操作记录支持查询到一年</text>
						<text>修复出入库 备注打印bug</text>
						<text>修复经营状况bug</text>
						<text>修复操作记录总价显示bug</text>
						<text>支持修改个人头像，昵称，性别</text>
					</view>
				</view>
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.5 公测版</text>
						<text class="desc-time">2019.10.22</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>新增操作手册说明</text>
						<text>新增会员率以及一些样式修改</text>
						<text>新增产品报表页面</text>
						<text>新增单品统计页面</text>
						<text>新增采购、销售操作以及发货方式选项</text>
						<text>新增一键清零操作</text>
						<text>支持连续扫码添加产品</text>
						<text>库存种类显示错误修复</text>
						<text>新增员工进价隐藏权限</text>
						<text>多规格产品出入库bug修复</text>
						<text>门店修改bug修复</text>
						<text>产品出入预警bug修复</text>
					</view>
				</view>
				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.4 公测版</text>
						<text class="desc-time">2019.10.09</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>新增员工操作记录页面，以及汇总</text>
						<text>添加产品支持选择一级分类</text>
						<text>经营状况计算方式以及文字描述修改</text>
						<text>产品信息修改支持图片上传</text>
						<text>产品搜索优化</text>
						<text>增加小程序通知功能</text>
						<text>兼容老数据，支持一级分类的筛选</text>
						<text>修改一些页面文字</text>
					</view>
				</view>

				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.3 公测版</text>
						<text class="desc-time">2019.10.09</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>产品出库、入库、盘点、退货选择产品增加多规格的产品出入库</text>
						<text>产品管理新增多规格产品添加（适用于鞋子，衣服，工业产品...）</text>
						<view>产品列表支持产品大图查看</view>
						<view>产品详情修改完善</view>
						<view>增加产品有效期，以及筛选过期产品</view>
						<text>bug修复，操作以及显示优化</text>
						<text>新增vip功能，我们希望你们可以理解</text>
					</view>
				</view>

				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.2 公测版</text>
						<text class="desc-time">2019.09.28</text>
					</view>
					<text class="desc-content">优化升级</text>
					<view class="desc-list">
						<text>产品出库、入库、盘点、退货选择产品优化</text>
						<text>修改、增加产品bug修复</text>
						<text>所有的操作记录增加分页显示，支持可以查看所有日期的记录</text>
						<text>员工的权限可以实时同步，并增加仓库管理、调拨记录的权限</text>
						<text>增加商品信息打印功能、操作记录打印功能，后续将开放更多打印功能</text>
						<text>优化一些页面的操作以及UI体验</text>
					</view>
				</view>

				<view class="describe">
					<view class="desc-title">
						<text class="desc-v">v1.0.1 公测版</text>
						<text class="desc-time">2019.09.03</text>
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
						<text>商品出库bug修复</text>
						<text>商品信息修改bug修复</text>
						<text>客户明细bug修复</text>
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: "1.0.8",
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
