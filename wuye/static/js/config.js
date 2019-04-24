var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
		  'https://www.e-shequ.com/pay/';

var common= /127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
		  /test/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
		  'https://www.e-shequ.com/weifa/weixin/';
let config = {
		//请求头公共部分
		baseUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
  		/uat/.test(location.origin)?'https://uat.e-shequ.com/wechat/hexie/wechat/':
  		'https://www.e-shequ.com/weifa/wechat/hexie/wechat/',

		//物业板块
		wuye_index:{
			url1: common+'repair/index.html#/repair?category=4'//便民维修
		},
		wuye_footer:{
			url1: common+'home/index.html',   //底部导航  社区生活
			url2: common+'person/index.html'  //底部导航  个人中心
		},
		wuye_pay:{
			url1: pay+ 'wf' + 'paymentdetail.html'//支付跳转
		},
		wuye_house:{
			html: /127|test/.test(location.origin)?'test.e-shequ.com':
  				  /uat/.test(location.origin)?'uat.e-shequ.com':
  				  'www.e-shequ.com'       //提示框网址
		},
	
		
};


export default config