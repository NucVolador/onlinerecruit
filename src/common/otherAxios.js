import JsonP from 'jsonp'
import axios from 'axios'
import querystring from 'querystring';
import { Modal,message } from 'antd'
import Utils from './../utils/utils'
export default class Axios {

    static requestList(_this,url,params,isMock){
        var data = {
            params: params,
            isMock
        }
        this.ajax({
            url,
            data,
			isMock
        }).then((data)=>{
        	console.log(data,"初始化")
            if (data && data.result){
                let list = data.result.item_list.map((item, index) => {
                    item.key = index;
                    return item;
                });
				console.log(list,"list");
				_this.setState({
                    list,
                    pagination: Utils.pagination(data, (current) => {
                        _this.params.page = current;
                        _this.requestList();
                    })
                })
            }
        });
    }
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                // if (response.status == 'success') {
                //     resolve(response);
                // } else {
                //     reject(response.messsage);
                // }
            })
        })
    }
    static ajax(options){
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi = '';
        if(options.isMock){
            baseApi = '/api';
        }else{
            baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        }
        console.log(options.data , options.data.params)
		return new Promise((resolve,reject)=>{
		    if(options.type === 'post'){
				axios({
					url:options.url,
					method:'post',
					baseURL:baseApi,
					timeout:5000,
                    headers:{
						'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    data : querystring.stringify(options.data.params)
				}).then((response)=>{
					if (options.data && options.data.isShowLoading !== false) {
						loading = document.getElementById('ajaxLoading');
						loading.style.display = 'none';
					}
				
					if (response.status == '200'){
						let res = response.data;
						if (res.code === 1){
							message.info(res.msg)
							resolve(res);
						}else{
							Modal.info({
							    title:"提示",
							    content:res.msg
							})
						}
					}else{
						reject(response.data);
					}
				})
            }else{
				axios({
					url:options.url,
					method:'get',
					baseURL:baseApi,
					timeout:5000,
					params: (options.data && options.data.params) || ''
				}).then((response)=>{
					if (options.data && options.data.isShowLoading !== false) {
						loading = document.getElementById('ajaxLoading');
						loading.style.display = 'none';
					}
				
					if (response.status == '200'){
						let res = response.data;
						if (res.code === 1){
							// message.info(res.msg)
							resolve(res);
						}else{
							Modal.info({
							    title:"提示",
							    content:res.msg
							})
							//console.log(response)
						}
					}else{
						reject(response.data);
					}
				})
            }
        });
    }
}