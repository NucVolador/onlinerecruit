import React,{Component,Fragment} from 'react';
import Axios from "../../../../../../common/http"
import reqwest from 'reqwest';

import { Upload, Icon, message, Button } from 'antd'

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}


// class Avatar extends React.Component {
// 	state = {
// 		fileList: [],
// 		loading: false,
// 	};
//
// 	beforeUpload = (file) =>{
// 		const isJPG = file.type === 'image/jpeg';
// 		if (!isJPG) {
// 			message.error('只支持jpg文件');
// 		}
// 		const isLt2M = file.size / 1024 / 1024 < 2;
// 		if (!isLt2M) {
// 			message.error('图片必须小于2M');
// 		}
// 		const { fileList } = this.state;
// 		const formData = new FormData();
// 		fileList.forEach(file => {
// 			formData.append('files[]', file);
// 		});
//
// 		this.setState({
// 			uploading: true,
// 		});
//
// 		// You can use any AJAX library you like
// 		Reqwest({
// 			url: '/api/avatar',
// 			method: 'post',
// 			processData: false,
// 			data: formData,
// 			success: () => {
// 				// this.setState({
// 				// 	fileList: [],
// 				// 	uploading: false,
// 				// });
// 				message.success('upload successfully.');
// 			},
// 			error: () => {
// 				this.setState({
// 					uploading: false,
// 				});
// 				message.error('upload failed.');
// 			},
// 		});
//
// 		return true;
// 	}
//
// 	handleChange = info => {
// 		if (info.file.status === 'uploading') {
// 			this.setState({ loading: true });
// 			return;
// 		}
// 		if (info.file.status === 'done') {
// 			// Get this url from response in real world.
// 			getBase64(info.file.originFileObj, imageUrl =>
// 				this.setState({
// 					imageUrl,
// 					loading: false,
// 				}),
// 			);
// 		}
// 	};
//
// 	render() {
// 		const uploadButton = (
// 			<div>
// 				<Icon type={this.state.loading ? 'loading' : 'plus'} />
// 				<div className="ant-upload-text">Upload</div>
// 			</div>
// 		);
// 		const imageUrl = this.state.imageUrl;
// 		return (
// 			<Fragment>
// 				<Upload
// 					name="avatar"
// 					listType="picture-card"
// 					className="avatar-uploader"
// 					showUploadList={false}
// 					action="/api/avatar"
// 					beforeUpload={this.beforeUpload}
// 					onChange={this.handleChange}
// 				>
// 					{imageUrl ? <img width="110" height="110"  src={imageUrl} alt="avatar" /> : uploadButton}
// 				</Upload>
// 				{/*<div>上传头像</div>*/}
// 			</Fragment>
//
//
// 		);
// 	}
// }

class Avatar extends React.Component{
	state = {
		fileList: [],
		uploading: false,
		first:true
	};
	
	handleUpload = () => {
		const { fileList } = this.state;
		const formData = new FormData();
		fileList.forEach(file => {
			formData.append('files[]', file);
		});
		
		this.setState({
			uploading: true,
		});
		
		// You can use any AJAX library you like
		reqwest({
			url: '/api/avatar',
			method: 'post',
			processData: false,
			data: formData,
			success: () => {
				this.setState({
					fileList: [],
					uploading: false,
				});
				message.success('upload successfully.');
			},
			error: () => {
				this.setState({
					uploading: false,
				});
				message.error('upload failed.');
			},
		});
	};
	// componentDidMount(){
	// 	const {imageSrc} = this.props;
	// 	const {first} = this.state;
	// 	console.log(first,imageSrc,"aaaaa")
	// 	console.log(imageSrc===undefined,"imageSrc...")
	// 	this.setState({
	// 		imageUrl: imageSrc,
	// 		first: false
	// 	})
	// }
	componentWillReceiveProps(){
		const {imageSrc} = this.props;
		const {first} = this.state;
		console.log(first,imageSrc,"aaaaa")
		if(first && imageSrc!=="" ){
			this.setState({
				imageUrl: imageSrc,
				first: false
			})
		}
		
	}
	
	render() {
		const { uploading, fileList } = this.state;
		const props = {
			onRemove: file => {
				this.setState(state => {
					const index = state.fileList.indexOf(file);
					const newFileList = state.fileList.slice();
					newFileList.splice(index, 1);
					return {
						fileList: newFileList,
					};
				});
			},
			beforeUpload: file => {
				const isJPG = file.type === 'image/jpeg';
				if (!isJPG) {
					message.error('只支持jpg文件');
					return false
				}
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isLt2M) {
					message.error('图片必须小于2M');
					return false;
				}
				const formData = new FormData();
				[...this.state.fileList, file].forEach(file1 => {
					formData.append('avatar', file1);
				});
				formData.append('userId',this.props.userId);
				this.setState({
					uploading: true,
				},()=>{
					reqwest({
						url: '/api/avatar',
						method: 'post',
						processData: false,
						
						data: formData,
							// userId: this.props.userId,
						
						success: (data) => {
							console.log(data);
							this.setState({
								fileList: [],
								uploading: false,
								imageUrl: data.data.avatar
							});
							message.success(data.msg);
						},
						error: () => {
							this.setState({
								uploading: false,
							});
							message.error('上传失败.');
						},
					});
				});
				
				return false;
			},
			fileList,
			
		};
		
		const uploadButton = (
			<div>
				<Icon type={uploading ? 'loading' : 'plus'} />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		const imageUrl = this.state.imageUrl;
		
		return (
			<div>
				<Upload
					className="avatar-uploader"
					listType="picture-card"
					{...props}
				>
					{imageUrl ? <img width="110" height="110"  src={imageUrl} alt="avatar" /> : uploadButton}
				</Upload>
			</div>
		);
		
	}
}

export default Avatar