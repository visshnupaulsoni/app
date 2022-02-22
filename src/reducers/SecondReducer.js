import initialPlayers from "../data/data";
const  SecondReducer= (state=initialPlayers,action)=>{
    switch (action.type) {

        case "REMOVE_PLAYER_AGE_MORE_THAN_70":
           // return Immutable.List(state).filter(item => item.age <= 70);
            let [...newState]=state;
            newState.map(item=>item.age=50);
            return newState;
        
        default:
            return state;
    };

  
}
export default SecondReducer;