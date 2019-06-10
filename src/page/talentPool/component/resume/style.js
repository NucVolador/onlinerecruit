import styled from 'styled-components';

export const ResumeWrapper = styled.div`
    width: 870px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 35px auto 0;
    padding-bottom: 80px;
    .addResume{
		border: 1px solid #E3EBE9;
		padding: 200px 100px;
		background: #FAFAFA;
		border-radius: 5px 5px 0 0;
		text-align: center;
		letter-spacing: 2px;
		font-size: 26px;
		& > a{
			color: rgb(255,195,0);
		}
    }
`
export const AddInfoContentWrapper = styled.div`
	border: 1px solid #E3EBE9;
	padding: 50px 140px;
	background: #FAFAFA;
	border-radius: 5px 5px 0 0;
	margin-bottom:15px;
`

export const AddInfoTitle = styled.h2`
	// font-size: 18px;
	// padding-bottom: 20px;
	// color:#000;
	// font-weight:400;
	// text-align:left;
	padding-bottom: 5px;
    _padding-bottom: 11px;
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
    color: #656565;
    border-bottom: 1px solid #3887bc;
    margin-bottom:15px;
`;