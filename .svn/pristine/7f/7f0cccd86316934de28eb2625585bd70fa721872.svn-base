<template>
  <div class="container-body">
    <el-form ref="form" :model="form" label-width="80px" class="institutions-add" style="margin-left:0;margin-top:15px;">
      <el-form-item label="登入帐号:" label-width="100px">
        <el-col style="width:380px;">
          <el-input v-model="form.logoNamen"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <el-form-item label="姓名:" label-width="100px">
        <el-col style="width:380px;">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <el-form-item label="手机号:" label-width="100px">
        <el-col style="width:380px;">
          <el-input v-model="form.iphone"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <el-form-item label="邮箱:" label-width="100px">
        <el-col style="width:380px;">
          <el-input v-model="form.mailbox"></el-input>
        </el-col>
      </el-form-item>
      <p></p>
      <div class="comment left-justifying">
        <span style="width:90px;">备注:</span>
        <textarea  v-model="form.remark" style=" max-width:calc(100% - 200px);margin-bottom:25px;"></textarea>
      </div>
      <p></p>
      <div class="comment">
        <span style="width:90px;">角色:</span>
        <span style="width:70px;">超级管理员</span>
      </div>
      <p></p>
      <el-form-item>
        <el-button type="primary" @click="saveBtn('form')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

export default {
  name: 'cachePage',
  data() {
    return {
        form:{
          logoNamen:'admin',
          name:'小霸王',
          iphone:'13888888888',
          mailbox:'123@qq.com',
          remark:'说点什么呢~~'
        }
    }
  },
  methods: {
      saveBtn(form){
        console.log(this.form)
      }
  },
  created() {

  },
  mounted() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/layout.scss";
  @import "../../style/lnstitutional";
</style>
