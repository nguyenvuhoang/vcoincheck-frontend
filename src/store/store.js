import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import PostsReducer from './reducers/PostsReducer';
import ProjectsReducer from './reducers/ProjectReducer';
import UsersReducer from './reducers/UserReducer';
import UserRoleReducer from './reducers/UserRoleReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import todoReducers from './reducers/Reducers';
import { reducer as reduxFormReducer } from 'redux-form';

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: PostsReducer,
    projects : ProjectsReducer,
    users: UsersReducer,
    userroles: UserRoleReducer,
    auth: AuthReducer, todoReducers,
	form: reduxFormReducer,	
});

export const store = createStore(reducers,  composeEnhancers(middleware));
