/**
 * Created by lenovo on 2017/9/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation';
import actions from './action';
import getters from './getter';
Vue.use(Vuex)
const testVuex = new Vuex.Store({
  // 应用初始状态
  namespaced: true,
  state: {
    workIconType: [],  // 所有业务图标
    endDictGroupData: '',  // 获取所有业务配置
    endSelfModuleData: ''
  },
  mutations,
  actions,
  getters
})

export default testVuex
