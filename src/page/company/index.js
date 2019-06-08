import React,{ PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	ActionCreator,
} from './store';
class Company extends PureComponent{
    render(){
		const {is_admin_login} = this.props;
		if(!is_admin_login){
			return (<Redirect to='/login'/>)
		}
		return (
		    <h1>Company</h1>
        )
	}
}

const mapState = (state) => ({
	is_admin_login: state.getIn(['Login','is_admin_login'])
})

const mapDispatch = (dispatch) => ({
	// login(username, password){
	// 	dispatch(ActionCreator.login(username, password))
	// }
})

export default connect(mapState, mapDispatch)(Company);