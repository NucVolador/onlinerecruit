import React,{PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {
    actionCreators,
} from './store';
import {
    HeaderWrapper,
    HeaderContent,
    Logo,
    Register,
    ContentMain,
    SearchInput,
    SearchInfo,
    SearchTitle,
    SearchList,
    SearchItem
} from './style'
import {Link} from 'react-router-dom';

import {Button} from 'antd'

import {CSSTransition} from 'react-transition-group';
import LogoPic from '../../statics/images/logo.png';
import {ActionCreator} from "../../page/searchlist/store";

import * as LoginAction from "../../page/login/store/actionCreator"

class Header extends PureComponent{
 static contextTypes = {
	 router: PropTypes.object
 }
    render(){
        const {focused,list,mouseIn,page,totalPage,is_login,keyword,city,job,workLife,
            handleFocus,handleBlur,handleChangePage,handleMouseEnter,handleMouseLeave} = this.props;
            // console.log(list)
		console.log(city);
		let newList = list.toJS();
        let currentList = [];
        if(newList.length){
            for(let i = (page -1) * 10;i < page * 10;i++){
                if(newList[i]){
                    currentList.push(newList[i])
                }
                continue;
            }
        }

        return (
            <HeaderWrapper>
                <HeaderContent>
                    <Logo href="/">
                        <img src={LogoPic} alt=""/>
                    </Logo>
                    <Register>
                        {/*<a>*/}
                            {/*<i className="iconfont">&#xe615;</i>*/}
                            {/*联系我们*/}
                        {/*</a>*/}
                        {
							is_login?
                                <Fragment>
									<Link to="/resume">我的简历</Link>
                                    <Link to="/applied_job" className="toudi">投递箱</Link>
                                    <Button className='logout'
                                            onClick={()=>{
                                                this.props.logout();
												this.context.router.history.push('/login');
                                            }}
                                    >
                                        登出
                                    </Button>
                                </Fragment>
                                :
                                <Link to="/login">登录</Link>
                        }
                    </Register>
                    <ContentMain>
                        <div className="left">
                            <Link to='/'>首页</Link>
							<a ></a>
                        </div>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={5000}
                            classNames={`fade`}
                        >
                            <SearchInput
                                onFocus={() => handleFocus(list)}
                                onBlur={handleBlur}
                                
                            >
                                <input type="text" className={focused ? 'focused':''} value={keyword} onChange={()=>this.props.handleKeywordChange(window.event.target.value)} />
									<i className={focused ? 'focused iconfont':'iconfont'}
									   style={{ cursor: "pointer"}}
									   onClick={
										   ()=>{
											   // this.props.query(job);
											   // this.context.router.history.push(`/searchlist?keyword=${keyword}&city=${city}&job=${job}&workLife=${workLife}`);
											   this.context.router.history.push(`/searchlist?keyword=${keyword}`);
											   // console.log(this.props);
										   }
									   }
									>&#xe64d;</i>
                                
                                <SearchInfo className={ (focused || mouseIn)? 'show':''}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SearchTitle>
                                        热门搜索
                                        <a onClick={() => {handleChangePage(page,totalPage,this.icon)}}
                                        >
                                            <i ref={(icon) => this.icon = icon}
                                                className="iconfont">
                                                &#xe851;
                                            </i>
                                            换一批
                                        </a>
                                    </SearchTitle>
                                    <SearchList>
                                        {currentList.map((item) => {
                                            return <SearchItem
                                                        key={item}
                                                        onClick={
                                                           ()=>{
                                                                this.props.handleKeywordChange(item)
                                                                 // this.props.query(item);
                                                                 // this.context.router.history.push(`/searchlist?keyword=${item}&city=${city}&job=${job}&workLife=${workLife}`);
                                                               this.context.router.history.push(`/searchlist?keyword=${item}`);
            
                                                               // console.log(this.props);
                                                           }
                                                       }
                                                    >
                                                        {item}
                                                    </SearchItem>
                                        })}
                                    </SearchList>
                                </SearchInfo>
                            </SearchInput>
                        </CSSTransition>
                    </ContentMain>
                </HeaderContent>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused : state.getIn(['Header','focused']),
        list : state.getIn(['Header','list']),
        mouseIn : state.getIn(['Header','mouseIn']),
        page : state.getIn(['Header','page']),
        totalPage : state.getIn(['Header','totalPage']),
		is_login: state.getIn(['Login','is_login']),
        keyword: state.getIn(['Header','keyword']),
		city: state.getIn(['SearchList','city']),
		job:state.getIn(['SearchList','job']),
		workLife:state.getIn(['SearchList','workLife'])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list){
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.focusChange(true))
        },
        handleBlur(){
            dispatch(actionCreators.focusChange(false))
        },
        handleChangePage(page,totalPage,icon){
            let originAngle = icon.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            
            icon.style.transform = `rotate(${originAngle + 360}deg)`;

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },
        handleMouseEnter(){
            dispatch(actionCreators.changeMouseIn(true))
        },
        handleMouseLeave(){
            dispatch(actionCreators.changeMouseIn(false))
        },
        handleKeywordChange(value){
            // console.log(value)
			dispatch(actionCreators.changeKeyword(value));
        },
		query(page){
			dispatch(ActionCreator.getNextPage2(page));
		},
        logout(){
            dispatch(LoginAction.logout());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);