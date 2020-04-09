<template>
	<view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid = uni.getStorageSync("uid")
	export default {
		data() {
			return {
				customId:'',
				custom:''
			}
		},

		onLoad(options) {
			that = this;
			uni.setNavigationBarTitle({
				title: "应收账款明细"
			})
			that.customId = options.customId
			that.loadData()
		},

		methods: {
			//加载数据
			loadData(type) {
				uni.showLoading({
					title: "加载中..."
				})
				const query1 = Bmob.Query('customs');
				query1.get(that.customId).then(res => {
				  console.log(res)
					that.custom = res
					const query = Bmob.Query("order_opreations");
					query.equalTo("type", "==", -1);
					query.equalTo("extra_type", "==", 1);
					query.equalTo("master", "==", uid);
					query.equalTo("custom", "==", that.customId);
					query.equalTo("debt", ">", 0);
					query.include("account", "custom");
					query.find().then(res => {
						query.equalTo("type", "==", -1);
						query.equalTo("extra_type", "==", 1);
						query.equalTo("master", "==", uid);
						query.equalTo("custom", "==", that.customId);
						query.equalTo("debt", ">", 0);
						query.include("account", "custom");
						query.statTo("sum", "debt");
						query.find().then(res => {
							console.log(res)
							uni.hideLoading()
						})
						console.log(res)
					})
				})
				
				
			},
		}
	}
</script>

<style>

</style>
