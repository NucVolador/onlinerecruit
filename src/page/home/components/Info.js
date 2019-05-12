import React from 'react';
import {InfoWrapper,ContentWrapper,Meta} from '../style';

const Info = ({info}) => {
    var a = 1;
    return (
        <InfoWrapper>
            {
                info.map(item => (
                    <div key={a++}>
                        <a>
                            <img src={item.get('imgUrl')} alt=""/>
                        </a>
                        <ContentWrapper>
                            <a className='title'>{item.get('title')}</a>
                            <p className='desc'>{item.get('desc')}</p>
                            <Meta>
                                <a>{item.getIn(['meta','name'])}</a>
                                <a>{item.getIn(['meta','zan'])}</a>
                                <span>{item.getIn(['meta','guanzhu'])}</span>
                                <span> {item.getIn(['meta','zhuanfa'])}</span>
                            </Meta>
                        </ContentWrapper>
                    </div>
                ))
            }
        </InfoWrapper>
    );
};

export default Info;