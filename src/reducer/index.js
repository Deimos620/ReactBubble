import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bubbleList from './bubbleList';


const rootReducer = combineReducers({ 
    routing: routerReducer,
    bubbleList
});


export default rootReducer;