<template>
	<view class='page'>
		<view class="content">
			<view class="left_content">
				<view style="height: calc(100vh - 80rpx);overflow: scroll;">
					<view v-for="(item,index) in frist_class" :key="index" :class="selected_id===item.objectId?'selectd_item':''"
					 class="class_item" style="font-weight: bold;"  @click="get_second_category(item.objectId)">
						<view class="class_texxt_view">{{item.class_text}}</view>
						<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose">
							<text style="color: #d93a49;"  @click.stop="select_this(item,1)">选择</text>
						</view>
						<fa-icon v-else type="pencil-square-o" size="20" color="#fff" @click.stop="showoption(selected_id,1,item.class_text)" />
					</view>
				</view>

				<view class="class_item_bottom" @click="add_fristclass">
					<text style="margin-right: 10rpx;">新增一类</text>
					<fa-icon type="plus-circle" size="20" color="#3d3d3d" />
				</view>
			</view>
			<view class="right_content">
				<view style="height: calc(100vh - 80rpx);overflow: scroll;">
					<view v-for="(item,index) in second_class" :key="index" class="class_item" style="color: #333333;">
						<view class="class_texxt_view">{{item.class_text}}</view>
						<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(item,2)">
							<text style="color: #d93a49;">选择</text>
						</view>
						<fa-icon v-else type="pencil-square-o" size="20" color="#3d3d3d" @click.stop="showoption(item.objectId,2,item.class_text)" />
					</view>
				</view>
				<view class="class_item_bottom" @click="add_secondclass">
					<text style="margin-right: 10rpx;">新增二类</text>
					<fa-icon type="plus-circle" size="20" color="#3d3d3d" />
				</view>
			</view>
		</view>

		<uni-popup :show="middle" type="top" mode="fixed" @hidePopup="hidePopup" class="popup">
			<view class="popup_content">
				<view class="popup_title">{{Popup_title}}</view>
				<view><input :placeholder="'请输入'+Popup_title" class="popup_input" v-model="class_text" /></view>
				<view><button class="popup_button" @click="confrim">确认</button></view>
			</view>
		</uni-popup>

		<uni-popup :show="popup_editshow" type="top" mode="fixed" @hidePopup="hidePopup" class="popup">
			<view class="popup_content">
				<view class="popup_title">{{Popup_title}}</view>
				<view><input :placeholder="'请编辑'+Popup_title" class="popup_input" v-model="input_class_text" /></view>
				<view><button class="popup_button" @click="edit()">确认</button></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	let that;
	let user;
	let uid;
	export default {
		components: {
			loading,
			faIcon,
			uniPopup
		},
		data() {
			return {
				is_choose:false,
				loading: true,
				frist_class: null, //一级分类
				second_class: null, //二级分类
				selected_id: null, //选择的id
				class_text: null, //分类的输入内容
				input_class_text: null, //已经输入的内容
				middle: false,
				popup_editshow: false,
				Popup_title: "一级分类",
			}
		},
		onLoad(options) {
			that = this;
			user = uni.getStorageSync("user");
			uid = uni.getStorageSync("uid");
			
			if(options.type =="choose"){
				that.is_choose = true
			}
		},
		onShow() {
			that.get_category();
		},
		methods: {
			
			//选择分类的情况下选择分类
			select_this(item,type){
				item.type = type
				uni.setStorageSync("category", item)
				uni.navigateBack({
					delta: 1
				})
			},
			
			//得到一级分类
			get_category(){
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("class_user");
				query.equalTo("parent", "==", uid);
				query.find().then(res => {
					console.log(res)
					that.frist_class = res;
					
					if(res.length == 0){
						uni.hideLoading()
					}else{
						that.get_second_category(res[0].objectId)
					}
				});
			},

			//得到二级分类
			get_second_category(id) {
				that.selected_id = id;
				const query = Bmob.Query('class_user')
				query.field('second', id)
				query.relation('second_class').then(res => {
					//console.log(res);
					uni.hideLoading()
					that.second_class = res.results;
				})
			},

			//点击编辑图标
			showoption(id, type, value) {
				console.log(id, type, value)
				uni.showActionSheet({
					itemList: ['删除', '编辑'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex == 0) {
							if (type === 1) {
								that.delete(id, "class_user")
							} else {
								that.delete(id, "second_class")
							}

						} else {
							that.input_class_text = value
							that.selected_id = id
							if (type === 1) {
								that.Popup_title = "一级分类"
								that.popup_editshow = true;
							} else {
								that.Popup_title = "二级分类"
								that.popup_editshow = true;
							}
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			//点击一级分类事件
			add_fristclass() {
				this.Popup_title = "一级分类";
				that.middle = true;
			},

			//点击一级分类事件
			add_secondclass() {
				this.Popup_title = "二级分类";
				that.middle = true;
			},

			hidePopup() {
				this.middle = false;
				this.popup_editshow = false;
			},

			//编辑分类内容
			edit() {
				let dbname;
				if (that.Popup_title === "一级分类") {
					dbname = "class_user";
				} else {
					dbname = "second_class";
				}
				console.log(that.selected_id, dbname)
				const query = Bmob.Query(dbname);
				query.set('id', that.selected_id); //需要修改的objectId
				query.set('class_text', that.input_class_text);
				query.save().then(res => {
					console.log(res);
					uni.showToast({
						title: '修改成功'
					});
					that.get_category();
					
					that.middle = false;
					that.popup_editshow = false;
				}).catch(err => {
					console.log(err)
				})
			},

			//删除分类
			delete(id, dbname) {
				uni.showModal({
					title: '提示',
					content: '是否删除此分类',
					success(res) {
						if (res.confirm) {
							const query = Bmob.Query(dbname);
							query.destroy(id).then(res => {
								console.log(res)
								uni.showToast({
									title: '删除成功',
									duration: 1000
								});
								that.get_category();
							}).catch(err => {
								console.log(err)
							})
						}
					}
				})
			},

			//popup确定点击
			confrim() {
				const class_text = that.class_text;

				if (this.Popup_title === "一级分类") {
					if (class_text == null) {
						uni.showToast({
							icon: "none",
							title: '请输入类别',
						})
					} else {
						const pointer = Bmob.Pointer('_User')
						const poiID = pointer.set(uid);

						const query = Bmob.Query('class_user');
						query.set("parent", poiID)
						query.set("class_text", class_text);
						query.save().then(res => {
							that.get_category();
							this.middle = false;
							this.class_text = null;
						}).catch(err => {
							console.log(err)
						})
					}
				} else {
					//console.log(that.selected_id)
					const selected_id = that.selected_id

					const pointer = Bmob.Pointer('class_user')
					const poiID = pointer.set(selected_id)

					const query = Bmob.Query('second_class');
					query.set("class_text", class_text)
					query.set("parent", poiID)
					query.save().then(res => {
						//console.log(res)
						const relation = Bmob.Relation('class_user') // 需要关联的表
						const relID = relation.add([res.objectId]) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
						const query = Bmob.Query('class_user')
						query.get(selected_id).then(res => {
							res.set('second', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
							res.save()

							that.get_second_category(selected_id)
							this.middle = false;
							this.class_text = null;
						})
					}).catch(err => {
						console.log(err)
					})

				}

			},

		}
	}
</script>

<style>
	.page{
		background: #fff;
	}
	.content {
		display: flex;
	}

	.left_content {
		width: 50%;
		border-right: 1rpx solid#ddd;
		height: 100vh;
	}

	.right_content {
		width: 50%;
	}

	.class_item {
		padding-left: 10rpx;
		padding-right: 10rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid#ddd;
		font-size: 26rpx;
		color: #3D3D3D;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.selectd_item {
		background: #df9464 !important;
		color: #fff !important;
	}

	.class_item_bottom {
		padding-left: 10rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid#ddd;
		font-size: 26rpx;
		color: #3D3D3D;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.class_texxt_view {
		padding: 10rpx 0;
		width: calc(100% - 30rpx);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.popup {
		text-align: center;
		color: #3D3D3D;
	}

	.popup_content {
		width: 500rpx;
	}

	.popup_title {
		margin-bottom: 40rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.popup_input {
		border: 1rpx solid#ddd;
		margin-bottom: 40rpx;
		line-height: 90rpx;
		height: 90rpx;
		border-radius: 8rpx;
		font-size: 26rpx;
	}

	.popup_button {
		background: #426ab3;
		color: #fff;
	}
</style>
