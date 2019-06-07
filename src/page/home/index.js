import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { HomeWrapper,HomeLeft,HomeRight,More,GoTop } from './style';
import Topic from './components/topic';
import Info from './components/Info';
import Ad from './components/Ad';
import Author from './components/Author';
import { ActionCreators } from './store'

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
		let {topic,info,ad,author,page,isShow,loadMore} = this.props;
		return (
			<HomeWrapper className='clearfix'>
				<HomeLeft>
					<img width="600" src="//upload.jianshu.io/admin_banners/web_images/4351/ffe1a5887adb88081cbea7e851ecbc77fa208015.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
					{/*<Topic topic={topic}></Topic>*/}
					<Info info={info}></Info>
					<More onClick={()=>loadMore(page)}>加载更多</More>
				</HomeLeft>
				<HomeRight>
					<Ad ad={ad}></Ad>
					<Author author={author}></Author>
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
			
		}
	}
}

export default connect(mapState,mapDispatch)(Home);