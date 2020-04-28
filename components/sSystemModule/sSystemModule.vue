<template>
	<view>
		<view class="modelItem">
			<view class="title">账号相关</view>
			<view class='o_list'>
				<view v-for='(value,index) in nowFristEle' :key="index" class='o_item' @click="options(value.id)">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
					</view>
					<view class='o_text'>{{value.name}}</view>
					<view style="font-size: 20rpx;color: #333;font-weight: 100;">（{{value.notice}})</view>
				</view>
			</view>
		</view>
		
		<!--<view class="modelItem">
			<view class="title">批量操作</view>
			<view class='o_list'>
				<view v-for='(value,index) in nowSecondEle' :key="index" class='o_item' @click="options(value.id)">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
					</view>
					<view class='o_text'>{{value.name}}</view>
					<view style="font-size: 20rpx;color: #333;font-weight: 100;" v-if="value.notice">（{{value.notice}})</view>
				</view>
			</view>
		</view>-->
		
		<view class="modelItem">
			<view class="title">系统设置</view>
			<view class='o_list'>
				<view v-for='(value,index) in nowThridEle' :key="index" class='o_item' @click="options(value.id)">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
					</view>
					<view class='o_text'>{{value.name}}</view>
					<view style="font-size: 20rpx;color: #333;font-weight: 100;" v-if="value.notice">（{{value.notice}})</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				fristEle: [{
						name: '数据备份',
						notice: '敬请期待',
						icon: 'cloud-upload',
						id: 0,
					},
					{
						name: '账号注销',
						notice: '敬请期待',
						icon: 'telegram',
						id: 1
					},
					{
						name: '系统重建',
						notice: '敬请期待',
						icon: 'link',
						id: 2
					}
				],
				
				secondEle: [
					{
						name: '导入模板',
						notice: '查看->导入',
						icon: 'cloud-upload',
						url:"/pages/mine/uploadFile/uploadFile",
						id:3
					},
					{
						name: '导入商品资料',
						notice: '会员可用',
						icon: 'cloud-upload',
						url:"/pages/mine/uploadFile/uploadFile",
						id:4
					}
				],
				
				thridEle: [
					{
						name: '系统设置',
						notice: '',
						icon: 'cog',
						url:"/pages/mine/setting/setting",
						id:5
					},
				],

				nowFristEle: [],
				nowSecondEle:[],
				nowThridEle:[],
				user: uni.getStorageSync("user"),
				identity:uni.getStorageSync("identity"),
			};
		},

		mounted() {
			that = this;
			if (that.identity == 2) {
				that.nowFristEle = []
				that.nowSecondEle = []
				that.nowThridEle = []
			}else{
				that.nowFristEle = that.fristEle
				that.nowSecondEle = that.secondEle
				that.nowThridEle = that.thridEle
			}
		},
		
		methods:{
			options(id){
				if(id == 3){
					that.downloadDemoFile()
				}else if(id == 4){
					that.uploadfile()
				}else if(id == 5){
					uni.navigateTo({
						url:"/pages/mine/setting/setting"
					})
				}
			},
			
			//下载数据模板
			downloadDemoFile(){
				wx.downloadFile({
				  // 示例 url，并非真实存在
				  url: 'https://www.jimuzhou.com/static/demo.xlsx',
				  success: function (res) {
				    const filePath = res.tempFilePath
				    wx.openDocument({
				      filePath: filePath,
							fileType:'xlsx',
				      success: function (res) {
				        console.log('打开文档成功')
				      }
				    })
				  }
				})
			},
			
			uploadfile() {
				if(that.user.is_vip){
					uni.showLoading({
						title:"上传中..."
					})
					wx.chooseMessageFile({
						count: 1,
						type: 'file',
						success(res) {
							console.log(res)
							// tempFilePath可以作为img标签的src属性显示图片
							const tempFiles = res.tempFiles
					
							uni.uploadFile({
								url: 'https://www.jimuzhou.com/api/getfile.php', //仅为示例，非真实的接口地址
								filePath: tempFiles[0].path,
								name: 'file',
								formData: {
									'userid': uni.getStorageSync('uid')
								},
								success: (uploadFileRes) => {
									//console.log(JSON.parse(uploadFileRes.data))
									let result = JSON.parse(uploadFileRes.data)
									uni.hideLoading();
									if(result.code == "1"){
										uni.showToast({
											title:"上传成功"
										})
									}
								}
							});
						}
					})
				}else{
					uni.showToast({
						title:"您还不是会员",
						icon:"none"
					})
				}
			},
			
		}
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 28rpx;
	}

	.modelItem {
		padding: 20rpx 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 30rpx;
		border-radius: 40rpx;
		background: #F7F7F7;
	}

	.o_list {
		background: #F7F7F7;
	}

	.o_headerItem {
		background: #F7F7F7;
	}

	.o_item {
		width: 33.33%;
		font-weight: bold;
		margin-bottom: unset;
	}

	.o_text {
		margin-top: unset;
	}
</style>
