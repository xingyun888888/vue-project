<template>
  <div class="container-body">
    <h1>银联号管理</h1>
    <el-tabs v-model="activeName" type="border-card" class="tabs-body">
      <el-tab-pane label="联行号信息列表" style="margin-top:30px;" name="lineNumberList">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="lineNumber" label="联行号" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="headName" label="总行名称" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="provinceName" label="省份名称" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="cityName" label="城市名称" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="lineNumberName" label="联行号名称" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="time" label="修改日期" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column label="操作" align="center"  width="220" :show-overflow-tooltip="showOverflowTooltip">
            <template scope="scope" :data="tableData">
              <el-button type="success" @click="modification(scope.$index,tableData)">修改</el-button>
              <el-button type="danger" @click="handleDelete(scope.$index,tableData)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--模态框-->
        <el-dialog
          :visible.sync="dialogVisible"
          title="银联号修改"
          width="30%">
          <el-form ref="form" :model="modificationFormform" label-width="80px" class="institutions-add">
            <el-form-item label="联行号:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationFormform.lineNumber"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="总行名称:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationFormform.headName"  placeholder="请选择" style='width:270px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="城市名称:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationFormform.cityName" placeholder="请选择" style='width:270px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <div class="comment left-justifying">
              <span>联行地址:</span>
              <textarea  v-model="modificationFormform.site" style=" max-width:calc(100% - 200px);margin-bottom:20px; height:80px;"></textarea>
            </div>
            <div class="comment left-justifying">
              <span>备注:</span>
              <textarea  v-model="modificationFormform.remark" style=" max-width:calc(100% - 200px);margin-bottom:20px; height:80px;"></textarea>
            </div>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">保 存</el-button>
          </span>
        </el-dialog>
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
      </el-tab-pane>
      <!--机构添加-->
      <el-tab-pane label="联行号添加"  name="lineNumberAdd">
        <el-form ref="form" :model="form" :rules="verify" label-width="80px" class="institutions-add">
          <el-form-item label="联行号:" label-width="128px" prop="lineNumber">
            <el-col style="width:380px;">
              <el-input v-model="form.lineNumber"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="总行名称:" label-width="128px">
            <el-select v-model="form.headName"  placeholder="请选择" style='width:270px'>
              <el-option label="区域一" value="1"></el-option>
              <el-option label="区域二" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城市名称:" label-width="128px">
            <el-select v-model="form.cityName" placeholder="请选择" style='width:270px'>
              <el-option label="区域一" value="1"></el-option>
              <el-option label="区域二" value="2"></el-option>
            </el-select>
          </el-form-item>
          <!--<div class="comment">-->
            <!--<span>联行地址:</span>-->
            <!--<textarea  v-model="form.site" style=" max-width:calc(100% - 200px);margin-bottom:20px; height:80px;"></textarea>-->
          <!--</div>-->
          <el-form-item label="联行地址:" label-width="128px" prop="site">
            <el-input type="textarea" v-model="form.site" style="width:35%;"></el-input>
          </el-form-item>
          <el-form-item label="备注:" label-width="128px">
            <el-input type="textarea" v-model="form.remark" style="width:35%;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native="saveBtn('form')">保存</el-button>
            <el-button @click.native="getBack">返回</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import data from '../../../mock/mock.js';
  export default {
    name: 'cachePage',
    data() {
      return {
        checked: true,
        activeName:'lineNumberList',
        showOverflowTooltip:true,
        dialogVisible:false,
        pageNum: 1,
        pages: 2,
        pageSize: 15,
        total: 0,
        tableData:[],
        form:{
          lineNumber:'',
          headName:'',
          cityName:'',
          site:'',
          remark:''
        },
        modificationFormform:{
          lineNumber:'',
          headName:'',
          cityName:'',
          site:'',
          remark:''
        },
        verify:{
          lineNumber:[
            { required: true, message: '请输入联行号', trigger: 'blur' }
          ],
          site:[
            { required: true, message: '请输入联行地址', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      //修改
      modification(){
        this.dialogVisible = true;
      },
      //保存
      confirm(){
        this.dialogVisible = false;
        this.$message({
          message: '保存成功！',
          type: 'success'
        });
      },
      //返回
      getBack(){
        this.activeName = 'lineNumberList';
      },
      //删除row 按钮
      handleDelete(index, row) {
        var _this = this;
        this.$confirm('确认要删除该联行号信息吗？', '提示',{
          cancelButtonText:'取消',
          confirmButtonText:'确认'
        }).then(() => {
          this.$message({
            message: '删除成功！',
            type: 'success'
          });
          row.splice(index, 1);
        }).catch(() => {
        });
      },
      //添加保存
      saveBtn(form){
        var _this = this;
        console.log(_this.form)
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
          url:'http://jjt.cn',
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
            lineNumber: data[i].lineNumber,
            headName: data[i].headName,
            provinceName: data[i].provinceName,
            cityName:data[i].cityName,
            lineNumberName:data[i].lineNumberName,
            time:data[i].time
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
      this.requestTable();
    },
    mounted() {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../style/layout.scss";
  @import "../../../style/lnstitutional";
</style>
