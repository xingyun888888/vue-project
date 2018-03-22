export default {

  install(Vue, options) {
    Vue.prototype.requestErrorHandler = function(res) {
      if(res.code == 100006 || res.code == 100007) {
        this.$message({
          message: "数据获取失败",
          type: 'warning'
        });
        setTimeout(function(){
          window.localStorage.clear();
          window.location.reload();
        },2000);
      }else{
        this.$message({
          message:"数据获取失败",
          type: 'warning'
        });
      }
    };
    Vue.prototype.catchErrorHandler = function() {
      this.$message({
        message: "数据获取失败",
        type: 'warning'
      });
    };
    Vue.prototype.langFormater = function() {
      var setLang = window.localStorage.getItem("lang");
      var lang =
        window.localStorage.getItem("lang") != null ? setLang : "zh-cn";
      if (lang == "zh-cn") {
        return "zh_CN";
      } else {
        return "en_US";
      }
    };

    Vue.prototype.langIsChinese = function() {
      var setLang = window.localStorage.getItem("lang");
      var lang = window.localStorage.getItem("lang") != null ? setLang : "zh-cn";
      if (lang == "zh-cn") {
        return true;
      } else {
        return false;
      }
    };

    Vue.prototype.formatTime = function(ts) {
      if (ts == undefined || ts == null || ts == "") {
        return "--";
      } else {
        var oDate = new Date(ts),
          oYear = oDate.getFullYear(),
          oMonth = oDate.getMonth() + 1,
          oDay = oDate.getDate(),
          oHour = oDate.getHours(),
          oMin = oDate.getMinutes(),
          oSen = oDate.getSeconds();
        var oTime =
          oYear +
          "-" +
          this.getZeroFormat(oMonth) +
          "-" +
          this.getZeroFormat(oDay) +
          " " +
          this.getZeroFormat(oHour) +
          ":" +
          this.getZeroFormat(oMin) +
          ":" +
          this.getZeroFormat(oSen);
        return oTime;
      }
    };

    Vue.prototype.getDate = function(obj) {
      var oYear = obj.getFullYear(),
        oMonth = obj.getMonth() + 1,
        oDay = obj.getDate();
      var oDate =
        oYear +
        "-" +
        this.getZeroFormat(oMonth) +
        "-" +
        this.getZeroFormat(oDay);
      return oDate;
    };

    Vue.prototype.getTime = function(obj) {
      var oHour = obj.getHours(),
        oMin = obj.getMinutes(),
        oSen = obj.getSeconds();
      var oTime =
        this.getZeroFormat(oHour) +
        ":" +
        this.getZeroFormat(oMin) +
        ":" +
        this.getZeroFormat(oSen);
      return oTime;
    };

    Vue.prototype.getDateNow = function() {
      var oDate = new Date(),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate();
      var dateNow =
        oYear +
        "-" +
        this.getZeroFormat(oMonth) +
        "-" +
        this.getZeroFormat(oDay);
      return dateNow;
    };

    Vue.prototype.formatSex = function(num) {
      var setLang = window.localStorage.getItem("lang");
      var lang =
        window.localStorage.getItem("lang") != null ? setLang : "zh-cn";
      if (lang == "zh-cn") {
        if (num == 1) {
          return "男";
        } else if (num == 0) {
          return "女";
        } else {
          return "--";
        }
      } else {
        if (num == 1) {
          return "Male";
        } else if (num == 0) {
          return "Female";
        } else {
          return "--";
        }
      }
    };

    Vue.prototype.nullFormat = function(str) {
      if (str == null) {
        return "--";
      } else if (typeof str == "undefined") {
        return "--";
      } else if (str == "") {
        return "--";
      } else {
        return str;
      }
    };

    Vue.prototype.zeroFormat = function(str) {
      if (str == null) {
        return "0";
      } else if (typeof str == "undefined") {
        return "0";
      } else if (str == "") {
        return "0";
      } else {
        return str;
      }
    };

    Vue.prototype.getZeroFormat = function(num) {
      if (parseInt(num) < 10) {
        num = "0" + parseInt(num);
      }
      return num;
    };

    Vue.prototype.timeToseconds = function(str) {
      if (str == null) {
        return "0";
      } else {
        var temp = str.split(":");
        var seconds =
          3600 * Number(temp[0]) + 60 * Number(temp[1]) + Number(temp[2]);
        return seconds;
      }
    };

    Vue.prototype.cutTimeToMinutes = function(str) {
      if (str == null) {
        return "--";
      } else if (typeof str == "undefined") {
        return "--";
      } else if (str == "0") {
        return "0";
      } else {
        var strArr = str.split(":");
        return strArr[1];
      }
    };
  }
};
