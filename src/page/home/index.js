import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { HomeWrapper,HomeLeft,HomeRight,More,GoTop } from './style';
import Topic from './components/topic';
import Info from './components/Info';
import Ad from './components/Ad';
import Author from './components/Author';
import { ActionCreators } from './store'
import {ActionCreator} from "../searchlist/store";
import {message} from "antd";

const img1 = require('../../statics/cdn/banner-s-3-7123fd94750759acf7eca05b871e9d17.png')
const img2 = require('../../statics/cdn/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png')
const img3 = require('../../statics/cdn/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png')

class Home extends PureComponent{
	componentDidMount(){
		this.props.getHomeData();
		this.bindEvents();
	}
	bindEvents = () =>{
		window.addEventListener('scroll',this.props.changeScrollShow);
	};
	goTop = ()=>{
		window.scrollTo(0,0);
	};
	render(){
		let {topic,info,ad,author,page,isShow,loadMore,totalPage} = this.props;
		const adver = [
				{
					"id": 1,
					"imgUrl": img1
				},
				{
					"id": 2,
					"imgUrl": img2
				},
				{
					"id": 3,
					"imgUrl": img3
				}
			]
		const authorinfo = [
			{
				"id": 1,
				"imgUrl": "//upload.jianshu.io/users/upload_avatars/3343569/93161bfa-dda9-49ee-88e1-a85ec4227232.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
				"name" : "马云",
				"desc" : "写了530.5k code · 11.7k star"
			},
			{
				"id": 2,
				"imgUrl": "//upload.jianshu.io/users/upload_avatars/3343569/93161bfa-dda9-49ee-88e1-a85ec4227232.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
				"name" : "张一鸣",
				"desc" : "写了530.5k code · 11.7k star"
			},
			{
				"id": 3,
				"imgUrl": "//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
				"name" : "李彦宏",
				"desc" : "写了530.5k code · 11.7k star"
			},
			{
				"id": 4,
				"imgUrl": "//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
				"name" : "马化腾",
				"desc" : "写了530.5k code · 11.7k star"
			}
		]
		return (
			<HomeWrapper className='clearfix'>
				<HomeLeft>
					<img width="600" src="//upload.jianshu.io/admin_banners/web_images/4351/ffe1a5887adb88081cbea7e851ecbc77fa208015.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
					{/*<Topic topic={topic}></Topic>*/}
					<Info info={info}></Info>
					<More onClick={()=>this.props.loadNextJob("",page,totalPage)}>加载更多</More>
				</HomeLeft>
				<HomeRight>
					<Ad ad={adver}></Ad>
					<Author author={authorinfo}></Author>
				</HomeRight>
				{
					isShow?<GoTop onClick={this.goTop}> goTop </GoTop>:null
				}
			</HomeWrapper>
		);
	}
}

const mapState = (state) => {
	return {
		topic : state.getIn(['Home','topic']),
		info : state.getIn(['Home','info']),
		ad : state.getIn(['Home','ad']),
		author : state.getIn(['Home','author']),
		page : state.getIn(['Home','page']),
		totalPage : state.getIn(['Home','totalPage']),
		isShow : state.getIn(['Home','isShow'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getHomeData(){
			dispatch(ActionCreators.getHomeData());
		},
		loadMore(page){
			dispatch(ActionCreators.getNextPage(page + 1));
		},
		changeScrollShow(){
			if(document.documentElement.scrollTop > 300){
				dispatch(ActionCreators.changeShow(true))
			}else{
				dispatch(ActionCreators.changeShow(false))
			}
			
		},
		loadNextJob(keyword,page,totalPage){
			if(page<totalPage){
				dispatch(ActionCreator.getNextJob(keyword,page+1))
			}else{
				console.log("123")
				message.info("无更多职位")
			}
		}
	}
}

export default connect(mapState,mapDispatch)(Home);