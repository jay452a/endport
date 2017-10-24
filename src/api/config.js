/**
 * Created by lenovo on 2017/10/16.
 */
export default process.env.NODE_ENV === 'development' ? {
  // 开发环境
  host: '/api' // 使用代理
} : {
  // 发布环境
  host: 'http://10.0.0.197:9006' // 上海
}
