import axios from 'axios';
import * as Contants from './constants';
import {message} from "antd"

const changeDetail = data => ({
    type:Contants.CHANGE_DETAIL,
    title:data.title,
    content : data.content
});

export const getContent = (id) => {
    return dispatch => {
        axios.get('/api/detail.json?id=' + id)
            .then(res=>{
                dispatch(changeDetail(res.data.data));
            })
    }
};

export const toudi = (obj)=>{
    return dispatch => {
        return axios.post('/admin/applyList',obj)
            .then((res)=>{
                message.info(res.data.msg);
                // console.log()
            })
    }
}