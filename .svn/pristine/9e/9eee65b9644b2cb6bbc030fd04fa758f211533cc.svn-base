<template>
  <div class="container-body">
    <h1>字典管理</h1>
    <el-tabs v-model="activeName" stripe type="border-card" class="tabs-body">
      <el-tab-pane label="字典列表" style="margin-top:30px;" name="dictionariesList">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="value" label="键值" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="label" label="标签" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="type" label="类型" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="description" label="描述" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="sort" label="排序" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column label="操作" align="center" width="350" :show-overflow-tooltip="showOverflowTooltip">
            <template scope="scope">
              <el-button type="info" @click="modification(scope.$index,tableData)">修改</el-button>
              <el-button type="danger" @click="handleDelete(scope.$index, tableData)">删除</el-button>
              <el-button type="success">添加键值对</el-button>
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
        <!--模态框-->
        <el-dialog
          :visible.sync="dialogVisible"
          title="字典修改"
          width="30%">
          <el-form ref="modificationForm" :model="form" label-width="80px" class="institutions-add">
            <el-form-item label="键值:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.value"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="标签:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.label"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="类型:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.type"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="描述:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.description"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="排序:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.sort"></el-input>
              </el-col>
            </el-form-item>
            <div class="comment left-justifying">
              <span>备注:</span>
              <textarea  v-model="modificationForm.remark" style=" max-width:calc(100% - 200px);"></textarea>
            </div>
          </el-form>
           <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm">保 存</el-button>
          </span>
        </el-dialog>
      </el-tab-pane>
      <!--字典添加-->
      <el-tab-pane label="字典添加" name="dictionariesAdd">
        <el-form ref="form" :model="form" :rules="questionnairekk" label-width="80px" class="institutions-add">
          <el-form-item label="键值:" label-width="128px" prop="key">
            <el-col style="width:380px;">
              <el-input v-model="form.key"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="标签:" label-width="128px" prop="label">
            <el-col style="width:380px;">
              <el-input v-model="form.label"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="类型:" label-width="128px" prop="type">
            <el-col style="width:380px;">
              <el-input v-model="form.type"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="描述:" label-width="128px" prop="description">
            <el-col style="width:380px;">
              <el-input v-model="form.description"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="排序:" label-width="128px" prop="sort">
            <el-col style="width:380px;">
              <el-input v-model="form.sort"></el-input>
            </el-col>
          </el-form-item>
          <div class="comment">
            <span>备注:</span>
            <textarea  v-model="form.remark" style=" max-width:calc(100% - 200px);"></textarea>
          </div>
          <el-form-item style="margin-top:30px;">
            <el-button type="primary" @click.native="saveForm('form')">保存</el-button>
            <el-button @click.native="getBack">返回</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import data from '../../../mock/mock.js';
  var querystring = require('querystring');
  export default {
    name: 'cachePage',
    data() {
      return {
        activeName:'dictionariesList',
        showOverflowTooltip:true,
        dialogVisible:false,
        pageNum: 1,
        pages: 2,
        pageSize: 20,
        total: 0,
        tableData:[],
        form:{
          key: '',
          label: '',
          type: '',
          description: '',
          sort: '',
          remark:''
        },
        modificationForm:{
          value: '',
          label: '',
          type: '',
          description: '',
          sort: '',
          remark:'',
          id:''
        },
        questionnairekk: {
          key:[
            { required: true, message: '请输入键值信息', trigger: 'blur' },
          ],
          label:[
            { required: true, message: '请输入标签', trigger: 'blur' },
          ],
          type:[
            { required: true, message: '请输入类型', trigger: 'blur' },
          ],
          description:[
            { required: true, message: '描述不能为空', trigger: 'blur' },
          ],
          sort:[
            { required: true, message: '排序不能为空', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      //返回
      getBack(){
        this.activeName = 'dictionariesList'
      },
      //保存
      saveForm(form){
        var _this = this;
        var requestData = {
          value:this.form.key,
          label:this.form.label,
          type:this.form.type,
          sort:this.form.sort,
          description:this.form.description,
          remarks:this.form.remark
        }
        this.$refs[form].validate((valid) => {
          if(valid){
            this.$ajax({
              method:'POST',
              url:'dict/save',
              data:querystring.stringify(requestData),
              dataType:'json'
            }).then(function (response) {
              var res =  response.data;
              if(res.statusCode == 0){
                _this.$message({
                  message: '保存成功',
                  type: 'success'
                });
                _this.activeName = 'dictionariesList';
                _this.requestTable();
              } else {
                _this.$message({
                  message: '保存失败，请核查填入内容！',
                  type: 'error'
                });
              }
            }).catch(function () {
              _this.$message({
                message: "保存失败，请核查填入内容！",
                type: 'error'
              });
            });
          }else{
            _this.$message({
              message: "保存失败，请核查填入内容！",
              type: 'error'
            });
          }
        })
      },
      //修改按钮
      modification(index,row){
        this.dialogVisible = true;
        this.modificationForm.value = row[index].value;
        this.modificationForm.label = row[index].label;
        this.modificationForm.type = row[index].type;
        this.modificationForm.description = row[index].description;
        this.modificationForm.sort = row[index].sort;
        this.modificationForm.id = row[index].id;
      },
      //确认按钮
      confirm(){
        var _this = this;
        var requestData = {
          id:this.modificationForm.id,
          value:this.modificationForm.value,
          label:this.modificationForm.label,
          type:this.modificationForm.type,
          description:this.modificationForm.description,
          sort:this.modificationForm.sort,
          remark:this.modificationForm.remark
        }
        this.$ajax({
          method:'POST',
          url:'dict/update',
          data:querystring.stringify(requestData),
          dataType:'json'
        }).then(function(response){
          var res = response.data;
          if(res.statusCode == 0){
            _this.dialogVisible = false;
            _this.$message({
              message: '保存成功！',
              type: 'success'
            });
            _this.requestTable();
          }else{
            _this.requestErrorHandler(res);
          }
        }).catch(function(){
          _this.catchErrorHandler();
        })
      },
      //删除row 按钮
      handleDelete(index, row) {
        var _this = this;
        var requestData = {
           id:row[index].id
        }
        _this.$confirm('确定要删除该字典吗？', '提示',{
          cancelButtonText:'取消',
          confirmButtonText:'确认'
        }).then(() => {
          this.$ajax({
            method:'POST',
            url:'dict/remove',
            data:querystring.stringify(requestData),
            dataType:'json'
          }).then(function(response){
            var res = response.data;
            if(res.statusCode == 0){
              _this.$message({
                message: '删除成功！',
                type: 'success'
              });
              row.splice(index, 1);
            }else{
              _this.requestErrorHandler(res);
            }
          }).catch(function(){
            _this.catchErrorHandler();
          })
        }).catch(() => {

        });
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
        }
          this.$ajax({
          method: 'POST',
          url:'dict/listData',
          data:querystring.stringify(requestData),
            dataType:'json'
        }).then(function (response) {
          var res = response.data;
          if (res.statusCode == 0) {
            _this.tableData = [];
            _this.renderTable(res.body.list); //渲染表格数据
            _this.setPagination(res.body) //设定分页
          }else{
            _this.requestErrorHandler(res);
          }
        }).catch(function(error){
            _this.catchErrorHandler();
          })
      },
      renderTable(data) {
        for (var i = 0; i < data.length; i++) {
          var tableItem = {
            value: data[i].value,
            label: data[i].label,
            type: data[i].type,
            description:data[i].description,
            sort:data[i].sort,
            id:data[i].id
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
  @import "../../../style/lnstitutional.scss";
</style>
