import React from 'react';
import {InfoWrapper,ContentWrapper,Meta} from '../style';
import { NavLink } from 'react-router-dom'

const Info = ({info}) => {
	var a = 1;
	
	return (
		<InfoWrapper>
			{
				info.map(item => {
					console.log(item.get('jobName'),"aaa");
					return (
						<div key={a++}>
                            <div style={{    backgroundColor: "#fff",
								position: "relative"}}>
                                <NavLink to={"/detail?a=" + encodeURI(JSON.stringify(item.toJS()))}>
                                    <img src={item.getIn(['company', 'avatar'])} alt=""/>
                                </NavLink>
                                <ContentWrapper>
                                    <NavLink className='title'
                                       to={"/detail?a=" + encodeURI(JSON.stringify(item.toJS()))}>{item.get('jobName').split(" ")[0]}</NavLink>
                                    <p >{item.get('jobName').split(" ")[1]}</p>
                                    <NavLink to={"/detail?a=" + encodeURI(JSON.stringify(item.toJS()))}>
                                        <p className='desc'>{item.getIn(['company', 'introduce'])}</p>
                                    </NavLink>
                                    <Meta>
                                        {/*<a></a>*/}
                                        {/*<a>{item.getIn(['meta','zan'])}</a>*/}
                                        <span>公司福利： </span>
                                        {
                                            item.getIn(['company', 'special'])
                                                .split("\n")
                                                .map((item, index, arr) =>
                                                    <span className="kuang">
                                                        {item}
                                                    </span>
                                                )
                                        }
                                        <span> </span>
                                    </Meta>
                                </ContentWrapper>
							</div>
						</div>
					)
				})
			}
		</InfoWrapper>
	);
};

export default Info;