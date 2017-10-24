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
          <el-button type="primary" class="addBanner" @click="addModule"><i class="el-icon-plus"></i>添加模块</el-button>
          <el-table :data="bannerData" border width="100%">
            <el-table-column type="index" label="排序" width="80">
            </el-table-column>
            <el-table-column prop="name" label="模块名字" width="180">
            </el-table-column>
            <el-table-column prop="title" label="模块内业务" width="350">
            </el-table-column>
            <el-table-column  label="操作">
              <template scope="scope">
                <el-button type="text" @click="edit(scope.row.moduletype, scope)">编辑</el-button>
                <el-button type="text" @click="notAllowd(scope.row.id)">禁用</el-button>
                <el-button type="text" @click="del(scope.$index)">删除</el-button>
                <el-button type="text" @click="moveUp(scope)" v-if="scope.$index > 0">上移</el-button>
                <el-button type="text" v-if="scope.$index < bannerData.length -1"@click="moveDown(scope)">下移</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" @click="savePage" style="margin: 15px auto;display: block">保存</el-button>
          <bannerEdit
            class="bannerEdit" v-if="editBannerVisible"
            :data="bannerList"
            :isAdd="bannerIsAdd"
            @submit="saveBannerData"
            @cancel="editBannerVisible=false">
          </bannerEdit>
          <workIcon
            v-if="workIconVisible"
            @cancel="workIconVisible=false"
            :isAdd="workIconIsAdd"
            @submit="saveWorkIconData"
            :data="workIconData"></workIcon>
          <selfModule
            v-if="selfModuleVisible"
            :data="selfModuleData"
            @submit="saveSelfModuleData"
            @cancel="selfModuleVisible=false"></selfModule>
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
  import { getWorkBenchData, saveData } from '@/api/api'
  export default{
    data () {
      return {
        bannerData: [
        ],
        cutNumber: [
          {showName: true},
          {showName: false}
        ],
        moduleVisible: false,
        moduletype: '1',
        editBannerVisible: false,
        workIconVisible: false,
        selfModuleVisible: false,
        allData: [],
        workIconData: []
      }
    },
    methods: {
      moveUp (scope) {
        this.bannerData[scope.$index].layer--
        this.bannerData[scope.$index - 1].layer++
        end.arrSplice(this.bannerData, scope.$index, scope.$index - 1)
      },
      moveDown (scope) {
        this.bannerData[scope.$index].layer++
        this.bannerData[scope.$index + 1].layer--
        end.arrSplice(this.bannerData, scope.$index, scope.$index + 1)
      },
      del (index) {
        this.$confirm('确认删除？')
          .then(res => {
            let layer = this.bannerData[index].layer
            console.log(layer)
            this.bannerData.splice(index, 1)
            this.bannerData.map(res => {
              if (res.layer > layer) {
                res.layer --
              }
            })
          })
          .catch();
      },
      edit (moduletype, scope) {
        this.editBannerVisible = false
        this.workIconVisible = false
        this.selfModuleVisible = false
        if (moduletype === '1') {
          this.editBannerVisible = true
          console.log(scope.row)
          this.bannerIsAdd = false
          this.bannerList = scope.row.showList
        } else if (moduletype === '2') {
          this.workIconVisible = true
          this.workIconData = scope.row.showList
          this.workIconIsAdd = true
        } else {
          this.selfModuleVisible = true
          this.selfModuleData = scope.row.showList
        }
      },
      addModule () {
        this.moduleVisible = true
      },
      notAllowd () {},
      saveModuleType () {
        this.moduleVisible = false
        this.editBannerVisible = false
        this.workIconVisible = false
        this.selfModuleVisible = false
        console.log(this.moduletype)
        if (this.moduletype === '1') {
          this.editBannerVisible = true
          this.bannerIsAdd = true
          this.bannerList = []
        } else if (this.moduletype === '2') {
          this.workIconVisible = true
        } else {
          this.selfModuleVisible = true
        }
      },
      yewuEditShow () {},
      selfModuleEditShow () {},
      savePage () {
        this.saveAllData()
      },
      saveAllData () {
        saveData(this.allData).then(() => {
          this.$message.success('保存成功')
          this.editBannerVisible = false
          this.workIconVisible = false
          this.selfModuleVisible = false
          this.getAlldataByspId()
        }, error => {
          this.$message.warning(error)
        })
      },
      saveBannerData (data) {
        console.log(data)
        this.allData.slideShowMdlList.map(res => {
          res.slideShowList = data
        })
        console.log(this.allData)
        this.saveAllData()
      },
      saveSelfModuleData (data) {
        // data do something
        this.saveAllData()
      },
      saveWorkIconData (data) {
        // data do something
        this.allData.groupBizMdlList.map(res => {
          res.optGroupBiz.bizList = data
        })
        this.saveAllData()
      },
      getAlldataByspId () {
        getWorkBenchData().then(res => {
          this.allData = res
          let sliderData = res.slideShowMdlList
          this.bannerData = []
          if (sliderData.length > 0) {
            sliderData.map(res => {
              this.bannerData.push({name: '轮播图', title: '无', showList: [...res.slideShowList], moduletype: '1', layer: res.layer})
            })
          }
          let groupBizMdlList = res.groupBizMdlList // 业务图标数据
          console.log(groupBizMdlList, 223)
          groupBizMdlList.map(res => {
            let titleAssign = ''
            res.optGroupBiz.bizList.map(res2 => {
              titleAssign += res2.name + ' '
            })
            this.bannerData.push({name: '业务图标', title: titleAssign, showList: [...res.optGroupBiz.bizList], moduletype: '2', layer: res.layer})
          })
          let selfDefined = res.optConfigMdlList // 自定义组件数据
          console.log(selfDefined, 224)
          this.bannerData.push({name: '自定义模块', title: '无', showList: [...selfDefined], moduletype: '3', layer: 3})
          this.bannerData.sort(end.arrSort('layer'))
        }, errMsg => {
          this.$message.warning(errMsg)
        })
      }
    },
    created () {
      this.getAlldataByspId()
    },
    components: {
      NavBar,
      bannerEdit,
      workIcon,
      selfModule
    }
  }
</script>
