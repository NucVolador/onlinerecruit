import styled from 'styled-components';

export const SearchListWrapper = styled.div`
    width: 960px;
    padding: 15px;
    margin: 80px auto 0;
    background-color:rgb(238,238,238);
`

export const SearchConditionWrapper = styled.div`
	border: 1px solid #E3EBE9;
	// padding: 50px 140px;
	// background: #FAFAFA;
	border-radius: 5px 5px 0 0;
	margin-bottom:20px;
	li{
		list-style:none;
	}
	.condition{
		zoom: 1;
    	color: #555;
	    padding: 6px 16px;
		padding-bottom: 10px;
    	margin-top: -4px;
	}
	.conditionItem{
		color: #555;
		background-color: transparent;
		text-decoration: none;
		float: left;
		margin-right: 5px;
		padding: 5px 8px;
		margin-top:5px;
		line-height: 14px;
	}
	.conditionItem:hover{
		background-color: #ffc300;
    	color: #fff;
	}
	.active{
		background-color: #ffc300;
		color: #fff;
	}
	.conditionName{
		float: left;
		margin-right: 5px;
		padding: 5px 8px;
		margin-top:5px;
		line-height: 14px;
		font-weight: 600;
	}
`

export const InfoWrapper = styled.div`
    > div{
        background-color: rgb(238,238,238);
        position: relative;
        width: 100%;
        margin: 15px 0 ;
        padding: 15px;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
    }
    > div >div > a{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 15px;
        width: 125px;
        height: 100px;
    }
    
    > div >div > a img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`;

export const ContentWrapper = styled.div`
    margin-right:140px;
    padding:20px;
    // padding-bottom:20px;
    // background-color:#fff;
    .title{
        margin: -7px 0 4px;
        display: inline-block;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .left{
    	text-align:left;
    }
    .right{
    	text-align:right;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const Meta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
    a{
        margin-right: 10px;
        color: #b4b4b4;
    }
    span{
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
`;


export const More = styled.a`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display:block;
    box-sizing: border-box;
    transition:all 0.25s;
    &:hover{
		color: rgba(255,255,255,.8);
		background-color: rgba(145,145,145,1);
    }
`;
