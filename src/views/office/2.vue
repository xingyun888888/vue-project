<template>
  <div class="container-body">
    <div style="float:left">
      <h2>产品立项</h2>
      <el-tree
        :data="data"
        :props="defaultProps"
        :default-expand-all="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick">
      </el-tree>
    </div>
    <div style="float:right">
      <h2>审批类处理</h2>
      <table class="examineTable" border="1" width="100%" cellspacing="0">
        <tr>
          <td>产品名称</td>
          <td>蓝天一号</td>
        </tr>
        <tr>
          <td>管理人名称</td>
          <td>蓝天公司</td>
        </tr>
        <tr>
          <td>项</td>
          <td>值</td>
        </tr>
        <tr>
          <td>审批意见</td>
          <td>同意</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
      <div style="margin:30px 0;">
        <span>审批意见:</span>
        <el-input v-model="approvalOpinion" placeholder="请输入内容" style="width:250px;"></el-input>
      </div>
      <div>
        <el-button>同意</el-button>
        <el-button>驳回</el-button>
      </div>
    </div>
    <div style="clear:both">
      <h2>审批记录</h2>
      <el-table :data="tableData" border class="tableCall">
        <el-table-column prop="d1" label="任务名称" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d2" label="任务类型" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d3" label="操作时间" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d4" label="操作人" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d5" label="处理结果" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
        <el-table-column prop="d6" label="处理意见" :show-overflow-tooltip="showOverflowTooltip"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cachePage',
    data() {
      return {
        showOverflowTooltip:true,
        approvalOpinion:'',   //审批意见
        tableData:[
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'},
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'},
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'},
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'},
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'},
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'},
          {d1:'业务受理表',d2:'文件类',d3:'2017-10-10 10:10:10',d4:'管理人',d5:'同意',d6:'以上传文件'}
          ],
        data: [{
          label: '一级 1',
          id:'1',
          children: [{
            label: '二级 1-1',
            id:'2',
            children: [{
              label: '三级 1-1-1',
              id:'3',
              children: [{
                label: '三级 1-1-1',
                id:'3',
                children: [{
                  label: '三级 1-1-1',
                  id:'3',
                  children: [{
                    label: '三级 1-1-1',
                    id:'3',
                    children: [{
                      label: '三级 1-1-1',
                      id:'3',
                      children: [{
                        label: '三级 1-1-1',
                        id:'3',
                        children: [{
                          label: '三级 1-1-1',
                          id:'3',
                          children: [{
                            label: '三级 1-1-1',
                            id:'3',
                            children: [{
                              label: '三级 1-1-1',
                              id:'3',
                              children: [{
                                label: '三级 1-1-1',
                                id:'3',
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data.id);
      }
    },
    created: function () {
    },
    mounted() {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/layout.scss";
</style>
