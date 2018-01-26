<template>
  <section>
    <p>
      <a href="#/">首页</a>
      <slot name="test"></slot>
      &nbsp>&nbsp<a href="#/">{{pname}}</a>&nbsp>&nbsp{{name}}</p>
     <p>{{data}}</p>
  </section>
</template>
<script>
  export default{
    props: {
      data: {
        type: String,
        default: '测试'
      }
    },
    data () {
      return {
        name: ''
      }
    },
    created () {
      console.log(this.$route.name)
      if (this.$route.name === 'styleConfig') {
        this.pname = '终端中心'
        this.name = '风格配置'
      } else {
        this.pname = '终端中心'
        this.name = '页面配置'
      }
    }
  }
</script>
<style lang="scss" scoped>
  p{font-size: 12px;
    a{
      color: #333333;
      font-size: 12px;
    }
  }
</style>
