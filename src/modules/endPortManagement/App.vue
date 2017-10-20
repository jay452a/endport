<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <Slide class="slider"></Slide>
    <router-view class="right"></router-view>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from '@/components/header'
import Slide from '@/components/slider'
import FooterApp from '@/components/footer'
export default {
  name: 'app',
  components: {
    HeaderApp,
    Slide,
    FooterApp
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family:微软雅黑, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1200px;
}
.slider{
  width: 210px;
  display: inline-block;
  float: left;
}
.right{
  display: block;
  margin-left: 210px;
}
</style>
