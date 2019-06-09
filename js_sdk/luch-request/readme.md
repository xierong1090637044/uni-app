**插件使用说明**

- 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
- 下载后把 http-request 文件夹放到项目 utils/ 目录下

## 1. 配置 

### 1.1 全局配置修改（）
``` javascript 
		可修改值：
		config = {
		  baseUrl: '', /* 全局根路径，需要注意，如果请求的路径为绝对路径，则不会应用baseUrl */
		  header: {
		    'Content-Type': 'application/json;charset=UTF-8'
		  },
		  method: 'GET',
		  dataType: 'json',
		  responseType: 'text'
		}
		修改方法 setConfig 该方法接收一个函数，函数参数为默认全局config,最后必须返回修改后的config
		export const http = new Request();
		http.setConfig((config) => { /* 设置全局配置 config 为默认全局配置*/
			config.baseUrl = 'http://www.bbb.cn'; /* 根域名不同 */
			config.header = {
				a: 1,
				b: 2
			}
			return config
		})
		
		// 拦截器
		http.interceptor.request((config, cancel) => { /* 请求之前拦截器，cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
			config.header = {
				a: 1,
				...config.header
			}
			if (!token) { /* 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行*/
                cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
            }
			return config;
		})
		http.interceptor.response((response) => { /* 请求之后拦截器,必须return response*/
			console.log(response);
			return response;
		})
```
	
### 1.2 具体接口调用时修改
``` javascript
		// 局部配置优先级高于全局配置
		http.post('/user/login', {a: 1}, {
			header: {}, /* 会覆盖全局header */
			dataType: 'json',
			responseType: 'text'
		}).then(res => {
			
		}).catch(err => {
			
		})
		http.get('/user/login', {a: 1}, {
			header: {}, /* 会覆盖全局header */
			dataType: 'json',
			responseType: 'text'
		}).then(res => {
			
		}).catch(err => {
			
		})
```	




