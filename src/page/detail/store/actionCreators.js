import axios from 'axios';
import * as Contants from './constants'

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