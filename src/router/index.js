import Vue from 'vue'
import Router from 'vue-router'
// import styleConfig from 'endportView/endportCenter/styleConfig'
const styleConfig = () => import('endportView/endportCenter/styleConfig')
import pageConfig from 'endportView/endportCenter/pageConfig'
// import firstPage from 'endportView/firstPage'
const firstPage = () => import('endportView/firstPage')
import positionServer from 'endportView/appOpenServer/positionServer'
import demo from 'endportView/learnDemo'
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
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '*',
      redirect: '/firstPage'
    }
  ]
})
