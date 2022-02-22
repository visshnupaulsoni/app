import { createStore ,combineReducers, applyMiddleware} from 'redux';
import PlayerReducer from '../reducers/playerReducer';
import SecondReducer from '../reducers/SecondReducer';
import playerReducerUsingImmutableJSV2 from '../reducers/playerReducerUsingImmutableJSV2';
import createSagaMiddleware from "redux-saga";
import NewsReducer from '../reducers/NewsReducer';
import rootSaga from '../sagas/hellosaga';
import {composeWithDevTools} from 'redux-devtools-extension';
import NewNodeReducer from '../reducers/NewNodeReducer';

//saga is not only middleware thereis another called redux thunk and a few others
//but saga is good for big projects
//Redux thunk has drawback -callbacks hell so we prefer saga
import newPlayerReducer from '../components/Addplayercomp/newPlayerReducer'

const sagaMiddleware = createSagaMiddleware();

const rootReducer=combineReducers({
  reducer1:playerReducerUsingImmutableJSV2,
  reducer2:SecondReducer,
  reducer3:NewsReducer,
  reducer4:NewNodeReducer,
  reducer6:newPlayerReducer
});

const store = createStore(
   // PlayerReducerUsingImmutableJSV2,
  // PlayerReducer,
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  //applying middleware
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
//middle cofig is done lets code an exmpl usage
//run the sage Middleware eith the exmpl middleware we wrote
sagaMiddleware.run(rootSaga);
//once the middleware reuns it will call our hellosaga
//whenever any action is dispatched to amy reducer
// goinh to dispatch any action say remove
store.dispatch({type:"ADD_A_PLAYER"});