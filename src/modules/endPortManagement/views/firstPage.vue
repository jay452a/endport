<template>
  <section class="end-container">
    <h3 class="end-system-title">终端管理中心基础能力</h3>
    <endSearch class="search" v-model="searchData"></endSearch>
    <div class="firstPage">
      <h6 class="end-blueTitle">服务说明</h6>
      <hr class="end-h6hr"/>
      <p>1、平台是运营者通过公众号为微信用户提供资讯和服务的平台，而公众平台开发接口则是提供服务的基础，开发者在公众平台网站中创建公众号、获取接口权限后，可以通过阅读本接口文档来帮助开发。为了识别用户，每个用户针对每个公众号会产生一个安全的OpenID，如果需要在多公众号、移动应用之间做用户共通，则需前往微信开放平台，将这些公众号和应用绑定到一个开放平台账号下，绑定后，一个用户虽然对多个公众号和应用有多个不同的 ，但他对  </p>
      <p>2、提供APP原生、手机硬件、微信、钉钉等基础能力调用服务。</p>
      <p>3、微信公众平台开发是指为微信公众号进行业务开发，为移动应用、PC端网站、公众号第三方平台（为各行各业公众号运营者提供服务）的开发，请前往微信开放平台接入。</p>
      <h6 class="end-blueTitle">更新记录</h6>
      <hr class="end-h6hr"/>
      <div class="updateRecord" v-for="item in updateRecord">
        <p><span>{{item.updateTime}}</span><span>{{item.type}}</span><span>{{item.operate}}</span></p>
        <p>{{item.content}}</p>
      </div>
    </div>
  </section>
</template>
<script>
  import endSearch from '../components/search.vue'
  export default{
    data () {
      return {
        updateRecord: [
          {updateTime: 2017, type: 'AR', operate: '新增', content: '微信公众平台开发是指为微信公众号进行业务开发'},
          {updateTime: 2017, type: 'AR', operate: '新增', content: '微信公众平台开发是指为微信公众号进行业务开发'},
          {updateTime: 2017, type: 'AR', operate: '新增', content: '微信公众平台开发是指为微信公众号进行业务开发'}
        ],
        searchData: ''
      }
    },
    components: {
      endSearch
    },
    watch: {
      searchData (value) {
        console.log(value)
        // 搜索与服务端联调
      }
    },
    created () {
    }
  }
</script>
<style lang="scss" scoped>
  .firstPage{
    background: white;
    min-height: 100%;
    padding: 30px;
  }
  .firstPage > p{
    color: #626262;
    margin:15px 0;
  }
  .firstPage>h6{
    margin-top: 40px;
  }
  h3{
    font-size: 16px;
    font-weight: 100;
    color: #626262;
    padding-left: 20px ;
  }
  .end-system-title{
    display: inline-block;
    margin-bottom: 15px;
  }
  .updateRecord>p{
    margin-top: 30px;
    padding-left: 14px;
    span{
      margin-right: 40px;
    }
  }
  .search{
    float: right;
    margin-right: 30px;
  }
</style>

