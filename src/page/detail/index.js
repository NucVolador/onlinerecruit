import React,{Component} from 'react';
import { connect } from 'react-redux';
import { DetailWrapper,Header,Content } from './style';
import {ActionCreators} from './store'

class Detail extends Component{
    componentWillMount(){
		console.log(this.props.match.params.id);
	
		this.props.getContent(this.props.match.params.id)
    }
    render(){
        const {title,content} = this.props;
        console.log(content,"1111111")
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html : content}}>
                </Content>
            </DetailWrapper>
        );
    }
}

const mapState = (state) => {
    return {
        title : state.getIn(['Detail','title']),
        content : state.getIn(['Detail','content'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getContent(id){
            dispatch(ActionCreators.getContent(id));
        }
    }
}

export default connect(mapState,mapDispatch)(Detail);