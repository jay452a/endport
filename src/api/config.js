/**
 * Created by lenovo on 2017/10/16.
 */
export default process.env.NODE_ENV === 'development' ? {
  // 开发环境
  host: '/api' // 使用代理
} : {
  // 发布环境
  host: 'http://ember-ota.test61.ums86.com' // 上海
}
