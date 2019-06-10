import axios from 'axios';
import { fromJS } from 'immutable'
import * as Constants from './constants';

const nextPageChange = data => ({
    type:Constants.NEXT_PAGE_CHANGE,
    data
})

const homeDataChange = data => ({
    type: Constants.GET_HOME_DATA,
    topic : data.get('topic'),
    info : data.get('item_list'),
    totalPage: data.get('total_count')
});

const isShow = data => ({
    type : Constants.CHANGE_SHOW,
    data
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/queryJob')
            .then( res => {
                const {result} = res.data;
                dispatch(homeDataChange(fromJS(result)));
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