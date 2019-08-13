<template>
	<view>
		<uni-collapse accordion="true" v-for="(item,index) in custom_list" :key="index">
		    <uni-collapse-item  :title="item.custom_name" >
					  <view>{{item.relations[0].createdAt}}</view>
		        
		    </uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import customs from '@/utils/customs.js'
	import Bmob from '@/utils/bmob.js'
	
	import loading from "@/components/Loading/index.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	
	let that;
	let uid = uni.getStorageSync("uid");
	export default {
		components: {
			uniCollapse,
			loading,
			uniCollapseItem
		},
		data() {
			return {
				custom_list:[]
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(options.id)
			that = this;
			customs.get_customList().then(res=>{
				//console.log(res)
				let custom = res
				for(let item of custom){
					const query = Bmob.Query("Bills");
					query.equalTo("type", '==', -1);
					query.equalTo("custom", '==', item.objectId);
					query.find().then(res => {
						//console.log(res)
						item.relations = res
					});
				}
				that.custom_list = custom
				
				console.log(that.custom_list)
			})
		},
	}
</script>

<style>

</style>
