import React,{Fragment} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store";

import Header from "../component/header";
import Home from "../page/home";
import Login from "../page/login";
import Resume from "../page/resume";
import AppliedJob from "../page/appliedJob";
import SearchList from "../page/searchlist";
import Detail from "../page/detail";
import Admin from "../page/admin";
import Company from "../page/company";


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
							{/*<Route path='/admin'*/}
								   {/*render={()=>(*/}
								   		{/*<Route path='/admin/company'/>*/}
								   {/*)}*/}
							{/*/>*/}
							<Route path='/admin'
								render={()=>(
									<Admin>
										<Switch>
											<Route path="/admin/companyInfo" component={Company}/>
										</Switch>
									</Admin>
									
								)}
							/>
							<Header></Header>
						</Switch>
						<Route path='/' exact component={Home}/>
						<Route path='/resume' exact component={Resume}/>
						<Route path='/applied_job' exact component={AppliedJob}/>
						<Route path='/searchlist' exact component={SearchList} />
						<Route path = '/detail/:id'
                               exact
                               component = {Detail}
                        >
                        </Route>
					</Fragment>
				</BrowserRouter>
			</Fragment>
		</Provider>
	);
}