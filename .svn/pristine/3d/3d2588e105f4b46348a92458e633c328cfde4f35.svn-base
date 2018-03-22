<template>
  <div class="container-body">
    <h1>月报表</h1>
    <div class="box-div">
      <div>
        <span>产品名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div class="block" style="margin-left:42px;">
        <span class="demonstration">月份</span>
        <el-date-picker
          v-model="monthly"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
      <div style="margin-left:20px;">
        <el-button type="success" @click="exportBtn">导出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cachePage',
    data() {
      return {
        code:'',
        monthly:''
      }
    },
    methods: {
      exportBtn(){

      },
    },
    created: function () {
    },
    mounted() {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/layout.scss";
  @import "../../style/operationsManagement.scss";
</style>
