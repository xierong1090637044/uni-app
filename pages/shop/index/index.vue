<template>
	<view>
		<view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="target" v-for="(target,index) in orderbyList" @tap="select(index)" :key="index" :class="[target.selected?'on':'']">
				{{target.text}}
				<view v-if="target.orderbyicon" class="icon" :class="target.orderbyicon[target.orderby]"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list" style="margin-top:20rpx">
			<view class="product-list">
				<view class="product" v-for="(goods) in goodsList" :key="goods.objectId" @tap="toGoods(goods)">
					<image mode="aspectFit" :src="goods.goodsIcon" style="width: 100%;height:200rpx"></image>
					<view class="name">{{goods.goodsName}}</view>
					<view class="info">
						<view class="price">￥{{goods.retailPrice}}</view>
						<view class="slogan">已出售{{goods.sellNum?goods.sellNum:0}}{{goods.packingUnit?goods.packingUnit:''}}</view>
					</view>
				</view>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";

	let that;
	//let uid = "2103246ee0";
	let uid;
	export default {
		data() {
			return {
				goodsList: [],
				loadingText: "正在加载...",
				headerTop: "0px",
				headerPosition: "fixed",
				orderbyList: [{
						text: "销量",
						selected: true,
						orderbyicon: false,
						orderby: 0,
						orderDesc:'sellNum'
					},
					{
						text: "价格",
						selected: false,
						orderbyicon: ['sheng', 'jiang'],
						orderby: 0,
						orderDesc:'retailPrice'
					}
				],
				orderby: "sheng",
				page_size: 20,
				page_num: 1,
				orderType:'sellNum'
			};
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.cid); //打印出上个页面传递的参数。

			that = this;
			
			if(option.userId){
				uid = option.userId;
				that.get_productList();
				uni.setNavigationBarTitle({
					title: option.nickName+'的产品列表'
				});
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},

		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			that.loadingText = "正在加载中..."
			that.page_num +=1
			that.get_productList()
		},
		methods: {
			//查询产品列表
			get_productList() {
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("order", "!=", 1);
				query.equalTo("status", "!=", -1);
				query.order(that.orderType);
				query.limit(that.page_size);
				query.select("goodsIcon","goodsName","retailPrice","sellNum","reserve");
				query.skip(that.page_size * (that.page_num - 1));
				query.find().then(res => {
					console.log(res)
					for (let item of res) {
						item.reserve = item.reserve.toFixed(2)
					}
					that.goodsList = that.goodsList.concat(res);
				});
			},

			//商品跳转
			toGoods(e) {
				console.log(e)
				/*uni.navigateTo({
					url: '../goods/goods?id='+ e.objectId+"&userId="+uid
				});*/
				uni.showToast({
					title:"敬请期待",
					icon:"none"
				})
			},
			//排序类型
			select(index) {
				that.goodsList = []
				that.page_size = 20
				that.page_num = 1
				if (this.orderbyList[index].orderbyicon) {
					 this.orderbyList[index].orderby == 0 ? that.orderType = '-'+this.orderbyList[index].orderDesc : that.orderType =this.orderbyList[index].orderDesc;
					if (this.orderbyList[index].selected) {
						this.orderbyList[index].orderby == 0 ? that.orderType =this.orderbyList[index].orderDesc : that.orderType ='-'+this.orderbyList[index].orderDesc;
						this.orderbyList[index].orderby = this.orderbyList[index].orderby == 0 ? 1 : 0;
					}
				}else{
					that.orderType = this.orderbyList[index].orderDesc
				}
				this.orderbyList[index].selected = true;
				let len = this.orderbyList.length;
				for (let i = 0; i < len; i++) {
					if (i != index) {
						this.orderbyList[i].selected = false;
					}
				}
				
				that.get_productList()
				
			}
		}

	}
</script>

<style lang="scss">
	.icon {
		font-size: 26upx;
	}

	.header {
		width: 92%;
		padding: 16rpx 4%;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}


		}
	}

	.place {
		height: 100upx;
	}

	.goods-list {
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 48%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);

				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>
