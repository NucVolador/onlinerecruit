import React from 'react';
import {AuthorWrapper,AuthorTitle,AuthorList,MoreAuthor} from '../style';

const Author = ({author}) => {
    return (
        <AuthorWrapper>
            <AuthorTitle>
                <span>推荐人物</span>
                <a>
                    <i className="iconfont">
                        &#xe851;
                    </i>
                    换一批
                </a>
            </AuthorTitle>
            <AuthorList>
                {
                    author.map(item => (
                        <li key={item.get('id')}>
                            <a className='avatar'>
                                <img src={item.get('imgUrl')} alt=""/>
                            </a>
                            <a className='follow'></a>
                            <a className='name'>{item.get('name')}</a>
                            <p>{item.get('desc')}</p>
                        </li>
                    ))
                }
            </AuthorList>
            <MoreAuthor>
                查看全部
            </MoreAuthor>
        </AuthorWrapper>
    );
}

export default Author;