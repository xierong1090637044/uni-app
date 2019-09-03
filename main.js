import Vue from 'vue'
import VueI18n from 'vue-i18n' 
import App from './App'
import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"

Vue.config.productionTip = false
App.mpType = 'app'

Bmob.initialize("afaa8342776ad99ff0d49bca224de9b2", "9eed865dc5914f2ecedcd63be31e33e9","47f76baf4ee4d90630d7b2bc17f7505c");
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
Vue.component('faIcon',faIcon)

const app = new Vue({
	i18n, 
    ...App
})
export default {
    components: {
        faIcon
    }
}
app.$mount()
