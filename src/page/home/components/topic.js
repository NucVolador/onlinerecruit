import React from 'react';
import {TopicWrapper} from '../style'

const Topic = ({topic}) => {
    return (
        <TopicWrapper>
            {
                topic.map(item => (
                    <a key={item.get('id')}>
                        <img src={item.get('imgUrl')} alt=""/>
                        <span>{item.get('name')}</span>
                    </a>
                ))
            }
            <a>更多热门专题<i></i></a>
        </TopicWrapper>
    );
}

export default Topic;