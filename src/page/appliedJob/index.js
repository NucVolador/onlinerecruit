import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
import { SearchListWrapper,InfoWrapper,ContentWrapper,Meta } from './style'
class Resume extends PureComponent{
	componentDidMount(){
		console.log(this.props.userId,"userID")
		if(this.props.userId){
			this.props.getData(this.props.userId)
		}
	}
    render(){
		let {is_login,info} = this.props;
		if(!is_login){
			return (<Redirect to='/login'/>)
		}
		console.log(info,"info")
		let a = 1;
		return (
			<SearchListWrapper>
				<InfoWrapper>
					{
						info.map(item => {
							console.log(item.get('jobName'),"aaa");
							return (
								<div key={a++}>
									<div style={{    backgroundColor: "#fff",
										position: "relative"}}>
										<ContentWrapper>
											<a className='title'
											   href={"/detail?a=" + encodeURI(JSON.stringify(item.toJS()))}>{item.get('jobName').split(" ")[0]}——{item.get('state') === "0" ? "未筛选":""}{item.get('state') === "1" ? "面试中":""}{item.get('state') === "2" ? "已通过":""}{item.get('state') === "3" ? "已淘汰":""}</a>
										</ContentWrapper>
									</div>
								</div>
							)
						})
					}
				</InfoWrapper>
			</SearchListWrapper>
        )
	}
}

const mapState = (state) => ({
	is_login: state.getIn(['Login','is_login']),
	userId: state.getIn(['Login','userId']),
	info: state.getIn(['AppliedJob','info'])
})

const mapDispatch = (dispatch) => ({
	getData(userId){
		dispatch(ActionCreator.getState(userId))
	}
})

export default connect(mapState, mapDispatch)(Resume);