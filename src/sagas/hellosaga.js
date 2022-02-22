// We need to code a geneator function for sagas like this:
import {all, put,takeEvery, takeLatest } from "redux-saga/effects";

export function* hellosaga(){
console.log("Hello from Saga!..");
}

const delay =(milliseconds) => new Promise( res => setTimeout(res,milliseconds) );
//Promises are functions that do thier job asynchronously. 
// They return result in future after some delay

// let's write that will call ADD_ONE player action 
export function* callAddOneAsync(){ 
    yield delay(1000); // delay by 1 sec 
    console.log("Inside callAddOneAsync. Will dispatch ADD_ONE asynchronously.")
    yield put({type:"ADD_ONE"});  // dispatch this action asynchronously..
}

export function* watchAddOneActionHappeningInTheApp(){
    yield takeLatest('ADD_ONE_ASYNC', callAddOneAsync );
}

// watch NEWS saga
function* fetchNews() { 
     const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), );   
           yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}

/// my node app saga

function* fetchNewApp() {
    const json = yield fetch("http://localhost:8000/players").then((response) =>
      response.json()
    );
    yield put({ type: "NODE_APP_DATA_RECIEVED", json: json });
  }
  function* actionWatcher1() {
    yield takeLatest("GET_APP_DATA", fetchNewApp);
  }
  
  // my new player app
  
  function* addNewPlayer(action) {
    var bodyContent = {
      name: action.player.name,
      age: action.player.age,
    };
  
    var stringifiedBody = JSON.stringify(bodyContent);
  
    const serverResponse = yield fetch("http://localhost:8000/players/add", {
      method: "POST",
      body: stringifiedBody,
      headers: {
        "Content-type": "application/json;chartset=UTF-8",
      },
    }).then((res) => res.json());
  //   .then((res) => console.log(`data sent successfully to the backed and  ${res.msg}`));
    yield put({ type: "ADD_A_PLAYER_SUCCESSFUL", serverMsg: serverResponse.msg, });
  
  
    // const json = yield fetch('http://localhost:8000/players/add').then(response => response.json(), );
  //   yield put({ type: "ADD_A_PLAYER", json: json, });
  }
  
  function* actionWatcher2() {
    yield takeLatest("ADD_A_PLAYER_TO_BACKEND", addNewPlayer);
  }
  

// we need to a root saga for all the above saga.
export default function* rootSaga(){
    yield all( [ hellosaga(), 
        watchAddOneActionHappeningInTheApp(),
        actionWatcher(),
        actionWatcher1(),
        actionWatcher2()
     ] )
};
