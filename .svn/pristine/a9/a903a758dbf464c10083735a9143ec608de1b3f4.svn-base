<template>
  <div class="container-body">
    <el-tabs v-model="activeName2" type="border-card" class="tabs-body">
      <el-tab-pane label="机构列表" style="margin-top:30px;" name="institutions">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="机构名称" align="center" width="240" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="name" label="所属区域" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="postal" label="机构编码" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="type" label="机构类型" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column prop="remark" label="备注" align="center" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
          <el-table-column label="操作" align="center"  width="330" :show-overflow-tooltip="showOverflowTooltip">
            <template scope="scope" :data="tableData">
              <el-button type="info" @click="modification(scope.$index,tableData)">修改</el-button>
              <el-button type="danger" @click="handleDelete(scope.$index, tableData)">删除</el-button>
              <el-button type="success" @click="addOrganization">添加下级机构</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--模态框-->
        <el-dialog
          :visible.sync="dialogVisible"
          title="机构修改"
          width="30%">
          <el-form ref="form" :model="modificationForm" label-width="80px">
            <el-form-item label="上级机构:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationForm.parentBody" placeholder="请选择机构" style='width:380px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="机构名称:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.organizationName"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="机构编码:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.organizationCoding"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="机构类型:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationForm.organizationType" placeholder="请选择机构类型" style='width:350px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="机构级别:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationForm.organizationRank" placeholder="请选择机构级别" style='width:350px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否可用:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationForm.whether"  style='width:70px' placeholder="">
                <el-option label="是" value="shanghai"></el-option>
                <el-option label="否" value="beijing"></el-option>
              </el-select>
              <span class="prompt-text">“是”代表此账号允许登陆，“否”则表示此账号不允许登陆</span>
            </el-form-item>
            <el-form-item label="主负责人:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationForm.principalA" placeholder="请选择" style='width:380px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="副负责人:" label-width="128px" class="left-justifying">
              <el-select v-model="modificationForm.principalB" placeholder="请选择" style='width:380px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系地址:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.contactAddress"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="邮政编码:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.postalCode"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="负责人:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.principal"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="电话:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.phone"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="传真:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.fax"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="邮箱:" label-width="128px">
              <el-col style="width:380px;">
                <el-input v-model="modificationForm.mailbox"></el-input>
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
      <!--机构添加-->
      <el-tab-pane label="机构添加" name="form">
        <el-form ref="form" :model="form" label-width="80px" class="institutions-add">
          <el-form-item label="上级机构:" label-width="128px">
              <el-select v-model="form.parentBody" placeholder="请选择机构" style='width:380px'>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="机构名称:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.organizationName"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="机构编码:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.organizationCoding"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="机构类型:" label-width="128px">
            <el-select v-model="form.organizationType" placeholder="请选择机构类型" style='width:350px'>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="机构级别:" label-width="128px">
            <el-select v-model="form.organizationRank" placeholder="请选择机构级别" style='width:350px'>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否可用:" label-width="128px">
            <el-select v-model="form.whether"  style='width:70px' placeholder="">
              <el-option label="是" value="shanghai"></el-option>
              <el-option label="否" value="beijing"></el-option>
            </el-select>
            <span class="prompt-text">“是”代表此账号允许登陆，“否”则表示此账号不允许登陆</span>
          </el-form-item>
          <el-form-item label="主负责人:" label-width="128px">
            <el-select v-model="form.principalA" placeholder="请选择" style='width:380px'>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="副负责人:" label-width="128px">
            <el-select v-model="form.principalB" placeholder="请选择" style='width:380px'>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系地址:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.contactAddress"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="邮政编码:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.postalCode"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="负责人:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.principal"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="电话:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.phone"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="传真:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.fax"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="邮箱:" label-width="128px">
            <el-col style="width:380px;">
              <el-input v-model="form.mailbox"></el-input>
            </el-col>
          </el-form-item>
          <div class="comment">
            <span>备注:</span>
            <textarea  v-model="form.remark" style=" max-width:calc(100% - 200px);"></textarea>
          </div>
          <el-form-item label="快速添加下级部门:" label-width="128px">
            <el-checkbox-group v-model="form.transferDown">
              <el-checkbox label="开发部" name="type"></el-checkbox>
              <el-checkbox label="综合部" name="type"></el-checkbox>
              <el-checkbox label="人力部" name="type"></el-checkbox>
              <el-checkbox label="会计部" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item style="margin-top:25px;">
            <el-button type="primary">保存</el-button>
            <el-button @click.native="getBack">返回</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'cachePage',
    data() {
      return {
        activeName2:'institutions',
        showOverflowTooltip: true,
        dialogVisible:false,
        tableData: [{
          date: '深圳纽麦克斯信息技术有限公司',
          name: '王小虎',
          postal: '521800',
          type:'公司',
          remark:''
        }, {
          date: '深圳纽麦克斯信息技术有限公司',
          name: '王小虎',
          postal: '521800',
          type:'部门',
          remark:''
        }, {
          date: '纽麦克斯信息技术',
          name: '王小虎',
          postal: '521800',
          type:'学校',
          remark:''
        }, {
          date: '纽麦克斯信息技术有限',
          name: '王小虎',
          postal: '521800',
          type:'公司',
          remark:''
        }],
        form: {
          parentBody : '',  //上级机构
          organizationName:'', //机构名称
          organizationCoding:'', //机构编码
          organizationType:'',   //机构类型
          organizationRank:'',  //机构级别
          whether:'',     //是否可用
          principalA:'',   //主负责人
          principalB:'',   //副负责人
          contactAddress:'', //联系地址
          postalCode:'',   //邮政编码
          principal:'',    //负责人
          phone:'',   //电话
          fax:'',  //传真
          mailbox:'',//邮箱
          remark:'', //备注
          transferDown: []
        },
        modificationForm: {
          parentBody : '',  //上级机构
          organizationName:'', //机构名称
          organizationCoding:'', //机构编码
          organizationType:'',   //机构类型
          organizationRank:'',  //机构级别
          whether:'',     //是否可用
          principalA:'',   //主负责人
          principalB:'',   //副负责人
          contactAddress:'', //联系地址
          postalCode:'',   //邮政编码
          principal:'',    //负责人
          phone:'',   //电话
          fax:'',  //传真
          mailbox:'',//邮箱
          remark:'', //备注
        },
      }
    },
    methods: {
      //返回按钮
      getBack(){
        this.activeName2 = 'institutions';
      },
      //修改按钮
      modification(index, row){
        this.dialogVisible = true;
      },
      //确认按钮
      confirm(){
        this.dialogVisible = false;
        this.$message({
          message: '保存成功！',
          type: 'success'
        });
      },
      //删除row 按钮
      handleDelete(index, row) {
        var _this = this;
        this.$confirm('要删除该机构及所有子机构项吗？', '提示',{
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
      //添加机构按钮
      addOrganization(){

      },
    },
    created: function () {
    },
    mounted() {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../style/layout.scss";
  @import "../../../style/lnstitutional";
</style>
