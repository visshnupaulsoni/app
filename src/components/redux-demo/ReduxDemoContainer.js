import ReduxDemoV2 from "./ReduxDemo";
import { connect } from "react-redux";
const mapStateToProps =(storeData)=>{
    console.log(storeData);
    return{
        playersData:storeData.reducer1
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addDummyPlayerXYYZ: () =>  dispatch({ type: "ADD_ONE" }),
        add2DummyPlayersXYYZ : () => dispatch({ type: "ADD_TWO" }),
        removePlayer : (playerName) => dispatch({ type: "REMOVE_PLAYER", playrName: playerName }),
        removeAge: (plyrAge) => dispatch({type:"REMOVE_BY_AGE", playerAge: plyrAge }),
    
        addPlayer : (playName, playAge, playAward) => dispatch(
            { type: "ADD_PLAYER", name: playName, age: playAge, award:playAward }
            ),
            removePlayerAgeGT70 : ()=> dispatch({type:"REMOVE_PLAYER_AGE_MORE_THAN_70"}),
            updateAge50: () => dispatch({type:"SET_ALL_PLAYERS_AGE_TO_50"}),
            callMyAsync: () => dispatch({type:"ADD_ONE_ASYNC"})
               
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxDemoV2);