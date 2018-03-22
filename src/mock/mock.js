import Mock from 'mockjs';

const CutomerInfoData = Mock.mock('http://jj.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':15,
    'total':900,
    'pages':1,
    'list|15': [{
      'name':'@cname',
      // 'memberId':'@natural',
      // 'sex':'1',
      'age':'@natural(20, 40)',
      'phone': /\d{8}/,
      // 'height':'@natural(160, 190)',
      'height|1':['深圳纽麦克斯信息技术有限公司'],
      'weight':/\d{11}/,
      // 'last_commit_time':'@time',
      // 'last_commit_time':'@city(true)',
      'last_commit_time|1':['上海分公司','托管部','上海青浦证券营业部'],
      'motion_number': '@natural(1, 10)',
    }]
  }
});
Mock.mock('http://jjr.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':15,
    'total':550,
    'pages':1,
    'list|7': [{
      'key':/\d{3}/,
      'label|1':['平安','广发','华夏','民生','光大','兴业','浦发','浙商'],
      'type|1':['act_category99','act_type','apply_object','bank_type'],
      'describe|1':['资金管理','流程类型','管理人','投资人','私募产品','银行类别'],
      'sort': /\d{3}/,
    }]
  }
});
Mock.mock('http://jjt.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':15,
    'total':550,
    'pages':1,
    'list|10': [{
      'lineNumber':/\d{12}/,
      'headName|1':['其他城市银行'],
      'provinceName|1':['江西省','广东省','湖南省','贵州省'],
      'cityName':'@city',
      'lineNumberName|1': ['绵阳市商业银行股份有限公司科学城支行','青岛银行股份有限公司港口支行','海南银行股份有限公司总行营业部','长沙银行股份有限公司永州分行','台州银行股份有限公司临海大洋小微企业专营支行'],
      'time':'@DATETIME("yyyy-MM-dd HH:mm:ss")'
    }]
  }
});
Mock.mock('http://jjy.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':5,
    'total':1,
    'pages':1,
    'list|20': [{
      'cityName':'@city',
      'province|1':/\d{3}/
    }]
  }
});
Mock.mock('http://jju.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':15,
    'total':300,
    'pages':1,
    'list|10': [{
      'roleName|1':['梅西','贝尔','C罗','皮尔洛'],
      'englishName|1':['jjr','cj','zsjm'],
      'organization|1':['牛麦克斯','中南海','中科院'],
      'dataRange|1':['所在部门数据']
    }]
  }
});
Mock.mock('http://jji.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':15,
    'total':550,
    'pages':1,
    'list|10': [{
      'serialNumber|1':['梅西','贝尔','C罗','皮尔洛'],
      'productCode|1':['jjr','cj','zsjm'],
      'productName|1':['牛麦克斯','中南海','中科院'],
      'custodianName|1':['所在部门数据'],
      'productState|1':['所在部门数据'],
      'type|1':['所在部门数据'],
      'productSource|1':['所在部门数据'],
      'date|1':['所在部门数据'],
      'checked|1':['所在部门数据']
    }]
  }
});
Mock.mock('http://jjo.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':15,
    'total':550,
    'pages':1,
    'list|10': [{
      'd1|1':['梅西','贝尔','C罗','皮尔洛'],
      'd2|1':['jjr','cj','zsjm'],
      'd3|1':['牛麦克斯','中南海','中科院'],
      'd4|1':['100','2000','5000'],
      'd5|1':['上海','江苏','北京','深圳'],
      'd6|1':['隔壁老王','老李','老铁'],
      'd7|1':['110','112','119'],
      'd8|1':['www.bai.com'],
      'd9|1':['10086','12580'],
      'd10|1':['否','是','你猜'],
      'd11|1':['已审核','未审核','你猜']
    }]
  }
});
Mock.mock('http://jjP.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':25,
    'total':550,
    'pages':1,
    'list|10': [{
      'd1|1':['梅西','贝尔','C罗','皮尔洛'],
      'd2|1':['jjr','cj','zsjm'],
      'd3|1':['牛麦克斯','中南海','中科院'],
      'd4|1':['100','2000','5000'],
      'd5|1':['上海','江苏','北京','深圳'],
      'd6|1':['隔壁老王','老李','老铁'],
      'd7|1':['110','112','119'],
      'd8|1':['www.bai.com'],
      'd9|1':['10086','12580'],
      'd10|1':['否','是','你猜'],
      'd11|1':['已审核','未审核','你猜'],
      'd12|1':['已审核','未审核','你猜'],
      'd13|1':['已审核','未审核','你猜'],
      'd14|1':['已审核','未审核','你猜'],
      'd15|1':['已审核','未审核','你猜'],
      'd16|1':['已审核','未审核','你猜'],
      'd17|1':['已审核','未审核','你猜'],
    }]
  }
});
Mock.mock('http://jja.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':25,
    'total':550,
    'pages':1,
    'list|10': [{
      'd1|1':['梅西','贝尔','C罗','皮尔洛'],
      'd2|1':['jjr','cj','zsjm'],
      'd3|1':['牛麦克斯','中南海','中科院'],
      'd4|1':['100','2000','5000'],
      'd5|1':['上海','江苏','北京','深圳'],
      'd6|1':['隔壁老王','老李','老铁'],
      'd7|1':['110','112','119'],
      'd8|1':['www.bai.com'],
      'd9|1':['10086','12580']
    }]
  }
});
Mock.mock('http://jjs.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':25,
    'total':550,
    'pages':1,
    'list|10': [{
      'd1|1':'@name',
      'd2|1':'@time',
      'd3|1':['牛麦克斯','中南海','中科院'],
      'd4|1':['100','2000','5000'],
      'd5|1':['上海','江苏','北京','深圳'],
      'd6|1':['隔壁老王','老李','老铁'],
      'd7|1':['110','112','119'],
      'd8|1':['www.bai.com'],
      'd9|1':['10086','12580'],
      'd10|1':['10086','12580'],
      'd11|1':['10086','12580']
    }]
  }
});
Mock.mock('http://jjd.cn', {
  'code':'200',
  'body':{
    'pageNum':1,
    'pageSize':25,
    'total':550,
    'pages':1,
    'list|10': [{
      'd2|1':'@time',
      'd3|1':['牛麦克斯','中南海','中科院'],
      'd4|1':['100','2000','5000'],
      'd5|1':['上海','江苏','北京','深圳'],
      'd6|1':['隔壁老王','老李','老铁'],
      'd7|1':['110','112','119'],
      'd8|1':['www.bai.com'],
      'd9|1':['10086','12580'],
      'd10|1':['10086','12580'],
      'd11|1':['10086','12580'],
      'd12|1':['10086','12580'],
      'd13|1':['10086','12580'],
    }]
  }
});

export {CutomerInfoData };

