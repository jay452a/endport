<!--
自定义模板-->
<template>
  <div>
    <section>
      <h3 class="end-title">自定义模板</h3>
      <!--<div class="radioBox">
        <el-radio-group v-model="radio">
          <el-radio :label="3">新闻</el-radio>
          <el-radio :label="6">公告</el-radio>
          <el-radio :label="9">图展</el-radio>
        </el-radio-group>
      </div>-->
      <ul class="tableBox">
        <li v-for="item in selfModuleData">
          <article>
            <p>{{item.optConfig.name}}</p>
            <div class="tableContent">
              <iframe :src="item.optConfig.url" width="100%"></iframe>
            </div>
          </article>
          <el-radio class="radio" v-model="radio2" :label="item.optConfig.id">{{item.optConfig.name}}</el-radio>
        </li>
        <!--<li>
          <article>
            <p>公告</p>
            <div class="tableContent">
              <div class="left"></div>
              <div class="right">
                <p>文字标题</p>
                <p>文字标题</p>
              </div>
            </div>
          </article>
          <el-radio class="radio" v-model="radio2" label="2">图文列表</el-radio>
        </li>
        <li>
          <article>
            <p>公告</p>
            <div class="tableContent textBtn">
              <span>文字标题<i class="iconfont icon-dingding"></i></span>
              <span><i class="iconfont icon-dingding"></i>文字标题</span>
              <span>文字标题<i class="iconfont icon-dingding"></i></span>
              <span><i class="iconfont icon-dingding"></i>文字标题</span>
            </div>
          </article>
          <el-radio class="radio" v-model="radio2" label="3">文字按钮</el-radio>
        </li>
        <li>
          <article>
            <p>公告</p>
           <ul class="list-row">
             <li>文字标题文字标题</li>
             <li>文字标题文字标题</li>
             <li>文字标题文字标题</li>
           </ul>
          </article>
          <el-radio class="radio" v-model="radio2" label="4">文字列表</el-radio>
        </li>-->
      </ul>
    </section>
    <div class="btnBox">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary"@click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        // radio: 3,
        radio2: '',
        selfModuleData: this.data
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      },
      submit () {
        this.$emit('submit', this.selfModuleData)
      }
    },
    created () {
      this.selfModuleData.map(res => {
        if (res.optConfig.choose === true) {
          this.radio2 = res.optConfig.id
        }
      })
    },
    watch: {
      radio2 (value) {
        this.selfModuleData.map(res => {
          if (res.optConfig.id === value) {
            res.optConfig.choose = true
          } else {
            res.optConfig.choose = false
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  $borderColor:rgba(220,220,200,0.4);
  section{
    border:1px solid $borderColor;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  .end-title{
    border:none;
    border-bottom:1px solid $borderColor;
  }
  .btnBox{
    text-align: center;
    margin-top: 15px;
  }
  .radioBox{
    margin: 15px 30px;
    label{
      margin-right: 20px;
      span.el-radio__inner{
        margin-right: 5px;
      }
    }
  }
  .tableBox{
    margin-right: -20px;
    padding: 0 20px;
    overflow: hidden;
    &>li{
      width: calc(50% - 20px);
      margin-right: 20px;
      margin-top: 20px;
      float: left;
      box-sizing: border-box;
      text-align: center;
      label{
        margin-top: 10px;
      }
      article{
        border:1px solid $borderColor;
        &>p{padding: 5px;text-align: left;border-bottom: 1px solid $borderColor}
        .list-row>li{
          list-style: initial;
          text-align: left;
          width: 80%;
          margin: 5px auto;

        }
      }
    }
  }
  .tableContent{
    display: flex;
    display: -ms-flexbox;
    iframe{
      width: 100%;
      outline: none;
      border:none;
      overflow: hidden;
    }
    .left{
      width: 35%;
      height: 60px;
      background: url('~@/assets/images/banner.png');
      background-size: auto 100%;
      background-position: center;
      margin: 5px;
    }
    .right{
      width: 65%;
      height: 60px;
      overflow: hidden;
      &>p{
        margin-top: 5px;
        text-align: left;
        span{margin-left: 5px}
      }
      &>p:last-child{
        margin-top: 8px;
      }
    }
  }
  .textBtn{
    flex-wrap: wrap;
  }
  .textBtn span{
    width: 50%;
    box-sizing: border-box;
    border-right: 1px solid $borderColor;
    border-bottom: 1px solid $borderColor;
    padding: 9px;
    &>i{
      font-size: 14px;
      margin: 0 5px 0 5px;
      color: #1c8de0;
    }
    &:nth-child(2n) {
      border-right: none;
    }
    &:last-child{
      border-bottom: none;
    }
    &:nth-last-child(2){
      border-bottom: none;
    }
  }
</style>
