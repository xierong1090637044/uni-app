<template>
<view>
<!--第一部分-->
<view style='display:flex;justify-content: space-between;padding:15px;'>
  <view style='font-size:18px;'></view>
  <view style='font-size:12px;'></view>
</view>

<view class='header_text'>
  <view>登陆积木舟</view>
  <view class='iconImage'><image src='/static/chuan.png' style='width:100%;height:100%'></image></view>
</view>

<view style='padding:15px 30px;margin:5% 0'>
<form @submit="formSubmit">
  <view class='input_view'><input placeholder='请输入手机号' class='input_element' name="phone" @input='get_InputPhone' maxlength="11"></input></view>
  <view class='input_view_flex'>
    <view style='width:60%'><input placeholder='请输入验证码' class='input_element' maxlength='6' name="sms_code"></input></view>
    <view><button plain="true" class='get_smscode' @click='get_smscode' :disabled='code_button_state'>{{code_text}}</button></view>
  </view>

  <view><button class='login_button' plain="true" form-type="submit" hover-class="bg_button">登陆</button></view>
  <navigator open-type='navigate' url='../staff_landing/staff_landing'><button class='staff_login_button' plain="true"  hover-class="bg_button">员工登陆</button></navigator>
</form>
</view>


</view>
</template>

<script>
	import Bmob from '@/utils/bmob.js';
	
	let that;
	let phone_number = "";
	export default {
		data() {
			return {
				code_text:"验证码",
				code_button_state:false
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			//手机输入触发
			get_InputPhone(e) {
			  phone_number = e.detail.value;
			},
			
			//获取验证码点击
			get_smscode: function () {
			  if (phone_number.length < 11)
			  {
			    uni.showToast({title: '请输入正确的手机号',icon:"none"})
			  }else{
			    let params = {
			      mobilePhoneNumber: phone_number, //string
			      template:"积木舟"
			    }
			    Bmob.requestSmsCode(params).then(function (response) {
			      uni.showToast({ title: '发送成功' });
						that.code_button_state  =true;
						that.code_text = 60;
			
			      let code_down = setInterval(function(){
							that.code_text = that.code_text - 1
			        if (that.code_text == 0)
			        {
			          clearInterval(code_down);
								that.code_button_state  =false;
								that.code_text = "验证码";
			        }
			      },1000);
			
			    })
			      .catch(function (error) {
			        wx.showToast({ title: '发送失败', icon: "none" })
			      });
			    }
			},
			
			//登陆提交
			formSubmit(e) {
			 //console.log(e)
			  let phone = Number(e.detail.value.phone);
			  let sms_code = Number(e.detail.value.sms_code);
			
			  if (e.detail.value.phone.length <11)
			  {
			    uni.showToast({ title: '手机格式错误', icon: "none" })
			  } else if (e.detail.value.sms_code < 6){
			    uni.showToast({ title: '验证码格式错误', icon: "none" })
			  }else{
			    Bmob.User.signOrLoginByMobilePhone(phone, sms_code).then(res => {
			      console.log(res);
			      uni.setStorageSync("user",res)
						uni.setStorageSync("masterId",res.objectId)
						uni.setStorageSync("identity",1);//1是老板，2是员工
						uni.setStorageSync("uid",res.objectId)
						uni.switchTab({
							url:"/pages/index/index"
						});
			    }).catch(err => {
			      uni.showToast({ title: '验证码或手机号错误', icon: "none" })
			    });
			  }
			  
			},
			
		}
	}
</script>

<style>
page{
  background: #fff;
  text-align: center;
	font-size: 28rpx;
	color: #3D3D3D;
}

input:focus
{
  border-bottom: 1px solid#426ab3!important;
}

.header_text
{
  color: #4d4d4d;
  font-weight: bold;
  font-size: 40rpx;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iconImage
{
  width: 40rpx;
  height: 40rpx;
  margin-left: 10rpx;
  margin-top: 10rpx;
}

.input_view
{
  padding: 40rpx 0 0;
}
.input_view_flex
{
  padding: 40rpx 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input_element
{
  text-align: left;
  border-bottom: .5rpx solid#ddd;
  padding: 0 10rpx;
  height: 80rpx;
  line-height: 80rpx;
}
.login_button
{
  width: 90%;
  margin: 0 auto;
  border-radius: 40rpx;
  background: #f1f1f1 !important;
  border:unset !important;
  color: #999;
  font-weight: bold;
  margin-top: 15%;
  box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, .1)
}
.staff_login_button
{
  width: 90%;
  margin: 0 auto;
  border-radius: 40rpx;
  background: #b34257 !important;
  border:unset !important;
  color: #fff !important;
  font-weight: bold;
  margin-top: 10%;
  box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, .1)
}
.confirm_btton
{
  width: 90%;
  margin: 0 auto;
  border-radius: 40rpx;
  background: #42b35f !important;
  border:unset !important;
  color: #fff;
  font-weight: bold;
  margin-top: 10%;
  box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, .1)
}

.bg_button
{
  background: #426ab3 !important;
  color: #fff !important;
}

.display_flex
{
  display: flex;
  align-items: center;
}

.get_smscode
{
  font-size: 24rpx;
  border-radius: 40rpx;
  color: #999;
  font-weight: bold;
  background: #f1f1f1 !important;
  border:unset !important;
}
</style>
