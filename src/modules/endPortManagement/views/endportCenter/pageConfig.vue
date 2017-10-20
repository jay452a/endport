<template>
  <section class="end-container">
    <NavBar></NavBar>
    <div class="content">
        <h3 class="end-title">模块配置</h3>
        <div class="main">
        <div class="banner">
          <!--<el-carousel trigger="click" height="450px"style="width: 250px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>-->
        </div>
          <!--右侧-->
        <div class="tableBox">
          <el-button type="primary" class="addBanner" @click="moduleVisible = true"><i class="el-icon-plus"></i>添加模块</el-button>
          <el-table :data="bannerData" border width="100%">
            <el-table-column type="index" label="排序" width="80">
            </el-table-column>
            <el-table-column prop="name" label="模块名字" width="180">
            </el-table-column>
            <el-table-column prop="title" label="模块内业务" width="350">
            </el-table-column>
            <el-table-column  label="操作">
              <template scope="scope">
                <el-button type="text" @click="edit(scope.row.id)">编辑</el-button>
                <el-button type="text" @click="notAllowd(scope.row.id)">禁用</el-button>
                <el-button type="text" @click="del(scope.row.id,scope.$index)">删除</el-button>
                <el-button type="text" @click="moveUp(scope)" v-if="scope.$index > 0">上移</el-button>
                <el-button type="text" v-if="scope.$index < bannerData.length -1"@click="moveDown(scope)">下移</el-button>
              </template>
            </el-table-column>
          </el-table>
          <bannerEdit
            class="bannerEdit" v-if="editBannerVisible"
            @cancel="editBannerVisible=false">
          </bannerEdit>
          <workIcon v-if="workIconVisible"@cancel="workIconVisible=false"></workIcon>
          <selfModule v-if="selfModuleVisible"@cancel="selfModuleVisible=false"></selfModule>
          </div>
          <!--右侧-->
          <div style="clear: both"></div>
      </div>
    </div>

    <!--弹出框-->
    <el-dialog title="请选择添加的模板类型" :visible.sync="moduleVisible" size="tiny">
      <div class="modalContent">
        <el-radio class="radio" v-model="moduletype" label="1">轮播图</el-radio><br/>
        <el-radio class="radio" v-model="moduletype" label="2">业务图标</el-radio><br/>
        <el-radio class="radio" v-model="moduletype" label="3">自定义模块</el-radio>
      </div>
      <div style="text-align: center;margin-top: 25px">
        <el-button @click="moduleVisible = false">取消</el-button>
        <el-button type="primary" @click="saveModuleType">保存</el-button>
      </div>

    </el-dialog>
  </section>
</template>
<style lang="scss" scoped>
  $borderColor:rgba(220,220,200,0.4);
  .content{
    margin-top: 15px;
    border:1px solid $borderColor;
  }
  .main{
    padding: 15px;
  }
  .banner{
    float: left;
    width: 220px;
    height:450px;
    background: url('~@/assets/images/app.png') no-repeat;
    background-size: auto 100%;
    background-position: center;
  }
  .modalContent{
    width: 70%;
    margin: auto;
    label{
      margin: 10px 0;
    }
  }
  .tableBox{
    float: left;
    margin-left: 15px;
    width: calc(100% - 235px);
  }
  .end-title{
    border-bottom: 1px solid $borderColor;
  }
  .addBanner{
    float: right;
    margin-bottom: 15px;
    display: block;
    i{margin-right: 4px}
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
  import NavBar from '@/components/navBar'
  import end from '@/common/js/utils.js'
  import bannerEdit from '../../components/bannerEdit.vue'
  import workIcon from '../../components/workIcon.vue'
  import selfModule from '../../components/selfModule.vue'
  import { getWorkBenchData } from '@/api/api'
  export default{
    data () {
      return {
        bannerData: [
          {name: '轮播图', title: '无', url: 'http:www.baidu.com', id: 11},
          {name: '业务图标', title: '考试 公告 考勤 OA等', url: 'http:www.baidu.com2', id: 121},
          {name: '自定义模块', title: '', url: 'http:www.baidu.com3', id: 14},
          {name: '自定义模块', title: '投票', url: 'http:www.baidu.com4', id: 115},
          {name: '自定义模块', title: '会议', url: 'http:www.baidu.com5', id: 111}
        ],
        cutNumber: [
          {showName: true},
          {showName: false}
        ],
        moduleVisible: false,
        moduletype: '1',
        editBannerVisible: false,
        workIconVisible: false,
        selfModuleVisible: false
      }
    },
    methods: {
      moveUp (scope) {
        end.arrSplice(this.bannerData, scope.$index, scope.$index - 1)
      },
      moveDown (scope) {
        end.arrSplice(this.bannerData, scope.$index, scope.$index + 1)
      },
      del (id, index) {
        console.log(id, index)
        this.$confirm('确认删除？')
          .then(res => {
            this.bannerData.splice(index, 1)
          })
          .catch();
      },
      edit () {
      },
      notAllowd () {},
      saveModuleType () {
        this.moduleVisible = false
        console.log(this.moduletype)
        if (this.moduletype === '1') {
          this.editBannerVisible = true
          this.workIconVisible = false
          this.selfModuleVisible = false
        } else if (this.moduletype === '2') {
          this.editBannerVisible = false
          this.workIconVisible = true
          this.selfModuleVisible = false
        } else {
          this.editBannerVisible = false
          this.workIconVisible = false
          this.selfModuleVisible = true
        }
      }
    },
    created () {
      getWorkBenchData().then(res => {
        console.log(res, '222')
      }, errMsg => {
        this.$message.warning(errMsg)
      })
    },
    components: {
      NavBar,
      bannerEdit,
      workIcon,
      selfModule
    }
  }
</script>
