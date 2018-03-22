import Vue from 'vue'
import Router from 'vue-router' //引入vue-router
import Main from "@/components/main.vue"; //主框架组件
const LoginPage = r => require.ensure([], () => r(require('../views/login.vue')), 'login-page');
const reportManagePage = r => require.ensure([], () => r(require('../views/report/productManagement.vue')), 'report-manage-page');
const fourMinWalkReportPage = r => require.ensure([], () => r(require('../views/report/productCompile.vue')), 'four-min-walk-report-page');
const aerobicReportPage = r => require.ensure([], () => r(require('../views/report/custodian.vue')), 'aerobic-report-page');
const resistiveReportPage = r => require.ensure([], () => r(require('../views/report/custodianCompile.vue')), 'report-custodianCompile-page');
const InvestorManagement = r => require.ensure([], () => r(require('../views/report/InvestorManagement.vue')), 'report-InvestorManagement-page');
const personalDetails = r => require.ensure([], () => r(require('../views/customer/personalDetails.vue')), 'user-personalDetails-page');
const changePassword = r => require.ensure([], () => r(require('../views/customer/changePassword.vue')), 'user-changePassword-page');
const NotFoundPage = r => require.ensure([], () => r(require('../views/error/404.vue')), 'not-found-page');
const jurisdictionPage = r => require.ensure([], () => r(require('../views/customer/user_3.vue')), 'user-diction-page');
const content1Page = r => require.ensure([], () => r(require('../views/auditManagement/1.vue')), 'content-diction1-page');
const content2Page = r => require.ensure([], () => r(require('../views/auditManagement/2.vue')), 'content-diction2-page');
const office1Page = r => require.ensure([], () => r(require('../views/office/1.vue')), 'office-diction1-page');
const office2Page = r => require.ensure([], () => r(require('../views/office/2.vue')), 'office-diction2-page');
const office3Page = r => require.ensure([], () => r(require('../views/office/3.vue')), 'office-diction3-page');
const office4Page = r => require.ensure([], () => r(require('../views/office/4.vue')), 'office-diction4-page');
const office5Page = r => require.ensure([], () => r(require('../views/office/5.vue')), 'office-diction5-page');
const managementPage = r => require.ensure([], () => r(require('../views/systemSettings/Institutional/management.vue')), 'Institutional-management-page');
const productPage = r => require.ensure([], () => r(require('../views/systemSettings/Institutional/productLicensing.vue')), 'Institutional-productLicensing-page');
const userManagementPage = r => require.ensure([], () => r(require('../views/systemSettings/Institutional/userManagement.vue')), 'Institutional-userManagement-page');
const dictionariesPage = r => require.ensure([], () => r(require('../views/systemSettings/settings/dictionariesManage.vue')), 'settings-dictionaries-page');
const LinkNumberPage = r => require.ensure([], () => r(require('../views/systemSettings/settings/LinkNumberManage.vue')), 'settings-LinkNumberManage-page');
const rolePage = r => require.ensure([], () => r(require('../views/systemSettings/settings/roleManage.vue')), 'roleManage-role-page');
const dealQuery = r => require.ensure([], () => r(require('../views/contentManagement/dealQuery.vue')), 'dealQuery-page');
const shareQuery = r => require.ensure([], () => r(require('../views/contentManagement/shareQuery.vue')), 'shareQuery-page');
const changesShareQuery = r => require.ensure([], () => r(require('../views/contentManagement/changesShareQuery.vue')), 'changesShareQuery-page');
const waveTable = r => require.ensure([], () => r(require('../views/operationsManagement/waveTable.vue')), 'waveTable-page');
const monthly = r => require.ensure([], () => r(require('../views/operationsManagement/monthly.vue')), 'monthly-page');
const quarterlyReport = r => require.ensure([], () => r(require('../views/operationsManagement/quarterlyReport.vue')), 'quarterlyReport-page');
const yearReport = r => require.ensure([], () => r(require('../views/operationsManagement/yearReport.vue')), 'yearReport-page');
const balanceSheet = r => require.ensure([], () => r(require('../views/operationsManagement/balanceSheet.vue')), 'balanceSheet-page');
const incomeStatement = r => require.ensure([], () => r(require('../views/operationsManagement/incomeStatement.vue')), 'incomeStatement-page');
const benefitStatement = r => require.ensure([], () => r(require('../views/operationsManagement/benefitStatement.vue')), 'benefitStatement-page');
const valuationTable = r => require.ensure([], () => r(require('../views/operationsManagement/valuationTable.vue')), 'valuationTable-page');
const shareDetailsQuery = r => require.ensure([], () => r(require('../views/operationsManagement/shareDetailsQuery.vue')), 'shareDetailsQuery-page');



Vue.use(Router);

export default new Router(
  {
  routes: [
    {
      path: "/",
      component: Main,
      hidden: true,
      // redirect: { path: "/login" } //默认页面
    },
    {
      path: "/login",
      component: LoginPage,
      name: "登录",
      hidden: true,
      disabled:true
    },
    {
      path: '/',
      component: Main,
      name: '用户信息',
      iconCls: 'iconfont icon-baogao',
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/productManagement', component: reportManagePage, name: '产品管理',hidden:false },
        { path: '/productCompile', component: fourMinWalkReportPage, name: '产品编辑',hidden:true},
        { path: '/custodian', component:aerobicReportPage, name:'管理人管理', hidden:false},
        { path: '/custodianCompile',component:resistiveReportPage,name:'管理人编辑',hidden:false},
        { path: '/InvestorManagement',component:InvestorManagement,name:'投资人管理',hidden:false}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '权限设置',
      iconCls: 'iconfont icon-users',
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/personalDetails', component: personalDetails, name: '个人信息',hidden:false},
        { path: '/changePassword', component: changePassword, name: '修改密码',hidden:false},
        { path:'/diction',component:jurisdictionPage,name:'权限设置3',hidden:false}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '审核管理',
      iconCls: 'iconfont icon-users',
      hidden:true,
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/content1', component: content1Page, name: '审核管理1',hidden:false },
        { path: '/content2', component: content2Page, name: '审核管理2',hidden:false}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '在线办公',
      iconCls: 'iconfont icon-users',
      hidden:true,
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/office1', component: office1Page, name: '在线办公1',hidden:false},
        { path: '/office2', component: office2Page, name: '在线办公2',hidden:false},
        { path: '/office3', component: office3Page, name: '在线办公3',hidden:false},
        { path: '/office4', component: office4Page, name: '在线办公4',hidden:false},
        { path: '/office5', component: office5Page, name: '在线办公5',hidden:false}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '机构用户',
      iconCls: 'iconfont icon-users',
      hidden:true,
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/theManagement', component: managementPage, name: '机构管理',hidden:false },
        { path: '/product', component: productPage, name: '用户管理',hidden:false},
        { path: '/userManagement', component: userManagementPage, name: '产品授权',hidden:false}
      ]
    },
    {
      path: '/',
      component: Main,
      name: '系统设置',
      iconCls: 'iconfont icon-users',
      hidden:true,
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/role', component: rolePage, name: '角色管理',hidden:false},
        { path: '/dictionaries', component: dictionariesPage, name: '字典管理',hidden:false },
        { path: '/LinkNumber', component: LinkNumberPage, name: '银联号管理',hidden:false}

      ]
    },
    {
      path: '/',
      component: Main,
      name: '内容管理',
      iconCls: 'iconfont icon-users',
      hidden:true,
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/dealQuery', component: dealQuery, name: '交易确认查询',hidden:false},
        { path: '/shareQuery', component: shareQuery, name: '份额余额查询',hidden:false},
        { path: '/changesShareQuery', component: changesShareQuery, name: '份额变动查询',hidden:false},
      ]
    },
    {
      path: '/',
      component: Main,
      name: '信息披露',
      iconCls: 'iconfont icon-users',
      hidden:true,
      leaf: false,//只有一个路由主节点
      children: [
        { path: '/waveTable', component: waveTable, name: '净值波动表',hidden:false},
        { path: '/monthly', component: monthly, name:'备份系统月报', hidden:false},
        { path: '/quarterlyReport', component: quarterlyReport, name:'备份系统季报', hidden:false},
        { path: '/yearReport', component: yearReport, name:'备份系统年报', hidden:false},
        { path: '/balanceSheet', component: balanceSheet, name:'资产负债表', hidden:false},
        { path: '/incomeStatement', component: incomeStatement, name:'损益表', hidden:false},
        { path: '/benefitStatement', component: benefitStatement, name:'所有者权益报表', hidden:false},
        { path: '/valuationTable', component: valuationTable, name:'估值表', hidden:false},
        { path: '/shareDetailsQuery', component: shareDetailsQuery, name:'份额明细查询', hidden:false}
      ]
    },
    {
      path: "/404",
      component: NotFoundPage,
      name: "404",
      hidden: true
    },
    {
      path: "*",
      hidden: true,
      redirect: { path: "/404" }
    }
  ]
})



