<template>
	<!-- #ifdef H5 -->
	<scroll-view scroll-y="true" style="height:85vh;">
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<scroll-view scroll-y="true" style="height:91vh;">
			<!-- #endif -->

			<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;">
				<view class="display_flex_bet" style="padding-bottom: 10rpx;">
					<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存
						<text style="color: #f30;">New</text>
						<text style="font-size: 24rpx;">（多产品单仓库操作）（适用于新版产品）</text>
					</view>
					<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold;" @click='scan_code(1)'
					 v-if="stockListsNew.length > 0"></i>
				</view>

				<view class='o_list' v-if="stockListsNew.length > 0">
					<navigator v-for='(value,index) in stockListsNew' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
					</navigator>
				</view>
				<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
			</view>

			<!--销售模块-->
			<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;">
				<view class="display_flex_bet" style="padding-bottom: 10rpx;">
					<view class="display_flex">
						<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">销售</view>
						<fa-icon type="question-circle" size="20" color="#426ab3" @click="gotoNotice()"></fa-icon>
					</view>
					<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(2)'
					 v-if="sellLists.length > 0"></i>
				</view>

				<view class='o_list' v-if="sellLists.length > 0">
					<navigator v-for='(value,index) in sellLists' :key="index" class='o_item' :url="(value.url)" hover-class="none"
					 v-if="value.type=='New'">
						<view class="o_headerItem" style="background: #afbb4f;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
						<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
					</navigator>
				</view>
				<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
			</view>

			<!--采购模块-->
			<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;">
				<view class="display_flex_bet" style="padding-bottom: 10rpx;">
					<view class="display_flex">
						<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">采购</view>
						<fa-icon type="question-circle" size="20" color="#426ab3" @click="gotoNotice()"></fa-icon>
					</view>

					<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(3)'
					 v-if="purchaseLists.length > 0"></i>
				</view>

				<view class='o_list' v-if="purchaseLists.length > 0">
					<navigator v-for='(value,index) in purchaseLists' :key="index" class='o_item' :url="(value.url)" hover-class="none"
					 v-if="value.type=='New'">
						<view class="o_headerItem" style="background: #ad4fbb;">
							<i :class="'iconfont '+value.icon" style="font-size: 40rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
						<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
					</navigator>
				</view>
				<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
			</view>

			<!--其他模块-->
			<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;" v-if="user.identity !=2">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;padding-bottom: 10rpx;">其他</view>
				<view class='o_list'>
					<view v-for='(value,index) in optionsLists' :key="index" class='o_item' @click="otherFunctions(value.url,index)">
						<view class="o_headerItem" style="background: #bb4f77;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
</template>

<script>
	import common from '@/utils/common.js';
	import mine from '@/utils/mine.js';
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid;
	
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
