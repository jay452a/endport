<!--
该组件是业务图标选择组件-->
<template>
    <div>
      <section>
        <h3 class="end-title">业务图标选择</h3>
        <div class="radioBox">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="考试"></el-checkbox>
            <el-checkbox label="考勤"></el-checkbox>
            <el-checkbox label="团建"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="tableBox">
          <el-table :data="workIconData" border width="100%;">
            <el-table-column type="index" label="排序" width="80">
            </el-table-column>
            <el-table-column prop="name" label="业务" width="250">
            </el-table-column>
            <el-table-column prop="img" label="图标" width="350">
            </el-table-column>
            <el-table-column  label="操作">
              <template scope="scope">
                <el-button type="text" @click="del(scope.row.id,scope.$index)">删除</el-button>
                <el-button type="text" @click="moveUp(scope)" v-if="scope.$index > 0">上移</el-button>
                <el-button type="text" v-if="scope.$index < workIconData.length -1"@click="moveDown(scope)">下移</el-button>
              </template>
            </el-table-column>
          </el-table>
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
  export default {
    data () {
      return {
        workIconData: [
        ],
        checkList: []
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      },
      submit () {},
      moveUp (scope) {
        end.arrSplice(this.workIconData, scope.$index, scope.$index - 1)
      },
      moveDown (scope) {
        end.arrSplice(this.workIconData, scope.$index, scope.$index + 1)
      },
      del (id, index) {
        console.log(id, index)
        let arr = []
        this.$confirm('确认删除？')
          .then(res => {
            this.workIconData.splice(index, 1)
            this.workIconData.map(res => {
              arr.push(res.name)
            })
            this.checkList = arr
          })
          .catch();
      }
    },
    watch: {
      checkList (value) {
        let arr = []
        value.map(res => {
          arr.push({name: res})
        })
        this.workIconData = arr
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
    padding: 0px 15px;
  }
</style>

