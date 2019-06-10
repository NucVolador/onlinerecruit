import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width:1092px;
    padding: 34px 0 0;
    background: #f2f5f4;
    margin:0 auto;
    padding-bottom:100px;
    // background:red;
    a {
    color: #555;
    background-color: transparent;
    text-decoration: none;
}
    .company{
        margin: -2px 0 8px 0;
		font-size: 14px;
		color: #555;
		position: relative;
		left: 2px;
    }
    .top_info .top_info_wrap {
    position: relative;
    width: 1024px;
    height: 164px;
    margin: 0 auto;
    border: 1px solid #eaeaea;
    background: #fff;
}
    .top_info {
		padding: 34px;
		background: #f2f5f4;
	}
	.top_info .top_info_wrap img {
		position: absolute;
		top: 0;
		left: 0;
		width: 164px;
		height: 164px;
		border-right: 1px solid #eaeaea;
	}
	
	img {
		border: 0;
		vertical-align: top;
		display: inline-block;
	}
	.company_main {
		position: relative;
		height: 81px;
		padding: 20px 20px 0;
	}
	.company_main .icon-wrap i {
    float: left;
    width: 14px;
    height: 12px;
    margin: 10px 8px 0 5px;
    background: url(//www.lgstatic.com/www/static/company-c/modules/common/img/icons1_b3ea05c.png) no-repeat 0 0;
    cursor: pointer;
}
.company_main .identification {
    position: relative;
    top: 7px;
    padding: 5px 10px;
    margin-left: 6px;
    color: #fff;
    // background: #00b38a;
    cursor: pointer;
    // border: 1px solid #00b38a;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    border-radius: 20px;
}
	.company_main .company_word {
		margin-top: 20px;
		font-size: 14px;
		clear: both;
		text-indent:19px;
	overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;  //将对象作为弹性伸缩盒子模型显示。
  -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
  -webkit-line-clamp:4; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。此处为2行
  word-wrap: break-word;
	}
	.top_info .top_info_wrap .company_info {
    margin-left: 165px;
}
.company_main h1 a {
    line-height: 33px;
}
.company_main .company_word {
    margin-top: 20px;
    font-size: 14px;
    clear: both;
    color: #aaa;
}
.company_main h1 {
    float: left;
    max-width: 350px;
    max-height: 33px;
    padding-right: 2px;
    margin: 0;
    line-height: 33px;
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.job_container{
	position: relative;
		padding-top: 26px;
		width: 696px;
    background: url(//www.lgstatic.com/www/static/job-detail/page/index/img/gradient_e624ed8.png) repeat-y;
    background-position: right;
    padding-right: 52px;
    padding-top: 26px;
    margin: 0 auto;
}

.center{

	padding: 34px;
    background: #f2f5f4;
}

.center_content{
    position: relative;
    width: 1024px;
    // height: 164px;
    margin: 0 auto;
    border: 1px solid #eaeaea;
    background: #fff;
}

.job-advantage{
    padding: 15px 0 10px 30px;
    color: #333;
    word-wrap: break-word;
}

.job-advantage .advantage {
    font-size: 16px;
    color: #333;
    font-weight: 700;
}

.job-advantage p {
    margin-top: 13px;
    color: #333;
    margin-bottom:0;
    color: #333;
    // line-height: 36px;
}

















`;

export const Header = styled.div`
    margin:50px 0 20px;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`;

export const Content = styled.div`
    color:#2f2f2f;
    img{
        width:100%;
    }
    p{
        margin:25px 0;
        font-size:16px;
        line-height:30px;
    }
    b{
        font-weight:bold;
    }
`;