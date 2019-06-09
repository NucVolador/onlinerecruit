import React from 'react'
import { Row,Col } from "antd"
import {WrapperContainer} from './style';
import Util from '../../utils/utils'
import axios from '../../common/otherAxios'
import { connect } from 'react-redux';
import * as LoginAction from "../../page/login/store/actionCreator";
import PropTypes from 'prop-types'

let timer = null
class Header extends React.Component{
	static contextTypes = {
		router: PropTypes.object
	}
    state={}
    componentWillMount(){
        this.setState({
            userName:'企业HR'
        })
        timer = setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }
    componentWillUnmount(){
	    clearInterval(timer)
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){
        const menuType = this.props.menuType;
        return (
            <WrapperContainer>
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?
                            <Col span={6} className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>IMooc 通用管理系统</span>
                            </Col>:''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="javascript:;" onClick={()=>{
							this.props.logout();
							this.context.router.history.push('/login');
						}}>退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb-title"
								style={{
									textAlign: "center",
									fontSize: "18px"
								}}
							>
                                { this.props.menuName }
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                }
            </div>
			</WrapperContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuName: state.getIn(['Admin','menuName']),
		is_admin_login: state.getIn(['Login','is_admin_login']),
    }
}

const mapDispatch = dispatch =>{
    return {
		logout(){
			dispatch(LoginAction.logout());
		}
    }
}
export default connect(mapStateToProps,mapDispatch)(Header);