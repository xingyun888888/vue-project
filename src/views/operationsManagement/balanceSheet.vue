<template>
  <div class="container-body">
    <div class="box-div">
      <div>
        <span>产品名称:</span>
        <el-select v-model="code" clearable filterable placeholder="请选择" @change="queryKeyword()">
          <div class="select-title">
            <span>产品名称</span>
            <span style="float:right;">产品代码</span>
          </div>
          <el-option
            style="width:447px;height:35px;"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float:left;">{{item.label}}</span>
            <span style="float:right;margin-right:15px;">{{item.value}}</span>
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
        <h1>资产负债表</h1>
        <p>中信建投证券外包业务___{{a}}___专用表</p>
        <div class="tableDate">
          <span>日期: {{b}}</span>
        </div>
        <div class="tableMoney">
          <span>单位: 元</span>
        </div>
      </div>
      <!--<el-table :data="tableData2" border class="tableCall">-->
        <!--<el-table-column prop="serialNumber" label="资产" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>-->
        <!--<el-table-column prop="ncye" label="期末余额" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>-->
        <!--<el-table-column prop="qmye" label="年初余额" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>-->
        <!--<el-table-column prop="liabilities" label="负债与持有人权益" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>-->
        <!--<el-table-column prop="" label="期末余额" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>-->
        <!--<el-table-column prop="" label="年初余额" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>-->
      <!--</el-table>-->
      <table class="assets" cellspacing="0" border="1" style="clear:both;width:100%;">
        <tr>
          <th>资产</th>
          <th>期末余额</th>
          <th>年初余额</th>
          <th>负债与持有人权益</th>
          <th>期末余额</th>
          <th>年初余额</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
  var querystring = require('querystring');
  export default {
    name: 'cachePage',
    data() {
      return {
        options: [],
        pageNum: 1,
        pages: 2,
        pageSize: 10,
        total: 0,
        a:'泰发廊坊董常甫项目一期私募基金',
        b:'1991-10-09',
        code:'',
        whether:'',
        year:'',
        quarter:'',
        month:'',
        selectQuarter:'',
        startrq:'',
        rq:'',
        showOverflowTooltip:true,
        quarterToggle:false, //季度开关
        yearToggle:true,   //年份开关
        monthToggle:false, //月份开关
        tableData2:[{serialNumber:'资产：',liabilities:'负  债：'},{serialNumber:'银行存款',liabilities:'短期借款'},{serialNumber:'结算备付金',liabilities:'交易性金融负债'},{serialNumber:'存出保证金',liabilities:'衍生金融负债'},{serialNumber:'交易性金融资产',liabilities:'卖出回购金融资产款'}
        ,{serialNumber:' 其中：股票投资',liabilities:'应付证券清算款'},{serialNumber:'债券投资',liabilities:'应付赎回款'},{serialNumber:'基金投资',liabilities:'应付管理人报酬'},{serialNumber:'权证投资',liabilities:'应付托管费'},{serialNumber:'资产支持证券投资',liabilities:'应付基金运营外包服务费'},
          {serialNumber:'衍生金融工具',liabilities:'应付销售服务费'},{serialNumber:'买入返售金融资产',liabilities:'应付交易费用'},{serialNumber:'应收证券清算款',liabilities:'应交税费'},{serialNumber:'应收利息',liabilities:'应付利息'},{serialNumber:'应收股利',liabilities:'应付利润'},
          {serialNumber:'应收申购款',liabilities:'其他负债'},{serialNumber:'其他资产',liabilities:'负债合计'},{liabilities:'所有者权益：'},{liabilities:'实收基金'},
          {liabilities:'未分配利润'},{liabilities:'所有者权益合计'},{serialNumber:'资产合计',liabilities:'负债和所有者权益总计'}],
      }
    },
    methods: {
      queryKeyword(){
         console.log(this.code)
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
      //调用下拉表 分页信息
      requestSelect(){
        var _this = this;
        var requestData = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
        this.$ajax({
          method: 'POST',
          url:'product/listData',
          data:querystring.stringify(requestData),
        }).then(function (response) {
          var res = response.data;
          if (res.statusCode == 0) {
            _this.options = [];
            _this.renderTable(res.body.list); //渲染表格数据
            _this.setPagination(res.body) //设定分页
          }
        })
      },
      renderTable(data) {
        for (var i = 0; i < data.length; i++) {
          var tableItem = {
            label: data[i].name,
            value: data[i].code,
          }
          this.options.push(tableItem)
        }
      },
      setPagination(data) {
        this.pages = data.pages;
        this.pageSize = data.pageSize;
        this.total = data.total;
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
      },
      //预览 按钮
      exportBtn(){
        var _this = this;
        if(this.year!=""){
          this.startrq = this.getDate(this.year).split('-').join('').slice(0,6);
          this.rq = this.startrq.slice(0,4)+'12';
        }else if(this.month!=""){
          this.startrq = this.getDate(this.month).split('-').join('').slice(0,6);
          this.rq = this.startrq;
        }
        console.log(this.startrq)
        console.log(this.rq)
        var requestData = {
          code: this.code,
          startrq: this.startrq,
          rq:this.rq
        }
        this.$ajax({
          method: 'POST',
          url:'fa/assetDebtExp',
          data:querystring.stringify(requestData)
        }).then(function (response) {
          var res = response.data;
          if (res.statusCode == 0) {
            _this.renderTable2(res.body); //渲染表格数据
          }
        })
      },
      renderTable2(data) {
        console.log(data)
        for(var i = 0; i<this.tableData2.length;i++){
          for (var c = 0; c < data[i].length; c++) {
//            var tableItem = {
//              ncye: this.tableData2[i].data[c].ncye,
//              qmye: this.tableData2[i].data[c].qmye,
//            }
//            this.tableData2.push(tableItem)
            this.tableData2[i].data[c].ncye = data[i].data[c].ncye;
            this.tableData2[i].data[c].qmye = data[i].data[c].qmye;
          }
        }
        console.log(this.tableData2)
      },
    },
    created: function () {

    },
    mounted() {
      this.requestSelect();

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/layout.scss";
  @import "../../style/operationsManagement.scss";
</style>
