import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
class Resume extends PureComponent{
    render(){
		const {is_login} = this.props;
		if(!is_login){
			return (<Redirect to='/login'/>)
		}
		return (
		    <h1>HelloWorld</h1>
        )
	}
}

const mapState = (state) => ({
	is_login: state.getIn(['Login','is_login'])
})

const mapDispatch = (dispatch) => ({
	// login(username, password){
	// 	dispatch(ActionCreator.login(username, password))
	// }
})

export default connect(mapState, mapDispatch)(Resume);