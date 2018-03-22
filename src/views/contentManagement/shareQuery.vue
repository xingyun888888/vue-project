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
      <div style="margin-left:15px;">
      <span>证件号码:</span>
      <el-input v-model="creditNo" placeholder="请输入内容" style="width:120px;"></el-input>
      </div>
      <div style="margin-left:15px;">
      <span>基金帐号:</span>
      <el-input v-model="account" placeholder="请输入内容" style="width:120px;"></el-input>
      </div>
      <div style="margin-top:20px;display:block;">
        <el-button type="primary" @click="queryBtn">查询</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="d0" label="序号" width="80" show-overflow-tooltip></el-table-column>
        <el-table-column prop="code" label="产品代码" show-overflow-tooltip></el-table-column>
        <el-table-column prop="productName" label="产品名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="userName" label="客户名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="account" label="基金帐号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="creditNo" label="证件号码" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="transactionaccountid" label="交易帐号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="retailer" label="销售商" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="available" label="可用份额" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="balance" label="份额余额" width="120" show-overflow-tooltip></el-table-column>
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
        productName:'',
        name:'',
        startDate:'',
        endDate:'',
        pageNum: 1,
        code:'',
        pages: 2,
        pageSize: 15,
        total: 0,
        tableData: [],
        num:'',
        idNumber:'',
        fundAccounts:'',
        retailer:'管理人直销',
        creditNo:'' ,
        account:''
      }
    },
    methods: {
      queryBtn(){
         this.requestTable();
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
          pageNo: this.pageNum,
          pageSize: this.pageSize,
          code:this.code,
          name:this.name,
          creditNo:this.creditNo,
          account:this.account,
        }
        this.$ajax({
          method: 'POST',
          url:'share/listData',
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
            code:data[i].code,
            productName:data[i].productName,
            userName:data[i].userName,
            account:data[i].account,
            creditNo:data[i].creditNo,
            transactionaccountid:data[i].transactionaccountid,
            retailer:this.retailer,
            available:data[i].available,
            balance:data[i].balance
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
