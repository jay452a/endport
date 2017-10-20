/**
 * Created by lenovo on 2017/9/19.
 */
export default {
  increment (state, isLoading) {
    state.isLoading = isLoading
  },
  count (state, count) {
    state.count++
  }
}
