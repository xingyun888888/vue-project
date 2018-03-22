<template>
  <div class="container-body">
    <h1>备份系统季报</h1>
    <div class="box-div share-query">
      <div>
        <span>产品名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div>
        <span>客户名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div>
        <span>基金帐号:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div style="margin-left:20px;">
        <el-button type="primary" @click="exportBtn">查询</el-button>
        <el-button type="primary" @click="exportBtn">导出</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData3" border style="width: 100%">
        <el-table-column prop="d1" label="序号" width="65" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d2" label="产品代码" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d3" label="产品名称" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d4" label="客户名称" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d5" label="证件号码" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d6" label="基金帐号" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d7" label="业务类型" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d8" label="交易日期" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d9" label="确认日期" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d10" label="份额变动数" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d11" label="发生后余额" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d12" label="确认金额" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d13" label="发生后冻结" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
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
  export default {
    name: 'cachePage',
    data() {
      return {
        code:'',
        tableData3:[],
        showOverflowTooltip:true,
        pageNum: 1,
        pages: 2,
        pageSize: 15,
        total: 0,
        num:'',
      }
    },
    methods: {
      exportBtn(){

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
        }
        this.$ajax({
          method: 'POST',
          url:'http://jjd.cn',
          data:requestData
        }).then(function (response) {
          var res = response.data;
          if (res.code == 200) {
            _this.tableData3 = [];
            _this.renderTable(res.body.list); //渲染表格数据
            _this.setPagination(res.body) //设定分页
          }
        })
      },
      renderTable(data) {
        for (var i = 0; i < data.length; i++) {
          this.num++;
          var tableItem = {
            d1:this.num,
            d2: data[i].d2,
            d3: data[i].d3,
            d4: data[i].d4,
            d5:data[i].d5,
            d6:data[i].d6,
            d7:data[i].d7,
            d8:data[i].d8,
            d9:data[i].d9,
            d10:data[i].d10,
            d11:data[i].d11,
            d12:data[i].d12,
            d13:data[i].d13,
          }
          this.tableData3.push(tableItem);
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
  @import "../../style/operationsManagement.scss";
</style>
