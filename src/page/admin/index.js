import React from 'react'
import { Row,Col } from 'antd';
import Header from '../../component/header2'
import Footer from '../../component/Footer'
import NavLeft from '../../component/NavLeft'
import {WrapperContainer} from './style/common'
import { connect } from 'react-redux';
import {ActionCreators} from "../detail/store";
import { Redirect } from 'react-router-dom';


 class Admin extends React.Component{

    render(){
		console.log(this.props.is_admin_login,"ogin");
		if(!this.props.is_admin_login){
            return <Redirect to="/login"/>
        }
        return (
            <WrapperContainer>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span={20} className="main">
                        <Header/>
                        <Row className="content">
                            {/* <Home/> */}
                            {this.props.children}
                        </Row>
                        <Footer/>
                    </Col>
                </Row>
			</WrapperContainer>
        );
    }
}

const mapState = (state) => {
	return {
		is_admin_login : state.getIn(['Login','is_admin_login']),
	}
}

const mapDispatch = (dispatch) => {
	return {
		// getContent(id){
		// 	dispatch(ActionCreators.getContent(id));
		// }
	}
}

export default connect(mapState,mapDispatch)(Admin);