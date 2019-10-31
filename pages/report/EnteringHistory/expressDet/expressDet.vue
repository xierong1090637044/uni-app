<template>
  <div class="div-bg bg-white" >
    <!--物流跟踪-->
    <div>
      <div class="bg-white" style="margin-left: 4%;margin: auto;">
        <div style="font-size: 34rpx;color: #111111;margin-bottom: 30rpx;">物流跟踪<!--物流跟踪--></div>
        <div>
          <div class="track-rcol">
            <div class="track-list">
              <ul>
              <div v-for="(item,index) in logisticsList" :key="index">
                <li class="first" v-if="index===0">
                  <div></div>
                  <i class="node-icon"></i>
                  <span class="txt">{{item.context}}</span>
                  <span class="time">{{item.time}}</span>
                </li>
                <li v-if="index > 0 && index !== logisticsList.length-1">
                  <i class="node-icon"></i>
                  <span class="txt">{{item.context}}</span>
                  <span class="time">{{item.time}}</span>
                </li>
                <li v-if="index === logisticsList.length-1" class="finall">
                  <i class="div-spilander"></i>
                  <i class="node-icon"></i>
                  <span class="txt">{{item.context}}</span>
                  <span class="time">{{item.time}}ss</span>
                </li>
              </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	let that;
	let expressNum;
	export default {
		data() {
			return {
				logisticsList:[]
			}
		},
		
		onLoad(options) {
			that = this;
			expressNum = options.number
			
			console.log(expressNum)
			that.getInfoById(expressNum)
		},
		
		methods: {
			//通过条形码扫码得到商品信息
			getInfoById: function(expressNum) {
				console.log(expressNum);
				uni.showLoading({
					title: '加载中...',
				})
				uni.request({
					url: 'https://route.showapi.com/64-21',
					data: {
						showapi_appid: '84916',
						showapi_sign: 'ad4b63369c834759b411a9d7fcb07ed7',
						nu: expressNum,
					},
					header: {
						'content-type': 'application/json' // 默认值
					},
					success(res) {
						console.log(res.data.showapi_res_body.data)
						uni.request({
							url: 'https://route.showapi.com/64-19',
							data: {
								showapi_appid: '84916',
								showapi_sign: 'ad4b63369c834759b411a9d7fcb07ed7',
								com: res.data.showapi_res_body.data[0].simpleName,
								nu:expressNum
							},
							header: {
								'content-type': 'application/json' // 默认值
							},
							success(res) {
								uni.hideLoading();
								that.logisticsList = res.data.showapi_res_body.data,
								console.log(res)
							}
						});
						
						console.log(res)
					}
				});
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.div-bg{
		background #fff;
		height 100vh;
		overflow:scroll;
		padding 0 30rpx;
		width:calc(100% - 60rpx);
		overflow-x:hidden;
	}
  .message-text{
    font-size: 24rpx;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40rpx;
    color: #333333;
    width: 50%;
  }
  .fontblack{
    color:#999999
  }
  .img2{
    width: .81rem;
    height: .8rem;
    float: right;
  }
  .addressshow2{
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    width: 75%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 1rem;
  }
  .addressshow1{
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    width: 75%;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 1rem;
  }
  .orderTitle{
    font-size: 1rem;
    color: #333333;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    height: 2.5rem;
  }
  .orderDetail{
    font-size: 0.8rem;
    color: #666666;
    text-align:left;
  }
  .border-ceter{
    width: 92%;
    padding-left: 15px;
    padding-right: 15px;
  }
  .pay-button{
    width: 88%;
    height: 2.6rem;
    position:relative;
    background-color: red;
    color: white;

    margin-left: 6%;
  }
  ul li{
    list-style:none;
    font-size 1rem;
  }
  ul {
    padding-left 30rpx
  }
  .track-rcol{}
  .track-list{
    position:relative;
  }
  .track-list li{
    position:relative;
    padding:0px 0 60rpx 40rpx;
    border-left:1px solid #d9d9d9;
    color: #999;
  }
  .track-list li.first{
    color:red;
    padding-top:0;
    width 100%;
    text-align left;
    border-left:1px solid #d9d9d9;
  }
  .track-list li .node-icon{
    position: absolute;
    left: -5.5px;
    border-radius: 50%;
    width: 20rpx;
    height: 20rpx;
    top:4px;
    background-color: #999999;
  }
  .track-list li.first .node-icon{
    background-position:0-72px;
    background-color: red;
    width: 30rpx;
    z-index: 2;
    height: 30rpx;
    position: absolute;
    left: -9px;
    top: 0;
    border-radius: 50%;
  }
  .track-list li .time{
    margin-right:20px;
    position:relative;
    top:4px;
    display:inline-block;
    vertical-align:middle;
    background-color: white;
    color: #999;
    width 100%;
    text-align left;
		font-size: 28rpx;
  }
  .track-list li .txt{
    position:relative;
    display:inline-block;
    vertical-align:top;
    color: #999;
		font-size:28rpx;
  }
  .track-list li.first .time{
    text-align: left;
    width: 94%;
    color:red;
		font-size: 32rpx;
  }
  .track-list li.first .txt{
    color: red;
    text-align left;
    width: 94%;
		font-size: 32rpx;
  }
  .track-list li.finall{
    position:relative;
    padding:0px 0 20rpx 40rpx;
    line-height:18px;
    border-color white;
    border-left:1px solid #ffffff;
    color: #999;
  }
  .track-list li.finall .div-spilander{
    width: 1px;
    position: absolute;
    position: absolute;
    left: -1.5px;
    height: 0.5rem;
    background-color: #d9d9d9;
  }

</style>
