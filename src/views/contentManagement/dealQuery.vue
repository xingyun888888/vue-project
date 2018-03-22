<template>
  <div class="container-body">
    <div class="box-div">
      <div>
        <span>产品名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:150px;"></el-input>
      </div>
      <div style="margin-left:15px;">
        <span>客户姓名:</span>
        <el-input v-model="name" placeholder="请输入内容" style="width:100px;"></el-input>
      </div>
      <!--<div style="margin-left:15px;">-->
        <!--<span>证件号码:</span>-->
        <!--<el-input v-model="input" placeholder="请输入内容" style="width:120px;"></el-input>-->
      <!--</div>-->
      <!--<div style="margin-left:15px;">-->
        <!--<span>基金帐号:</span>-->
        <!--<el-input v-model="input" placeholder="请输入内容" style="width:120px;"></el-input>-->
      <!--</div>-->
      <div style="margin-left:15px;">
        <span>订单类型:</span>
        <el-select v-model="businessType" placeholder="请选择" clearable style="width:120px;">
          <el-option label="认购" value="20"></el-option>
          <el-option label="申购" value="22"></el-option>
          <el-option label="赎回" value="24"></el-option>
          <el-option label="确认结果" value="30"></el-option>
          <el-option label="强制赎回" value="42"></el-option>
          <el-option label="分红" value="43"></el-option>
        </el-select>
      </div>
      <div style="margin-left:15px;">
          <span>开始时间:</span>
          <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="请选择时间"
            style='width:150px'
          >
          </el-date-picker>
      </div>
      <div style="margin-left:15px;">
        <span>结束时间:</span>
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="请选择时间"
          style="width:150px"
        >
        </el-date-picker>
      </div>
      <div style="margin-top:20px;display:block;">
        <el-button type="primary" @click="queryBtn">查询</el-button>
      </div>
    </div>
    <div class="table">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="d0" label="序号" width="80" show-overflow-tooltip></el-table-column>
        <el-table-column prop="productName" label="产品代码" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d2" label="产品名称" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d3" label="客户名称" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d4" label="证件号码" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="registAcount" label="基金帐号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="applyAmount" label="申请金额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="businessType" label="业务类型" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="coufirmAmount" label="确认金额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="confirmShare" label="确认份额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="confirmDate" label="确认日期" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="instiCode" label="销售商" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="unitNetVal" label="单位净值" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="interset" label="利息金额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d14" label="利息转份额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="printscriptRate" label="手续费用" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="reward" label="业绩报酬" width="120" show-overflow-tooltip></el-table-column>
      </el-table>
      <div class="pagination-block" style="margin-top:20px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10, 15,20]"
          :page-size="pageSize"
          layout="prev, pager, next, jumper, sizes"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>


</template>

<script>
  import data from '../../mock/mock.js';
  var querystring = require('querystring');
  export default {
    name: 'cachePage',
    data() {
      return {
        code:'',
        productName:'',
        name:'',
        businessType:'',
        bDate:'',
        eDate:'',
        pageNum: 1,
        pages: 2,
        pageSize: 15,
        total: 0,
        tableData: [],
        num:'',
        startDate:'',
        endDate:''
      }
    },
    methods: {
      queryBtn(){
        console.log(this.startDate)
        if(this.startDate!=""||this.endDate!=""){
          this.bDate = this.getDate(this.startDate);
          this.eDate = this.getDate(this.endDate);
          this.requestTable();
        }else if(this.startDate==""&&this.endDate==""){
          this.bDate = "";
          this.eDate = "";
          this.requestTable();
        }
        else{
          this.requestTable();
        }
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.requestTable();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.requestTable();
      },
      requestTable(){
        var _this = this;
        var requestData = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          code:this.code,
          businessType:this.businessType,
          bDate:this.bDate,
          eDate:this.eDate,
          name:this.name
        }
        this.$ajax({
          method: 'POST',
          url:'transaction/listData',
          data:querystring.stringify(requestData),
        }).then(function (response) {
          var res = response.data;
          if (res.statusCode == 0) {
            _this.tableData = [];
            _this.renderTable(res.body.list,res.body.total); //渲染表格数据
            _this.setPagination(res.body) //设定分页
          }
        })
      },
      renderTable(data,total) {
        for (var i = 0; i < data.length; i++) {
            this.num++;
          var tableItem = {
            d0:this.num,
            productName:data[i].productName,
            d2:this.num,
            d3:this.num,
            d4:this.num,
            registAcount:data[i].registAcount,
            applyAmount:data[i].applyAmount,
            businessType:data[i].businessType,
            coufirmAmount:data[i].coufirmAmount,
            confirmShare:data[i].confirmShare,
            confirmDate:data[i].confirmDate,
            instiCode:data[i].instiCode,
            unitNetVal:data[i].unitNetVal,
            interset:data[i].interset,
            d14:this.num,
            printscriptRate:data[i].printscriptRate,
            reward:data[i].reward
          }
          this.tableData.push(tableItem);
        }
      },
      setPagination(data) {
        this.pages = data.pages;
        this.pageSize = data.pageSize;
        this.total = data.total;
      },
    },
    created: function () {
    },
    mounted() {
        this.requestTable();
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/layout.scss";
  @import "../../style/audit.scss";
</style>
