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
    isLoading: false,
    articles: [],
    dict: [], // 数据字典
    roles: [], // 角色信息
    getDS: false,
    count: 0
  },
  mutations,
  actions,
  getters
})

export default testVuex
