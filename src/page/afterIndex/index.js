import React from 'react'
import {Wrapper} from './style'
export default class Home extends React.Component{

    render(){
        return (
			<Wrapper>
				<div className="home-wrap">
					欢迎使用在线招聘系统
				</div>
            </Wrapper>
        );
    }
}