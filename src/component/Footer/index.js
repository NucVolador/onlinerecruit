import React from 'react'
import {WrapperContainer} from './style'
export default class Footer extends React.Component {
    render() {
        return (
            <WrapperContainer>
            <div className="footer">
               版权所有：仅供此次毕业设计（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：杜玉荣
            </div>
			</WrapperContainer>
        );
    }
}