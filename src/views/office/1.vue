<template>
  <div class="container-body">
    <h1>在线办公1</h1>
    <el-select v-model="value6" placeholder="请选择" clearable reserve-keyword filterable style="margin-bottom:50px;" @change="queryKeyword()">
        <div style="position: fixed; position: fixed;width: 447px;background: #fff;z-index: 100;height: 36px;">
          <p style="margin:0;display:inline-block;margin-left:20px;color:#333;">产品名称</p>
          <p style="margin:0;display:inline-block;float:right;margin-right:20px;color:#333;">产品代码</p>
        </div>
      <el-option
        style="width:447px;height:35px;"
        v-for="item in cities2"
        :label="item.label"
        :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-select>
  </div>
</template>

<script>
  import data from '../../mock/mock.js';
  export default {
    name: 'cachePage',
    data() {
      return {
        cities2:[],
        pageNum: 1,
        pages: 2,
        pageSize: 15,
        total: 0,
        value6: '',
        currentPage3: 5,
      }
    },
    methods: {
      queryKeyword(){
          console.log(this.value6)
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.requestSelect();
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.value6 = '';
        this.requestSelect();
      },
      requestSelect(){
        var _this = this;
        var requestData = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
        this.$ajax({
          method: 'POST',
          url:'http://jjy.cn',
          data:requestData
        }).then(function (response) {
          var res = response.data;
          if (res.code == 200) {
            _this.cities2 = [];
            _this.renderTable(res.body.list); //渲染表格数据
            _this.setPagination(res.body) //设定分页
          }
        })
      },
      renderTable(data) {
        for (var i = 0; i < data.length; i++) {
          var tableItem = {
            label: data[i].cityName,
            value: data[i].province,

          }
          this.cities2.push(tableItem);
        }
      },
      setPagination(data) {
        this.pages = data.pages;
        this.pageSize = data.pageSize;
        this.total = data.total;
      },
    },
    created: function () {
      this.requestSelect();
    },
    mounted() {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/layout.scss";
  /*@import "../../style/lnstitutional";*/
</style>
