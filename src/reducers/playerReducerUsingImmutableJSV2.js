
import Immutable from 'immutable';
import initialPlayers from '../data/data';


    var initialPlayer=[
        {name:"rahul",age:25,award:["ranji trophy","oscar"]},
        {name:"rohit",age:26,award:["padma","oscar"]},
        {name:"ramya",age:23,award:["ranji trophy","rathan"]}
    ];
    const playerReducerUsingImmutableJSV2 = (state = initialPlayer,action)=>{
        switch(action.type){
            case "ADD_ONE":
              return Immutable.List(state).push({name:"raju",age:29,award:["oscar","stateaward"]})

            case "ADD_TWO":
               return Immutable.List(state)
               .push({name:"rohini",age: 24,award:["padma1","nationalaward"]})
               .push({name:"roshni",age: 25,award:["padma2","padmasree"]});

            case "REMOVE_LAST":
                return Immutable.List(state).pop();

            case "REMOVE_PLAYER":
                 return Immutable.List(state).filter(item => item.name !== action.playerName);

            case "REMOVE_BY_AGE":
                return Immutable.List(state).filter(item=>item.age !== action.playerAge);

            case "ADD_NEW_PLAYER":
                return Immutable.List(state).filter
                    
                default :  
                    return state; 
        };
    }
    export default playerReducerUsingImmutableJSV2;