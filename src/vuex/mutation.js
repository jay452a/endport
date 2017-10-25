/**
 * Created by lenovo on 2017/9/19.
 */
export default {
  MT_WORKINCONDATA (state, data) {
    state.workIconType = data
  },
  MT_ENDDICT (state, data) {
    state.endDictGroupData = data
  },
  MT_SELFMODULRDICT (state, data) {
    state.endSelfModuleData = data
  },
  count (state, count) {
    state.count++
  }
}
