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
import AfterIndex from "../page/afterIndex";
import Job from "../page/job";
import ApplyList from "../page/applyList";
import TalentPool from "../page/talentPool";



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
											<Route path="/admin/home" component={AfterIndex}/>
											<Route path="/admin/companyInfo" component={Company}/>
											<Route path="/admin/job" component={Job}/>
											<Route path="/admin/applyList" component={ApplyList}/>
											<Route path="/admin/talentPool" component={TalentPool}/>
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