import axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})

export const changeCity = value => ({
	type : Constants.CHANGE_CITY,
	value
})
export const changeJob = value => ({
	type : Constants.CHANGE_JOB,
	value
})
export const changeWorkLife = value => ({
	type : Constants.CHANGE_WORKLIFE,
	value
})

export const changeShow = data => {
    return (dispatch) =>{
        dispatch(isShow(data));
    }
};

const nextPageChange = data => ({
	type:Constants.NEXT_PAGE_CHANGE,
	data
})

const nextPageChange2 = data => ({
	type:Constants.NEXT_PAGE_CHANGE2,
	data
})

export const getNextPage = page => {
	return (dispatch) => {
		axios.get(`/api/homeNext${page}3.json`)
			.then(res => {
				const {data} = res.data;
				dispatch(nextPageChange(fromJS(data)));
			})
			.catch()
	}
};

export const getNextPage2 = page => {
	return (dispatch) => {
		axios.get(`/api/homeNext${page}.json`)
			.then(res => {
				const {data} = res.data;
				dispatch(nextPageChange2(fromJS(data)));
			})
			.catch()
	}
};

const homeDataChange = data => ({
	type: Constants.GET_HOME_DATA,
	info : data.get('item_list'),
	totalPage: data.get('total_count')
});



export const getHomeData = keyword => {
	return (dispatch) => {
		axios.get('/queryJob?keyword='+keyword)
			.then( res => {
				const {result} = res.data;
				dispatch(homeDataChange(fromJS(result)));
			})
			.catch((err)=>{
				console.log(err);
			});
	}
};

const nextDataChange = data => ({
	type: Constants.NEXT_DATA,
	info : data.get('item_list'),
	totalPage: data.get('total_count'),
	page: data.get('page')
});

export const getNextJob = (keyword,page)=> {
	return (dispatch) => {
		axios.get('/queryJob?keyword='+keyword+"&page="+page)
			.then( res => {
				const {result} = res.data;
				dispatch(nextDataChange(fromJS(result)));
			})
			.catch((err)=>{
				console.log(err);
			});
	}
};