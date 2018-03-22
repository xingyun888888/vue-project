<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:14px;
  color: #2c3e50;
  height:100%;
}
.anchorBL{
  display:none;
}
@media print {
  .content-wrapper {
    background-color: white;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
  }
  .btn-top-right{
    opacity:0;
  }
  .el-breadcrumb{
    display:none!important;
  }
}

</style>
