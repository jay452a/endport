<template>
  <header class="header-default">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <div class="navbar-brand">
            <img class="navbar-logo" src="~@/assets/images/logo.png" alt="">
            <span class="navbar-tit">终端管理中心开放服务<span class="rt">Beta</span></span>
          </div>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  @import  '../style/public.scss';
  .header-default {
    width: 100%;
    text-align: center;
    min-height: 62px;
    padding: 5px 0;
    background-color: $blue;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
    position: relative;
    z-index: 2;
    min-width: 1200px;
  }
  .navbar-brand {
    float: left;
    padding: 15px;
    padding-bottom: 0;
    font-size: 18px;
    height: 45px;
    line-height: 30px;
    color: #777;
    .navbar-logo {
      height: 45px;
      vertical-align: middle;
      margin-top: -15px;
    }
    .navbar-tit {
      padding-left: 10px;
      margin-left: 10px;
      //border-left: 1px solid #ccc;
      display: inline-block;
      max-width: 500px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
      color:$white;
      position: relative;
      .rt{
        position: relative;
        top:-12px;
        font-size: 12px;
        color:white;
       }
    }
  }

  .headnav-btn {
    line-height: 30px;
    text-align: right;
    padding-right: 20px;
  }

  .headnav-btn ul {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: white;
    text-align: center;
    width: 120px;
    display: inline-block;
  }

  .headnav-btn ul li:hover {
    background: #eaeefb;
    cursor: pointer;
  }

  .headnav-btn > p.username:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
