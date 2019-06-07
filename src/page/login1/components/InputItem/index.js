import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {InputItem, ErrorMsg} from "./style"

function Input_Item(props){
    const [isError, setIsError] = useState(false)
    // function check(e){
    //     console.log(e);
    //     if(!e ){
    //         setIsError(false)
    //         return
    //     }
    //     if (!e.target.value) {
    //         setIsError(true)
    //     } else {
    //         setIsError(false)
    //     }
    // }
    function check(value){
        if(value){
			setIsError(false)
        }else{
			setIsError(true)
		}
    }
    
    useEffect(()=>{
		console.log("1");
		check(props.value);
    },[props.value])
	useEffect(()=>{
		check("1");
		console.log("2");
	},[])
    return (
        <InputItem className={props.classList}>
            <input type={props.type}
                   name={props.name}
                   value={props.value}
                   placeholder={props.placeholder}
				   onChange={props.onChange}
            />
            {
                props.icon?<i className={props.icon}></i>:""
            }
            <ErrorMsg className={isError?"tooltip tooltip-error fade right in":"none"}>
                <div className={"tooltip-arrow tooltip-arrow-border"}></div>
                <div className={"tooltip-arrow tooltip-arrow-bg"}></div>
                <div className="tooltip-inner">
                    <i className="iconfont ic-error"></i>
                    <span>{props.msg}</span>
                </div>
            </ErrorMsg>
        </InputItem>
    );
}

Input_Item.defaultProps = {
    placeholder: "",
    icon: "",
    type: "text",
    msg: "此项为必填项"
}

Input_Item.propsTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    msg: PropTypes.string
}

export default Input_Item