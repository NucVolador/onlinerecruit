import React,{Component} from 'react';
import { connect } from 'react-redux';
import { DetailWrapper,Header,Content } from './style';
import {ActionCreators} from './store'
import { Button } from 'antd';

class Detail extends Component{
    componentWillMount(){
		console.log("aaa");
	    
		// this.props.getContent(this.props.location.search)
    }
    render(){
		// let content = JSON.parse(decodeURI(this.props.match.params.info));
		console.log(this.props.location.search.substr(3));
		let content = JSON.parse(decodeURI(this.props.location.search.substr(3)));
		console.log(content);
		let {company,jobName,jobDescription,_id,ownerId} = content;
        return (
            <DetailWrapper>
				<div className="top_info">
					<div className="top_info_wrap">
						<img src={company.avatar} alt="字节跳动Logo" width="164" heihgt="164"/>
                        <div className="company_info">
                            <div className="company_main">
                                <h1>
                                    <a href="http://www.bytedance.com" className="hovertips" target="_blank"
                                       rel="nofollow" title={"北京"+company.companyName+"有限公司"}>
										{company.companyName}
                                    </a>
                                </h1>
                                <a href="http://www.bytedance.com" className="icon-wrap" target="_blank"
                                   rel="nofollow" title="http://www.bytedance.com">
                                    <i></i>
                                </a>
								<a className="identification tipsys"
								   original-title="已完成资质认证，并完善了更优质的公司主页信息（以上信息由天眼查提供技术支持）">
									<i></i>
									<span></span>
								</a>
                                <div className="company_word">
									{company.introduce}
                                </div>
                            </div>
                        </div>
							{/*<i className="company_icon_dsz"*/}
							   {/*style="background-image: url(&quot;https://www.lgstatic.com/i/image2/M01/BD/86/CgoB5lwjF4yAcs7pAADXN0VHHfw084.png&quot;);"></i>*/}
                    </div>
				</div>
				{/*<div className="company">字节跳动招聘</div>*/}
				{/*<Header>招聘</Header>*/}
                {/*<Content dangerouslySetInnerHTML={{__html : content}}>*/}
                {/*</Content>*/}
               <div className="center">
                   <div className="center_content">
					   <div className="job-advantage">
						   <span className="advantage" style={{marginLeft:"15px"}}>职位名称</span>
						   <p style={{marginLeft:"15px",fontSize:"22px"}}>{jobName.split(" ")[0]+(jobName.split(" ")[1]?" —— "+jobName.split(" ")[1]:"")}</p>
						   <p style={{marginLeft:"15px",fontSize:"22px"}}></p>
					   </div>
					   <div className="job-advantage">
						   <span className="advantage" style={{marginLeft:"15px"}}>公司福利</span>
						   <p>
                               {
                                   company.special
									   .split("\n")
									   .map((item, index, arr) =>
										    <span className="kuang" style={{color: "#ec6149",marginLeft:"15px"}}>
                                                    {item}
                                            </span>
									   )
                               }
                           </p>
					   </div>
					   <div className="job-advantage">
						   <span className="advantage" style={{marginLeft:"15px"}}>职位描述</span>
						   <p style={{marginLeft:"15px"}}    dangerouslySetInnerHTML={{__html: jobDescription.replace(/\n/g,"<br/>")}} />
					   </div>
						<div className="job-advantage">
							<p style={{marginLeft:"15px",textAlign:"center"}}>
								<Button
									type="primary"
									size={"large"}
									onClick={()=>{
										this.postResume({
											userId:this.props.userId,
											jobId:_id,
											jobName,
											createJobId:ownerId
										})
									}}
								>我要投递</Button>
							</p>
						</div>
                   </div>
               </div>
            </DetailWrapper>
        );
    }
    postResume(obj){
    	this.props.toudi(obj)
	}
}

const mapState = (state) => {
    return {
        title : state.getIn(['Detail','title']),
		content : state.getIn(['Detail','content']),
		userId : state.getIn(['Login','userId'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getContent(info){
            dispatch(ActionCreators.getContent(info));
        },
		toudi(obj){
        	return dispatch(ActionCreators.toudi(obj))
		}
    }
}

export default connect(mapState,mapDispatch)(Detail);