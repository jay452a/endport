import Vue from 'vue'
import Router from 'vue-router'
import styleConfig from 'endportView/endportCenter/styleConfig'
import pageConfig from 'endportView/endportCenter/pageConfig'
import firstPage from 'endportView/firstPage'
import positionServer from 'endportView/appOpenServer/positionServer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/styleConfig',
      name: 'styleConfig',
      component: styleConfig
    },
    {
      path: '/pageConfig',
      name: 'pageConfig',
      component: pageConfig
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/positionServer',
      name: 'positionServer',
      component: positionServer
    },
    {
      path: '*',
      redirect: '/firstPage'
    }
  ]
})
