<!--该组件为banner编辑组件-->
<template>
  <div>
    <section>
      <h3 class="end-title">轮播图编辑</h3>
      <div class="onePic" v-for="(item, index) in bannerData">
        <article>
          <label for="pic">图片：</label>
          <input id="pic" type="text" readonly class="end-input" v-model="item.imgUrl"/>
          <button class="end-button-primary">图片</button>
          <div class="imgbox"></div>
        </article>
        <article>
          <label for="text">文字：</label>
          <input id="text" type="text"  class="end-input" v-model="item.word"/>
        </article>
        <article>
          <label for="link">链接：</label>
          <input id="link" type="text"  class="end-input" v-model="item.link"/>
        </article>
        <div class="operation">
          <button class="end-button-primary-backwhite" @click="del(index)">删除</button>
          <button class="end-button-primary-backwhite" @click="moveUp(index)" v-if="index > 0">上移</button>
          <button class="end-button-primary-backwhite" @click="moveDown(index)" v-if="index < bannerData.length -1">下移</button>
        </div>
      </div>
      <div style="text-align: right">
        <button class="end-button-primary addOnePic" @click="addOne">添加</button>
      </div>

    </section>
    <div class="btnBox">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary"@click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
  import end from '@/common/js/utils'
  export default{
    data () {
      return {
        bannerData: [
        ]
      }
    },
    methods: {
      addOne () {
        this.bannerData.push({imgUrl: '', word: '', link: ''})
      },
      del (index) {
        console.log(index)
        this.$confirm('确认删除？')
          .then(res => {
            this.bannerData.splice(index, 1)
          })
          .catch();
      },
      moveUp (index) {
        end.arrSplice(this.bannerData, index, index - 1)
      },
      moveDown (index) {
        end.arrSplice(this.bannerData, index, index + 1)
      },
      cancel () {
        this.$emit('cancel')
      },
      submit () {
        this.$emit('submit')
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
  .btnBox{
    text-align: center;
    margin-top: 15px;
  }
  .end-title{
    border-bottom:1px solid $borderColor;
  }
  .onePic{
    border-bottom: 1px dashed $borderColor;
    width: 90%;
    margin: auto;
    padding-bottom: 15px;
  }
  article{
    margin-top: 15px;
    input{
      width: 350px;
    }
    button{
      margin-left: -5px;
    }
    .imgbox{
      width: 250px;
      height:150px;
      border:1px solid $borderColor;
      margin-top: 15px;
      margin-left: 47px;
    }
  }
  .operation{
    text-align: right;
    margin-top: 15px;
    margin-right: 15px;
    button{
      margin-right: 5px;
    }
  }
  .addOnePic{
    margin-right: 20px;
    margin-top: 15px;
  }
</style>
