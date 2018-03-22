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
      <div class="heading">
        <h1>损益表</h1>
        <p>中信建投证券外包业务___{{a}}___专用表</p>
        <div class="tableDate">
          <span>日期: {{b}}</span>
        </div>
        <div class="tableMoney">
          <span>单位: {{c}}元</span>
        </div>
      </div>
      <el-table :data="tableData2" border class="tableCall">
        <el-table-column prop="number" label="序号" width="70" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="item" label="项目" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="" label="本期数" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="" label="上年合计数" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cachePage',
    data() {
      return {
        a:'泰发廊坊董常甫项目一期私募基金',
        b:'1991-10-09',
        c:'50000000',
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
        tableData2:[{number:'1',item:'一、收入'},{number:'2',item:'1、利息收入'},{number:'3',item:'其中：存款利息收入'},{number:'4',item:'债券利息收入'},{number:'5',item:'资产支持证券利息收入'}
          ,{number:'6',item:'买入返售证券收入'},{number:'7',item:'2、投资收益'},{number:'8',item:'其中：股票投资收益'},{number:'9',item:'债券投资收益'},{number:'10',item:'基金投资收益'},
          {number:'11',item:'权证投资收益'},{number:'12',item:'资产支持证券投资收益'},{number:'13',item:'衍生工具收益'},{number:'14',item:'股利收益'},{number:'15',item:'个股期权收益'},
          {number:'16',item:'3、公允价值变动收益'},{number:'17',item:'4、其他收入'},{number:'18',item:'二、费用'},{number:'19',item:'1、基金运营外包服务费'},{number:'20',item:'2、管理人报酬'},
          {number:'21',item:'3、托管费'},{number:'22',item:'4、销售服务费'},{number:'23',item:'5、交易费用'},{number:'24',item:'6、利息支出'},
          {number:'25',item:'其中：卖出回购金融资产支出'},{number:'26',item:'7、其他费用'},{number:'27',item:'三、利润总和'}],
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
