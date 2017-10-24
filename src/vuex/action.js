/**
 * Created by lenovo on 2017/9/19.
 */
export default {
  saveWorkIconData ({commit}, type) {
    commit('MT_WORKINCONDATA', type)
  },
  changeCount ({commit}) {
    setTimeout(() => {
      commit('count')
    }, 1000)
  }
}
