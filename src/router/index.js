import React,{Fragment} from "react";
import {BrowserRouter,Route,IndexRoute} from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store";

import HelloWorld from "../page/blank";
import Header from "../component/header";
import Home from "../page/home";


export default ()=>{
	return (
		<Provider store={store}>
			<Fragment>
				<Header></Header>
				<BrowserRouter>
					<Fragment>
						<Route path='/'
							exact
							component={Home}
						>
						</Route>
					</Fragment>
				</BrowserRouter>
			</Fragment>
		</Provider>
	);
}