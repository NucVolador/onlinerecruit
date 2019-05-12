import axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';

const nextPageChange = data => ({
    type:Constants.NEXT_PAGE_CHANGE,
    data
})

const homeDataChange = data => ({
    type:Constants.GET_HOME_DATA,
    topic : data.get('topic'),
    info : data.get('info'),
    ad: data.get('ad'),
    author : data.get('author')
});

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then( res => {
                const {data} = res.data;
                dispatch(homeDataChange(fromJS(data)));
            })
            .catch((err)=>{
                console.log(err);
            });
    }
};

export const getNextPage = page => {
    return (dispatch) => {
        axios.get('/api/homeNextPage.json?page=' + page)
            .then(res => {
                const {data} = res.data;
                dispatch(nextPageChange(fromJS(data)));
            })
            .catch()
    }
};

export const changeShow = data => {
    return (dispatch) =>{
        dispatch(isShow(data));
    }
};
