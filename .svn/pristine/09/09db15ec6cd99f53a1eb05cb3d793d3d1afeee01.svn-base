<template>
  <div class="container-body">
    <div class="box-div">
      <div>
        <span>管理人名称:</span>
        <el-select v-model="whether" placeholder="请选择" clearable style="width:200px;">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </div>
      <div style="margin-left:15px;">
        <span>姓名/机构名称:</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:150px;"></el-input>
      </div>
      <div style="margin-left:15px;">
        <span>证件号码:</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:150px;"></el-input>
      </div>
      <div style="margin-left:15px;">
        <span>激活状态:</span>
        <el-select v-model="whether" placeholder="请选择" clearable style="width:100px;">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </div>
      <div style="margin-left:10px;">
        <el-button type="primary" @click="">查询</el-button>
      </div>
    </div>
    <div class="table">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="d1" label="客户编号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d2" label="姓名/机构名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d3" label="证件号码" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d4" label="证件类型" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d5" label="管理人" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d6" label="客户类型" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d7" label="基金帐号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d8" label="用户状态" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d9" label="证件扫描"  show-overflow-tooltip></el-table-column>
        <el-table-column prop="d10" label="电子签名约定书" show-overflow-tooltip></el-table-column>
        <el-table-column prop="d11" label="操作" width="120" show-overflow-tooltip>
          <template scope="scope" :data="tableData">
            <el-button type="success" @click="modification(scope.$index,tableData)">编辑</el-button>
          </template>
        </el-table-column>
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
    name: 'hello',
    data() {
      return {
        input:'',
        whether:'',
        pageNum: 1,
        pages: 2,
        pageSize: 10,
        total: 0,
        tableData: [],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
          url:'http://jjo.cn',
          data:requestData
        }).then(function (response) {
          var res = response.data;
          if (res.code == 200) {
            _this.tableData = [];
            _this.renderTable(res.body.list); //渲染表格数据
            _this.setPagination(res.body) //设定分页
          }
        })
      },
      renderTable(data) {
        for (var i = 0; i < data.length; i++) {
          var tableItem = {
            d1:data[i].d1,
            d2:data[i].d2,
            d3:data[i].d3,
            d4:data[i].d4,
            d5:data[i].d5,
            d6:data[i].d6,
            d7:data[i].d7,
            d8:data[i].d8,
            d9:data[i].d9,
            d10:data[i].d10,
            d11:data[i].d11
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
    created() {

    },
    mounted() {
        this.requestTable(); //模拟数据
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  @import "../../style/layout.scss";
  @import "../../style/report.scss";
</style>
