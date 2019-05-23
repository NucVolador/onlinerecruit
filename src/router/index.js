import React,{Fragment} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store";

import HelloWorld from "../page/blank";
import Header from "../component/header";
import Home from "../page/home";
import Login from "../page/login";


export default ()=>{
	return (
		<Provider store={store}>
			<Fragment>

				<BrowserRouter>
					<Fragment>
						<Switch>
							<Route path='/login'
								   exact
								   component={Login}
							/>
							<Header></Header>
						</Switch>
						<Route path='/' exact component={Home}/>
					</Fragment>
				</BrowserRouter>
			</Fragment>
		</Provider>
	);
}