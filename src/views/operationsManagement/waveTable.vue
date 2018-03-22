<template>
  <div class="container-body">
    <div class="box-div">
      <div>
        <span>产品名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div style="margin-left:15px;">
        <span>净值日期:</span>
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="请选择时间"
          style='width:150px'
        >
        </el-date-picker>
      </div>
      <div>
        <span>-</span>
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="请选择时间"
          style="width:150px"
        >
        </el-date-picker>
      </div>
      <div style="margin-left:15px;">
        <span>节假日查询:</span>
        <el-select v-model="businessType" placeholder="请选择" clearable style="width:100px;">
          <el-option label="是" value="20"></el-option>
          <el-option label="否" value="22"></el-option>
        </el-select>
      </div>
      <div style="margin-top:20px;">
        <el-button type="primary" @click="queryBtn">查询</el-button>
      </div>
    </div>
    <el-table :data="tableData3" style="width: 100%" class="waveTavle">
      <el-table-column prop="d1" label="产品名称" show-overflow-tooltip></el-table-column>
      <el-table-column prop="d2" label="日期" class="class-date" show-overflow-tooltip></el-table-column>
      <el-table-column label="上一日净值">
        <el-table-column prop="d3" label="资产净值" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d4" label="资产份额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d5" label="单位净值" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d6" label="累计单位净值" ></el-table-column>
      </el-table-column>
      <el-table-column label="本日净值">
        <el-table-column prop="d7" label="资产净值" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d8" label="资产份额" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d9" label="单位净值" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d10" label="累计单位净值" show-overflow-tooltip></el-table-column>
      </el-table-column>
      <el-table-column prop="d11" label="净值波动率（%）" width="150" show-overflow-tooltip></el-table-column>
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
</template>

<script>
  import data from '../../mock/mock.js';
  export default {
    name: 'cachePage',
    data() {
      return {
        code:'',
        startDate:'',
        endDate:'',
        businessType:'',
        pageNum: 1,
        pages: 2,
        pageSize: 10,
        total: 0,
        tableData3: []
      }
    },
    methods: {
      queryBtn(){

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
          url:'http://jjs.cn',
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
            d1:data[i].d1,
            d2: data[i].d2,
            d3: data[i].d3,
            d4: data[i].d4,
            d5:data[i].d5,
            d6:data[i].d6,
            d7:data[i].d7,
            d8:data[i].d8,
            d9:data[i].d9,
            d10:data[i].d10,
            d11:data[i].d11
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
