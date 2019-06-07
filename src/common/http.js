// 专门用来配置axios的基础配置
import axios from 'axios'

// 根据生产与开发环境，动态切换baseURL
let baseURL = '';
if (process.env.NODE_ENV === 'development') {
	baseURL = '/api';
	// baseURL = 'http://tinylog.vip.elong.com/';
} else {
	baseURL = ''
}
// 配置baseURL
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 100000;

// 配置拦截器
// Add a request interceptor
axios.interceptors.request.use(function (config) {
	//增加发送时间戳
	config["st"] = new Date().getTime()
	return config;
}, function (err) {
	// 记录接口请求报错
	try {
		// airlog.error(err.message, 1)
	} catch(e) {
		console.log(e)
	}
	
	return Promise.reject(err);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	//记录接口耗时
	try {
		var data = JSON.parse(response.config.data)
		// airlog.apiPerformance(data.header.api, new Date().getTime() - response.config.st, response.data.body.IsError ? airlog.API_BIZ_ERROR : airlog.API_SUCCESS, response.data.body.ErrorCode)
	} catch(e) {
		// console.log(e)
	}
	
	return response;
}, function (err) {
	// 记录接口响应报错
	try {
		var data = JSON.parse(err.config.data)
		// airlog.apiPerformance(data.header.api, new Date().getTime() - err.config.st, airlog.API_SYS_ERROR, err.message)
	} catch(e) {
		console.log(e)
	}
	
	return Promise.reject(err);
});

//   配置完成之后暴露模块
export default axios;