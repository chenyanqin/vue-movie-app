import axios from 'axios';

const request = axios.create({
	baseURL: 'http://localhost:8080/', // 开发环境的URL
	timeout: 20000 // 请求超时时间
});

request.interceptors.request.use(
	options => {
		const newOptions = { ...options };

		return newOptions;
	},
	error => {
		return Promise.reject(error);
	}
);

request.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error);
	}
);

export default request;
