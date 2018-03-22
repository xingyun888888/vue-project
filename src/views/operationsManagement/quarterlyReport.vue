<template>
  <div class="container-body">
    <h1>备份系统季报</h1>
    <div class="box-div">
      <div>
        <span>产品名称:</span>
        <el-input v-model="code" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div class="block" style="margin-left:42px;">
        <span class="demonstration">年</span>
        <el-date-picker
          v-model="year"
          align="right"
          type="year"
          placeholder="选择年"
          style="width:150px;"
        >
        </el-date-picker>
      </div>
      <div style="margin-left:15px;">
        <span>季度:</span>
        <el-select v-model="whether" placeholder="请选择" clearable style="width:100px;">
          <el-option label="--全部--" value="1"></el-option>
          <el-option label="1" value="2"></el-option>
          <el-option label="2" value="3"></el-option>
          <el-option label="3" value="4"></el-option>
          <el-option label="4" value="5"></el-option>
        </el-select>
      </div>
      <div style="margin-left:20px;">
        <el-button type="primary" @click="exportBtn">查询</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData2" border style="width: 100%">
        <el-table-column prop="serialNumber" label="产品代码" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="productCode" label="产品名称" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="productName" label="产品状态" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="custodianName" label="年度" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="productState" label="季度" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="type" label="文件名称" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="productSource" label="操作" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
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
  export default {
    name: 'cachePage',
    data() {
      return {
        code:'',
        year:'',
        whether:'',
        tableData2:[],
        showOverflowTooltip:true,
        pageNum: 1,
        pages: 2,
        pageSize: 15,
        total: 0,
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

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../style/layout.scss";
@import "../../style/operationsManagement.scss";
</style>
