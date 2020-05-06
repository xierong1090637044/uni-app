import Bmob from "hydrogen-js-sdk";
export default {
  Post(name, params) {
    params.uid = uni.getStorageSync("uid")
    return new Promise((resolve, reject) => {
      Bmob.functions(name, params).then(function(res) {
        
        if (res.code == 1) {
					console.log(name,res)
          resolve(res)
        }else{
					uni.showToast({
						icon:"none",
						title:res.msg
					})
        }
      })
    })
  }
}
