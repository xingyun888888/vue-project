<template>
  <div class="container-body">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="管理人名称:" label-width="128px" class="left-justifying">
        <el-select v-model="form.custodianName" placeholder="请选择机构" style='width:380px'>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="业务选择:" label-width="128px">
        <el-checkbox-group v-model="form.transferDown">
          <el-checkbox label="综合服务" name="type"></el-checkbox>
          <el-checkbox label="TA外包" name="type"></el-checkbox>
          <el-checkbox label="估值外包" name="type"></el-checkbox>
          <el-checkbox label="募集账户监督" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="审核状态:" label-width="128px">
          <span>未审核</span>
      </el-form-item>
      <p class="basic-information">产品基础信息:</p>
      <i class="cut-off"></i>
      <el-form-item label="产品名称:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.productName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品代码:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.productCode"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品类型:" label-width="128px" class="left-justifying">
        <el-select v-model="form.productType" placeholder="请选择机构类型" style='width:350px'>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品状态:" label-width="128px" class="left-justifying">
        <el-select v-model="form.productState" placeholder="请选择机构级别" style='width:350px'>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="立项时间:" label-width="128px">
        <span>2014-09-12</span>
      </el-form-item>
      <el-form-item label="成立时间:" label-width="128px">
        <el-date-picker
          v-model="form.data"
          type="date"
          placeholder="请选择时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="清盘时间:" label-width="128px">
        <span>2014-09-12</span>
      </el-form-item>
      <p class="basic-information">产品分级信息:</p>
      <i class="cut-off"></i>
      <el-form-item label="分级类型:" label-width="128px">
        <span>子产品</span>
      </el-form-item>
      <el-form-item label="分级描述:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.describe"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="母产品名称:" label-width="128px" class="left-justifying">
        <el-select v-model="form.motherProductName" placeholder="请选择机构级别" style='width:350px'>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="母产品代码:" label-width="128px">
        <span>M90000</span>
      </el-form-item>
      <p class="basic-information">产品运作信息:</p>
      <i class="cut-off"></i>
      <el-form-item label="产品期限:" label-width="128px" class="left-justifying">
        <el-select v-model="form.productTime"  style='width:120px' placeholder="">
          <el-option label="是" value="shanghai"></el-option>
          <el-option label="否" value="beijing"></el-option>
        </el-select>
        <span>年</span>
      </el-form-item>
      <el-form-item label="运作方式:" label-width="128px" class="left-justifying">
        <el-radio-group v-model="form.modusOperandi">
          <el-radio label="封闭式"></el-radio>
          <el-radio label="开放式"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="风险等级:" label-width="128px" class="left-justifying">
        <el-select v-model="form.riskGrade" placeholder="请选择" style='width:120px'>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <p class="basic-information">费用信息:</p>
      <i class="cut-off"></i>
      <el-form-item label="认购费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.salesCharge"></el-input>
        </el-col>
        <span>&nbsp;%</span>
      </el-form-item>
      <el-form-item label="申购费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.buyCharge"></el-input>
        </el-col>
        <span>&nbsp;%</span>
      </el-form-item>
      <el-form-item label="赎回费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.redemptionFee"></el-input>
        </el-col>
        <span>&nbsp;%</span>
      </el-form-item>
      <el-form-item label="管理费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.manageCharge"></el-input>
        </el-col>
        <span>&nbsp;%</span>
      </el-form-item>
      <el-form-item label="托管费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.trusteeshipCharge"></el-input>
        </el-col>
        <span>&nbsp;%&nbsp;&nbsp;保底收费2.5万元</span>
      </el-form-item>
      <el-form-item label="综合服务费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.comprehensiveServiceCharge"></el-input>
        </el-col>
        <span>&nbsp;%&nbsp;&nbsp;保底收费2.5万元</span>
      </el-form-item>
      <el-form-item label="外包服务费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.outsourcingServiceCharge"></el-input>
        </el-col>
        <span>&nbsp;%&nbsp;&nbsp;保底收费2.5万元</span>
      </el-form-item>
      <el-form-item label="募集户监督服务费:" label-width="128px">
        <el-col style="width:120px;">
          <el-input v-model="form.supervisionCharge"></el-input>
        </el-col>
        <span>&nbsp;%</span>
      </el-form-item>
      <el-form-item label="投资顾问费:" label-width="128px">
        <span>无</span>
      </el-form-item>
      <el-form-item label="销售服务费:" label-width="128px">
        <span>无</span>
      </el-form-item>
      <p class="basic-information">机构信息:</p>
      <i class="cut-off"></i>
      <el-form-item label="托管人:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.trustee"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="综合服务商:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.serviceProvider"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="募集户监督机构:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.supervisoryBody"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="外包服务机构:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.outsourcingServiceOrganization"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="代销机构:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.proxyOrganization"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="证券经济商:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.stockBroker"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="期货经济商:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.futuresBroker"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="投资顾问:" label-width="128px">
        <el-col style="width:380px;">
          <el-input v-model="form.investmentAdviser"></el-input>
        </el-col>
      </el-form-item>
      <div class="comment left-justifying">
        <span>投资范围:</span>
        <textarea  v-model="form.investmentRange" style=" max-width:calc(100% - 200px);"></textarea>
      </div>
      <div class="comment left-justifying">
        <span>投资期限:</span>
        <textarea  v-model="form.investmentRestrict" style=" max-width:calc(100% - 200px);"></textarea>
      </div>
      <div class="comment left-justifying">
        <span>预警和止损:</span>
        <textarea  v-model="form.warningStoploss" style=" max-width:calc(100% - 200px);"></textarea>
      </div>
      <div class="comment left-justifying">
        <span>业绩报酬:</span>
        <textarea  v-model="form.meritPay" style=" max-width:calc(100% - 200px);"></textarea>
      </div>
      <div class="comment left-justifying">
        <span>收益分配:</span>
        <textarea  v-model="form.incomeDistribution" style=" max-width:calc(100% - 200px);"></textarea>
      </div>
      <div class="comment left-justifying">
        <span>估值核对周期:</span>
        <textarea  v-model="form.ValuationCheckPeriod" style=" max-width:calc(100% - 200px);"></textarea>
      </div>
      <el-form-item style="margin-top:25px;">
        <el-button type="primary">保存</el-button>
        <el-button type="primary" @click="getBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        form: {
          custodianName:'', //管理人名称
          transferDown:[], //业务选择
          productName:'', //产品名称
          productCode:'', //产品代码
          productType:'', //产品类型
          productState:'',  //产品状态
          data:'',//成立时间
          describe:'',  //分级描述
          motherProductName:'',  //母产品名称
          productTime:'', //产品期限
          modusOperandi:'', //运作方式
          riskGrade:'',  //风险等级
          salesCharge:'', //认购费
          buyCharge:'',  //申购费
          redemptionFee:'',  //赎回费
          manageCharge:'',  //管理费
          trusteeshipCharge:'',  //托管费
          comprehensiveServiceCharge:'', //综合服务费
          outsourcingServiceCharge:'',  //外包服务费
          supervisionCharge:'', //募集户监督服务费
          trustee:'',  //托管人
          serviceProvider:'', //综合服务商
          supervisoryBody:'',  //募集户监督机构
          outsourcingServiceOrganization:'', //外包服务机构
          proxyOrganization:'',  //代销机构
          stockBroker:'',  //证券经济商
          futuresBroker:'',  //期货经济商
          investmentAdviser:'',  //投资顾问
          investmentRange:'',  //投资范围
          investmentRestrict:'', //投资限制
          warningStoploss:'', //预警止损
          meritPay:'',  //业绩报酬
          incomeDistribution:'',  //收益分配
          ValuationCheckPeriod:'',  //估值核对周期
        },
      }
    },
    methods: {
      getBack(){
        this.$router.push({path:'/productManagement'})
      },
    },
    created() {

    },
    mounted() {

    }
  }
</script>


<style rel="stylesheet/scss" lang="scss">
  @import "../../style/layout.scss";
  @import "../../style/lnstitutional";
</style>
