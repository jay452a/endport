<template>
  <div>
    <div class="sidebg"></div>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo el-menu--dev" :router="true">
        <el-menu-item index="firstPage"><i class="iconfont icon-shouye"></i>首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="iconfont icon-diannao"></i>终端中心</template>
          <el-menu-item index="styleConfig">风格配置</el-menu-item>
          <el-menu-item index="pageConfig">页面配置</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="iconfont icon-appxiazai-01"></i>APP开放服务</template>
          <el-menu-item index="positionServer">定位服务</el-menu-item>
          <el-menu-item index="">扫一扫</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="iconfont icon-weixin"></i>微信开放服务</template>
          <el-menu-item index="">1</el-menu-item>
          <el-menu-item index="">2</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="iconfont icon-dingding"></i>钉钉开放服务</template>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="iconfont icon-diannao"></i>其他终端</template>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import { getApiSublist } from '@/api/api.js'
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    components: {},
    computed: {
      activeIndex: function () {
        let activeIndex = this.$route.name
        console.log(activeIndex)
        return activeIndex
      }
    },
    watch: {
    },
    created () {
      let param = {
        start: 0,
        limit: 16,
        apiType: 'BASE'
      }
      getApiSublist(JSON.stringify(param)).then(res => {
        console.log(res)
      }, errMsg => {
        this.$message.warning(errMsg)
      })
    }
  }
</script>
<style lang="scss">
  .iconfont{
    margin-right: 10px;
    font-size: 20px;
    color: #ababab;
  }
  .sidebg{
    position: absolute;
    background-color: #646d78;
    height: 100%;
    width: 210px;
    top:0;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
    overflow: hidden
  }
  .el-menu--dev{
    background-color: #646d78;
    margin-top: 10px;
    .el-menu-item.is-active{
      color: #ffffff;
      background-color: #108EE9;
      .iconfont{
        color: #ffffff;
      }
    }
    .el-menu-item, .el-submenu__title{
      color: #bebebe;
      background-color: #646d78;
    }
    .el-menu li{
      background-color: #d3d9e2;
      color: #898997;
    }
    .el-submenu .el-menu-item:hover,.el-submenu .el-submenu-title:hover,.el-menu-item:hover
    {
      background-color: #108EE9;
      color: #fefefe;
    }
  }
  a{
    color: #bebebe;
  }
  li.el-menu-item{
    font-size: 12px;
  }
  .el-icon-arrow-down:before {
    content: "\E602";
  }
  .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
    -ms-transform: rotate(90deg);
    transform: rotateZ(90deg);}
</style>
