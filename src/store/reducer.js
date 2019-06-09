import { combineReducers } from "redux-immutable";
import { reducer as Blank } from "../page/blank/store"
import { reducer as Header} from "../component/header/store";
import { reducer as Home } from  "../page/home/store"
import { reducer as Login } from  "../page/login/store"
import { reducer as Resume } from  "../page/resume/store"
import { reducer as AppliedJob } from  "../page/appliedJob/store"
import { reducer as SearchList } from  "../page/searchlist/store"
import { reducer as Detail } from  "../page/detail/store"
import { reducer as Admin } from  "../page/admin/store"
import { reducer as Company } from  "../page/company/store"
import { reducer as Job } from  "../page/job/store"
import { reducer as ApplyList } from  "../page/applyList/store"
import { reducer as TalentPool } from  "../page/talentPool/store"

const reducer = combineReducers({
    Blank,
    Header,
	Home,
    Login,
	Resume,
	AppliedJob,
	SearchList,
	Detail,
	Admin,
	Company,
	Job,
	ApplyList,
	TalentPool
});

export default reducer;