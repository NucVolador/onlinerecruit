import React from 'react';
import {AdWrapper} from '../style'

const Ad = ({ad}) => {
    return (
        <AdWrapper>
            {
                ad.map(item => (
                    <a key={item.get('id')}>
                        <img src={item.get('imgUrl')} alt=""/>
                    </a>
                ))
            }
        </AdWrapper>
    );
}

export default Ad;