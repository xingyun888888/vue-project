<template>
  <div class="container-body">
    <div class="box-div">
      <div>
        <span>产品名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div style="margin-left:15px;">
        <span>日期类型:</span>
        <el-select v-model="whether" placeholder="请选择" clearable style="width:100px;" @change="selectType">
          <el-option label="年度" value="1"></el-option>
          <el-option label="季度" value="2"></el-option>
          <el-option label="月份" value="3"></el-option>
        </el-select>
      </div>
      <div class="block" style="margin-left:42px;" v-if="yearToggle">
        <span class="demonstration">年份:</span>
        <el-date-picker
          v-model="year"
          align="right"
          type="year"
          placeholder="选择年"
          style="width:150px;"
        >
        </el-date-picker>
      </div>
      <div class="block" style="margin-left:42px;" v-if="quarterToggle">
        <span class="demonstration">季度:</span>
        <el-date-picker
          v-model="quarter"
          align="right"
          type="year"
          placeholder="选择年"
          style="width:150px;"
        >
        </el-date-picker>
        <div style="margin-left:15px;">
          <el-select v-model="selectQuarter" placeholder="请选择" clearable style="width:130px;">
            <el-option label="第一季度" value="1"></el-option>
            <el-option label="第二季度" value="2"></el-option>
            <el-option label="第三季度" value="3"></el-option>
            <el-option label="第四季度" value="4"></el-option>
          </el-select>
        </div>
      </div>
      <div class="block" style="margin-left:42px;" v-if="monthToggle">
        <span class="demonstration">月份:</span>
        <el-date-picker
          v-model="month"
          align="right"
          type="month"
          placeholder="选择月"
          style="width:150px;"
        >
        </el-date-picker>
      </div>
      <div style="margin-left:20px;">
        <el-button type="primary" @click="exportBtn">预览</el-button>
      </div>
    </div>
    <div class="table">
      <div class="heading" style="margin-bottom:10px;">
        <h1>所有者权益报表</h1>
      </div>
      <el-table :data="tableData2" border class="tableCall">
        <el-table-column prop="" label="项目" :show-overflow-tooltip="showOverflowTooltip">
          <el-table-column class="weird" prop="project" label="泰发廊坊北环道改造项目二期私募基金" width="450" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        </el-table-column>
        <el-table-column prop="item" label="本期金额" :show-overflow-tooltip="showOverflowTooltip">
          <el-table-column prop="" label="实收基金" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="" label="未分配利润" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="" label="所有者权益" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        </el-table-column>
        <el-table-column prop="" label="上期金额" :show-overflow-tooltip="showOverflowTooltip">
          <el-table-column prop="" label="实收基金" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="" label="未分配利润" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="" label="所有者权益" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cachePage',
    data() {
      return {
        code:'',
        whether:'',
        year:'',
        quarter:'',
        month:'',
        selectQuarter:'',
        showOverflowTooltip:true,
        quarterToggle:false, //季度开关
        yearToggle:true,   //年份开关
        monthToggle:false, //月份开关
        tableData2:[{project:'一、期初所有者权益（基金净值）'},{project:'二、本期经营活动产生的基金净值变动数（本期净利润）'},{project:'三、本期基金份额交易产生的基金净值变动数（减少以"－"号填列）'},
          {project:'其中: 1.基金申购款'},{project:' 2.基金赎回款'},{project:'四、本期向基金份额持有人分配利润产生的基金净值变动数'},{project:'五、期末所有者权益（基金净值）'}],
      }
    },
    methods: {
      exportBtn(){

      },
      selectType(){
        if(this.whether==1){
          this.year = "";
          this.quarterToggle = false;
          this.monthToggle = false;
          this.yearToggle = true;
        }else if(this.whether==2){
          this.quarter = "";
          this.selectQuarter = "";
          this.quarterToggle = true;
          this.monthToggle = false;
          this.yearToggle = false;
        }else if(this.whether == 3){
          this.month = "";
          this.monthToggle = true;
          this.quarterToggle = false;
          this.yearToggle = false;
        }
      }
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
