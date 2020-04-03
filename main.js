import Vue from 'vue'
import App from './App'
import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
import loading from "@/components/Loading/index.vue"
import nocontent from "@/components/No_content.vue"
import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
import Bmob from "hydrogen-js-sdk"
// #ifdef H5
import wechat from './utils/wechat'
// #endif


Bmob.initialize("825b954fe97e9186", "109063","47f76baf4ee4d90630d7b2bc17f7505c");

Vue.config.productionTip = false
App.mpType = 'app' 

Vue.prototype.Bmob = Bmob
// #ifdef H5
Vue.prototype.$wechat =wechat;
// #endif

Vue.component('loading',loading)
Vue.component('faIcon',faIcon)
Vue.component('nocontent',nocontent)
Vue.component('uniNavBar',uniNavBar)

const app = new Vue({
	Bmob,
    ...App
})
export default {
    components: {
        faIcon,
				nocontent,
				loading
    }
}
app.$mount()
