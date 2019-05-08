import React,{Fragment} from "react";
import {BrowserRouter,Route,IndexRoute} from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store";

import HelloWorld from "../page/blank";
import Header from "../component/header";


export default ()=>{
	return (
		<Provider store={store}>
			<Fragment>
				<Header></Header>
				<BrowserRouter>
					<Fragment>
						<Route path='/'
							exact
							component={HelloWorld}
						>
						</Route>
					</Fragment>
				</BrowserRouter>
			</Fragment>
		</Provider>
	);
}