<template>
	<view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	export default {
		data() {
			return {

			}
		},

		onLoad() {
			const pointer = Bmob.Pointer('_User')
			const userid = pointer.set("525ad58072")

			const query = Bmob.Query("NGoods");
			query.equalTo("userId", "==", "525ad58072");
			query.equalTo("order", "==", 0);
			query.limit(500);
			query.skip(500);
			query.find().then(res => {
				console.log(res)
				let maxlength = res.length
				let count = 0;
				for (let item of res) {
					let goodsName = item.goodsName
					const query = Bmob.Query('Goods');
					query.set("goodsIcon", item.goodsIcon ? item.goodsIcon : '')
					query.set("goodsName", item.goodsName)
					query.set("costPrice", item.costPrice ? item.costPrice.toString() : '0')
					query.set("retailPrice", item.retailPrice ? item.retailPrice.toString() : '0')
					query.set("regNumber", item.regNumber || '')
					query.set("reserve", Number(item.reserve))
					query.set("productCode", item.productCode || '')
					query.set("product_info", item.product_info || '')
					query.set("producer", item.producer || '')
					query.set("packingUnit", item.packingUnit || '')
					query.set("packageContent", item.packageContent || '')
					query.set("position", item.position || '')
					query.set("warning_num", Number(item.warning_num || 0))
					query.set("max_num", Number(item.max_num || 0))
					query.set("stocktype", item.stocktype) //库存数量类型 0代表库存不足 1代表库存充足
					query.set("order", item.order)

					if (item.goodsClass) { //存在此缓存证明选择了仓库
						let pointer2 = Bmob.Pointer('class_user')
						let p_class_user_id = pointer2.set(item.goodsClass.objectId) //一级分类id关联
						query.set("goodsClass", p_class_user_id)
					}

					if (item.second_class) { //存在此缓存证明选择了仓库
						let pointer1 = Bmob.Pointer('second_class')
						let p_class_user_id2 = pointer1.set(item.second_class.objectId) //一级分类id关联
						query.set("second_class", p_class_user_id2)
					}

					/*if (item.header) { //存在此缓存证明选择了仓库
						let pointer3 = Bmob.Pointer('Goods')
						let p_class_user_id3 = pointer3.set(item.header.objectId) //一级分类id关联
						query.set("header", p_class_user_id2)
					}
					
					*/

					query.set("userId", userid)
					query.save().then(res => {
						
						count+=1
						if(count == maxlength){
							const query = Bmob.Query("NGoods");
							query.equalTo("userId", "==", "525ad58072");
							query.equalTo("order", "==", 1);
							query.limit(500);
							query.skip(500);
							query.find().then(res => {
								console.log(res)
								let goods = res
								for (let good of goods) {
									console.log(good.goodsName)
									const query = Bmob.Query("Goods");
									query.equalTo("userId", "==", "525ad58072");
									query.equalTo("order", "==", 0);
									query.equalTo("goodsName","==", good.goodsName)
									query.find().then(res => {
										console.log("sssss",res)
										let pointer4 = Bmob.Pointer('Goods')
										let p_headerId = pointer4.set(res[0].objectId) //一级分类id关联
										
										var queryObj = Bmob.Query('Goods');
										queryObj.set("order", 1)
										queryObj.set("goodsIcon", good.goodsIcon ? good.goodsIcon : '')
										queryObj.set("goodsName", good.goodsName)
										queryObj.set("costPrice", good.costPrice ? good.costPrice.toString() : '0')
										queryObj.set("retailPrice", good.retailPrice ? good.retailPrice.toString() : '0')
										queryObj.set("header", p_headerId)
										queryObj.set("userId", userid)
										if (good.stocks) { //存在此缓存证明选择了仓库
											let pointer5 = Bmob.Pointer('stocks')
											let p_class_user_id5 = pointer5.set(good.stocks.objectId) //一级分类id关联
											queryObj.set("stocks", p_class_user_id5)
										}
										queryObj.set("reserve", Number(good.reserve))
										queryObj.set("warning_num", Number(good.warning_num || 0))
										queryObj.set("max_num", Number(good.max_num || 0))
										queryObj.save().then(res => {})
										
									})
									
								}
								
							})
						}

						

					})
				}
			})
		},

		methods: {

		}
	}
</script>

<style>

</style>
