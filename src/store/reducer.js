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

const reducer = combineReducers({
    Blank,
    Header,
	Home,
    Login,
	Resume,
	AppliedJob,
	SearchList,
	Detail,
	Admin
});

export default reducer;