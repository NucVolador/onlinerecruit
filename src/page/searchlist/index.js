import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
import {
	SearchListWrapper,
	SearchConditionWrapper,
	More
} from './style';

import Info from './components/Info';


class SearchList extends PureComponent{
	state={
		conditions : [
			{
				name: '城市',
				data:[
					{
						active:true,
						value:""
					},
					{
						active:false,
						value:"北京"
					},{
						active:false,
						value:"上海"
					},{
						active:false,
						value:"深圳"
					},{
						active:false,
						value:"广州"
					},{
						active:false,
						value:"成都"
					},{
						active:false,
						value:"太原"
					},{
						active:false,
						value:"武汉"
					}
				]
			},
			{
				name: '职位',
				data:[
					{
						active:true,
						value:""
					},{
						active:false,
						value:"前端开发"
					},{
						active:false,
						value:"JAVA开发"
					},{
						active:false,
						value:"PHP开发"
					},{
						active:false,
						value:"Node开发"
					},{
						active:false,
						value:"产品经理"
					},{
						active:false,
						value:"市场运营"
					}
				]
			},
			{
				name: '工作年限',
				data:[
					{
						active:true,
						value:""
					},{
						active:false,
						value:"实习生"
					},{
						active:false,
						value:"应届生"
					},{
						active:false,
						value:"1年以内"
					},{
						active:false,
						value:"3年以内"
					}
				]
			}
		]
	}
    render(){
		const {conditions:conditions1} = this.state
		let conditions = JSON.parse(JSON.stringify(conditions1))
		const {is_login} = this.props;
		if(!is_login){
			return (<Redirect to='/login'/>)
		}
		let {info,loadMore,job} = this.props;
		return (
			<SearchListWrapper>
				<SearchConditionWrapper>
					{
						conditions.map((item,index)=>
							<li key={index} className={"condition clearfix"}>
								<span className="conditionName"style={{float:"left",minWidth:"100px",fontWeight:"600"}}>{item.name}：</span>
								{item.data.map((nextItem,nextIndex)=>
									<a key={nextIndex}
									   onClick={()=>{
										   // this.setState({
											//    conditions
										   // })item.data
										   console.log(nextIndex,index)
										   conditions.map((item1,index1)=>{
										   		if(index1!==index) return ;
										   		item1.data.map((item2,idx2)=>{
										   			item2.active= false;
										   			if(index1===index && idx2===nextIndex){
										   				item2.active=true
													}
												})
										   })
										   this.setState({conditions})
										   switch (item.name){
											   case "城市":
													this.props.modifyCity(nextItem.value)
													break;
											   case "职位":
												   this.props.modifyJob(nextItem.value)
												   break;
											   case "工作年限":
												   this.props.modifyWorkLife(nextItem.value)
												   break;
										   }
									   }}
									   className={nextItem.active ?"active conditionItem":"conditionItem"}>
										{nextItem.value?nextItem.value:"不限"}
									</a>
								)}
							</li>
						)
					}
				</SearchConditionWrapper>
				<Info info={info}></Info>
				<More onClick={()=>loadMore(job)}>加载更多</More>
			</SearchListWrapper>
        )
	}
}

const mapState = (state) => ({
	is_login: state.getIn(['Login','is_login']),
	info: state.getIn(['SearchList','info']),
	keyword: state.getIn(['Header','keyword']),
	city: state.getIn(['SearchList','city']),
	job:state.getIn(['SearchList','job']),
	workLife:state.getIn(['SearchList','workLife'])
})

const mapDispatch = (dispatch) => ({
	// login(username, password){
	// 	dispatch(ActionCreator.login(username, password))
	// }
	modifyCity(value){
		dispatch(ActionCreator.changeCity(value))
	},
	modifyJob(value){
		dispatch(ActionCreator.changeJob(value))
	},
	modifyWorkLife(value){
		dispatch(ActionCreator.changeWorkLife(value))
	},
	loadMore(page){
		dispatch(ActionCreator.getNextPage(page));
	},
	query(page){
		dispatch(ActionCreator.getNextPage2(page));
	}
})

export default connect(mapState, mapDispatch)(SearchList);