<template>
	<view>
		<view class='all_list' v-if="detail !=''">
			<view v-for="(item,index) in detail" :key="index" style='display:flex;justify-content: space-between;border-bottom:1px solid#ddd;padding:5px 0'>
				<view>
					<view>{{item.createdAt}}</view>
					<view>货损数量：￥{{item.bad_num}}</view>
					<view v-if="item.beizhu_text != ''">备注：{{item.beizhu_text}}</view>
				</view>
			</view>
		</view>
		<view v-else class='no_operations'>暂无货损记录</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	export default {
		data() {
			return {
				detail: ''
			}
		},
		onLoad(options) {
			that = this;
			const query = Bmob.Query("bad_goods");
			query.equalTo("goods", "==", options.id);
			query.order("-createdAt");
			query.find().then(res => {
				console.log(res)
				that.detail = res
			});
		},
		methods: {

		}
	}
</script>

<style>
	.all_list {
		background-color: #fff;
		padding: 0 15px;
		max-height: calc(100vh - 20px);
		overflow: scroll;
	}

	.header_content {
		padding: 15px;
	}

	.no_operations {
		background-color: #fff;
		padding: 10px 15px;
		max-height: calc(100vh - 20px);
		overflow: scroll;
		line-height: 46px;
	}

	.header_item {
		display: flex;
		justify-content: space-between;
	}
</style>
