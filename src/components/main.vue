<template>
  <el-row class="container">
    <div class="logo">
      <img src="../assets/1.png" alt="">
    </div>
    <el-col :span="24" class="header">
      <el-col :span="18" class="navigation-bar">
        <el-tabs v-model="activeName"  @tab-click="handleClick($router.options)">
          <el-tab-pane v-for="(emp,index) in array" :label="emp.name" :name="emp.second"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6" class="userinfo">
        <span class="el-dropdown-link userinfo-inner">
          您好,系统管理员
        </span>
        <span class="divider"> | </span>
        <span class="language-toggle" @click="logout">退出</span>
      </el-col>
    </el-col>
    <el-col :span="24" class="container-tabs">
      <div>
        <ul v-for="(item,index) in this.routerArr"> <!--添加的导航卡-->
          <li @click="$router.push(item.path)"  :class="$route.path==item.path?'toggle-class':''" >{{item.name}}<i class="fa fa-remove tabs-delete" @click="deleteWebpage(item,index)"></i></li>
        </ul>
      </div>
    </el-col>
    <el-col :span="24" class="main">
      <aside class="menu-expanded">
        <el-menu class="el-menu-vertical-demo expanded-menu" unique-opened router >
          <template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-menu-item-group :index="item.name" v-if="!item.leaf">
              <template slot="title" >
                <i :class="item.iconCls"></i>{{item.name}}
              </template>
              <el-menu-item v-for="(child,index) in item.children" :index="child.path" :key="child.path" v-if="item.children" @click="tabs(child,index)">{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </template>
        </el-menu>
      </aside>

      <!--<aside class="menu-expanded">-->
        <!--<el-menu class="el-menu-vertical-demo expanded-menu" unique-opened router>-->
          <!--<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">-->
            <!--<el-submenu :index="index+''" v-if="!item.leaf">-->
                <!--<template slot="title">-->
                <!--<i :class="item.iconCls"></i>{{item.name}} &lt;!&ndash;主题下拉栏&ndash;&gt;-->
              <!--</template>-->
              <!--<el-menu-item v-for="(child,index) in item.children" :index="child.path" key="child.path" v-if="!child.hidden" @click="tabs(child,index)">{{child.name}}</el-menu-item>  &lt;!&ndash;子集菜单&ndash;&gt;-->
            <!--</el-submenu>-->
          <!--</template>-->
        <!--</el-menu>-->
      <!--</aside>-->

      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <keep-alive include="cachePage">
                <router-view></router-view>
              </keep-alive>
            </transition>
            <el-col :span="24">
              <div class="footer">Copyright © 2016-2016 深圳纽麦克斯信息技术有限公司 - Powered By iNewmax V2.0</div>
            </el-col>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  import bus from '@/bus.js';
  export default {
    data() {
      return {
        routerArr:[],
        arr:[],
        route:'',
        activeName: 'second1',
        reouterList:window.sessionStorage.getItem('reouterList'),
        array:[
          {name:'我的面板',second:'second1'},
          {name:'在线办公',second:'second2'},
          {name:'审核管理',second:'second3'},
          {name:'网站运营',second:'second4'},
          {name:'系统设置',second:'second5'},
          {name:'内容管理',second:'second6'}],
        tabIndex: 2
      }
    },
    methods: {
//      onTabClick(e){
//        this.$router.push({path:e});
//      },
      requestTable(){
        var _this = this;
        this.$ajax({
          method: 'GET',
          url:'sys/menu/getMenuList'
        }).then(function (response) {
          var res = response;
          if (res.statusCode == 0) {
//          _this.array =  res.data.body;
            window.sessionStorage.setItem('listTree',JSON.stringify(res.data.body));
          }else if(res.statusCode == 20){
              alert(999)
          }
        }).catch(function (){
//          _this.catchErrorHandler();
        });
      },
      handleClick(router) {
        if(this.activeName=='second1'){
          router.routes[2].hidden = false;
          router.routes[3].hidden = false;
          router.routes[5].hidden = true;
          router.routes[6].hidden = true;
          router.routes[7].hidden = true;
          router.routes[8].hidden = true;
          router.routes[4].hidden = true;
          router.routes[9].hidden = true;
        }else if(this.activeName=='second2') {
          router.routes[2].hidden = true;
          router.routes[3].hidden = true;
          router.routes[4].hidden = true;
          router.routes[6].hidden = true;
          router.routes[7].hidden = true;
          router.routes[8].hidden = true;
          router.routes[9].hidden = true;
          router.routes[5].hidden = false;
        }else if(this.activeName=='second3'){
          router.routes[2].hidden = true;
          router.routes[3].hidden = true;
          router.routes[5].hidden = true;
          router.routes[6].hidden = true;
          router.routes[7].hidden = true;
          router.routes[8].hidden = true;
          router.routes[9].hidden = true;
          router.routes[4].hidden = false;
        }else if(this.activeName=='second4'){
          router.routes[2].hidden = true;
          router.routes[3].hidden = true;
          router.routes[5].hidden = true;
          router.routes[4].hidden = true;
          router.routes[6].hidden = true;
          router.routes[7].hidden = true;
          router.routes[8].hidden = true;
          router.routes[9].hidden = false;
        }else if(this.activeName=='second5'){
          router.routes[2].hidden = true;
          router.routes[3].hidden = true;
          router.routes[5].hidden = true;
          router.routes[4].hidden = true;
          router.routes[8].hidden = true;
          router.routes[9].hidden = true;
          router.routes[6].hidden = false;
          router.routes[7].hidden = false;
        }else if(this.activeName == 'second6'){
          router.routes[2].hidden = true;
          router.routes[3].hidden = true;
          router.routes[5].hidden = true;
          router.routes[4].hidden = true;
          router.routes[6].hidden = true;
          router.routes[7].hidden = true;
          router.routes[9].hidden = true;
          router.routes[8].hidden = false;
        }
      },
      //添加导航选项卡
      tabs(child,index){
        if(this.arr.indexOf(child.name)==-1){
          this.arr.push(child.name);
          this.routerArr.push({name:child.name,path:child.path})
        }
      },
      //删除选项卡
      deleteWebpage(item,index){
        var _this = this;
        for(var i=0;i<this.routerArr.length;i++){
          if(this.routerArr[i].name == item.name){
            this.routerArr.splice([i],1);
            this.arr.splice([i],1);
          }
        }
        if(this.routerArr.length == 0){
          setTimeout(function(){
            _this.$router.push({ path: '/' })
          },10)
        }
        if(this.routerArr.length == index){
          if(this.routerArr.length !=0){
            _this.toute = _this.routerArr[index - 1 ].path;
            setTimeout(function() {
              _this.$router.push({path: _this.toute})
            },10)
          }
        }
      },
      //退出登录
      logout() {
        var _this = this;
        console.log(this.routerArr)
        this.$confirm('确认退出吗?', '提示',{
          cancelButtonText:'取消',
          confirmButtonText:'确认'
        }).then(() => {
          _this.requestLogout();
          window.localStorage.clear();
         this.clearAllCookie();
          _this.$router.push('/login');
        }).catch(() => {
        });
      },
      //清楚cookie方法
      clearAllCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if(keys) {
          for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
      },
      requestLogout(){
        var url = '/logout';
        this.$ajax({
          method: 'get',
          url: url
        }).then(function (response) {
        }).catch((error)=>{
        })
      },
    },
    created: function () {

    },
    mounted() {
        console.log(this.$router);
        console.dir(this.$route)
      this.requestTable();
      bus.$on('message',(data)=>{
        if(this.arr.indexOf('产品编辑')==-1) {
          this.arr.push('产品编辑');
          this.routerArr.push({name: '产品编辑', path: '/productCompile'});
          this.$router.push({path: '/productCompile'});
        }
      })

    },

  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/main.scss";
  @import "../assets/iconfont/iconfont.css";
</style>
