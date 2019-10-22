import Vue from 'vue'
import VueI18n from 'vue-i18n' 
import App from './App'
import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
import loading from "@/components/Loading/index.vue"
import nocontent from "@/components/No_content.vue"
import uniIcon from "@/components/uni-icon/uni-icon.vue"
import Bmob from "hydrogen-js-sdk"
import wechat from './utils/wechat'

Bmob.initialize("825b954fe97e9186", "109063","47f76baf4ee4d90630d7b2bc17f7505c");

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(VueI18n)
const i18n = new VueI18n({  
  locale: 'zh-CN',  
  messages: {  
    'en-US': {  
      operational_status: {  
        1: 'Invite',  
        2: 'Game'  
      }  
    },  
    'zh-CN': {  
      operational_status: {  
        a: '库存成本：',  
        b: '游戏'  
      }  
    }  
  }  
})  

Vue.prototype._i18n = i18n
 Vue.prototype.Bmob = Bmob
 Vue.prototype.$wechat =wechat;
Vue.component('loading',loading)
Vue.component('faIcon',faIcon)
Vue.component('uniIcon',uniIcon)
Vue.component('nocontent',nocontent)

const app = new Vue({
	i18n,
	Bmob,
    ...App
})
export default {
    components: {
        faIcon,
				nocontent,
				uniIcon,
				loading
    }
}
app.$mount()
