import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from '../../page/admin/store/actionCreator'
import MenuConfig from './../../config/menuConfig'
import {WrapperContainer} from './style'

import {ActionCreator} from "../../page/admin/store"

const logo_ant = require("../../statics/images/logo-ant.svg");

const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
    state = {
        currentKey:''
    }
    handleClick = ({ item ,key})=>{
		this.props.switchMenu(item.props.title)
        this.setState({
            currentKey:key
        })
    }
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        console.log(window.location.pathname,"hash")
        let currentKey = window.location.pathname
        console.log(currentKey,"key")
        this.setState({
            currentKey,
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <WrapperContainer>
            <div>
                <div style={{lineHeight:"90px", paddingLeft: "20px",
				    backgroundColor: "#002140"}}>
                    <img height="35" src={logo_ant} alt=""/>
                    <h1 style={{
						color: "#ffffff",
						fontSize: "20px",
						display: "inline-block",
						verticalAlign: "middle",
						margin: "0 0 0 10px",
                    }}>在线招聘网</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={this.state.currentKey}
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
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
		switchMenu(title){
		    dispatch(ActionCreator.switchMenu(title))
        }
		// getContent(id){
		// 	dispatch(ActionCreators.getContent(id));
		// }
	}
}
export default connect(mapState,mapDispatch)(NavLeft);