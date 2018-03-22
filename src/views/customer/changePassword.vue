<template>
  <div class="container-body">
    <el-form ref="form" :model="form" label-width="80px" :rules="institutionsAdd" class="institutions-add" style="margin-left:0;margin-top:15px;">
      <el-form-item label="旧密码:" label-width="100px" prop="formerPassword">
        <el-col style="width:380px;">
          <el-input v-model="form.formerPassword"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <el-form-item label="新密码:" label-width="100px" prop="newPassword">
        <el-col style="width:380px;">
          <el-input v-model="form.newPassword"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <el-form-item label="确认新密码:" label-width="100px" prop="affirmPassword">
        <el-col style="width:380px;">
          <el-input v-model="form.affirmPassword"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <el-form-item>
        <el-button type="primary" @click="saveBtn('form')">修改</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
        form:{
          formerPassword:'',
          newPassword:'',
          affirmPassword:''
        },
      institutionsAdd:{
        formerPassword:[
          { required: true, message: '密码不能为空', trigger: 'change' },
        ],
        newPassword:[
          { required: true, message: '新密码不能为空', trigger: 'change' },
        ],
        affirmPassword:[
          { required: true, message: '确认密码不能为空', trigger: 'change' },
        ]
      }
    }
  },
  methods: {
    saveBtn(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('修改成功!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  created: function () {

  },
  mounted() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  @import "../../style/layout.scss";
  @import "../../style/lnstitutional";
</style>
