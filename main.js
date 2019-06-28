import Vue from 'vue'
import App from './App'
import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
import Bmob from '@/utils/bmob.js';

Bmob.initialize("afaa8342776ad99ff0d49bca224de9b2", "9eed865dc5914f2ecedcd63be31e33e9","47f76baf4ee4d90630d7b2bc17f7505c");
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
export default {
    components: {
        faIcon
    }
}
app.$mount()
