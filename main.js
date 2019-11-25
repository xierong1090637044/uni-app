import Vue from 'vue'
import VueI18n from 'vue-i18n' 
import App from './App'
import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
import loading from "@/components/Loading/index.vue"
import nocontent from "@/components/No_content.vue"
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import uniIcon from "@/components/uni-icon/uni-icon.vue"
import Bmob from "hydrogen-js-sdk"
// #ifdef H5
import wechat from './utils/wechat'
// #endif

Bmob.initialize("825b954fe97e9186", "109063","47f76baf4ee4d90630d7b2bc17f7505c");
//Bmob.initialize("db7d7df44b87bb60", "109063","db1c531222c31c7511629dd458a72436");
//Bmob.initialize("60e21fd2bedf5df2", "109063","38cfa6febb9272ce3ce45f24d6f11b85")

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
// #ifdef H5
Vue.prototype.$wechat =wechat;
// #endif

Vue.component('loading',loading)
Vue.component('faIcon',faIcon)
Vue.component('uniIcon',uniIcon)
Vue.component('nocontent',nocontent)
Vue.component('uniNavBar',uniNavBar)

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
