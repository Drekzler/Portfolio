import Vue from 'vue';
import Vuex from 'vuex';
import InfoStore from './modules/InfoStore'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        InfoStore
    }
})