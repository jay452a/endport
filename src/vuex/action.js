/**
 * Created by lenovo on 2017/9/19.
 */
export default {
  changeLoading ({commit}, type) {
    commit('increment', type)
  },
  changeCount ({commit}) {
    setTimeout(() => {
      commit('count')
    }, 1000)
  }
}
