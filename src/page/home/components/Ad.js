import React from 'react';
import {AdWrapper} from '../style'

const Ad = ({ad}) => {
    return (
        <AdWrapper>
            {
                ad.map(item => (
                    <a key={item.id}>
                        <img src={item.imgUrl} alt=""/>
                    </a>
                ))
            }
        </AdWrapper>
    );
}

export default Ad;