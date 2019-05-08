import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
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

import {CSSTransition} from 'react-transition-group';
import LogoPic from '../../statics/images/logo.png';

class Header extends PureComponent{
    render(){
        const {focused,list,mouseIn,page,totalPage,
            handleFocus,handleBlur,handleChangePage,handleMouseEnter,handleMouseLeave} = this.props;
            console.log(list)
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
                    <Logo>
                        <img src={LogoPic} alt=""/>
                    </Logo>
                    <Register>
                        <a >注册</a>
                        <a >
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </a>
                    </Register>
                    <ContentMain>
                        <div className='right'>
                            <a >
                                <i className="iconfont">&#xe636;</i>
                            </a>
                            <a >登录</a>
                        </div>
                        <div className="left">
                            <a >首页</a>
                            <a >下载App</a>
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
                                <input type="text" className={focused ? 'focused':''} />
                                <i className={focused ? 'focused iconfont':'iconfont'}>&#xe64d;</i>
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
                                            return <SearchItem key={item}>{item}</SearchItem>
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
        totalPage : state.getIn(['Header','totalPage'])
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
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);