import {createStore} from 'redux';
    var initialPlayer=[
        {name:"rahul",age:25,award:["ranji trophy","oscar"]},
        {name:"rohit",age:26,award:["padma","oscar"]},
        {name:"ramya",age:23,award:["ranji trophy","rathan"]}
    ];
    const PlayerReducer = (state = initialPlayer,action)=>{
        switch(action.type){
            case "ADD_ONE":
                let [...newState1] = state;
                newState1.push({name:"raju",age:29,award:["oscar","stateaward"]});
                return newState1;
           // return Immutable.List(state).push({name:"raju",age:29,award:["oscar","stateaward"]})

            case "ADD_TWO":
                let [...newState2] = state;
                newState2.push({name:"rohini",age: 24,award:["padma1","nationalaward"]});
                newState2.push({name:"roshni",age: 25,award:["padma2","padmasree"]});
                return newState2;
                
              // return Immutable.List(state)
              // .push({name:"rohini",age: 24,award:["padma1","nationalaward"]})
               //.push({name:"roshni",age: 25,award:["padma2","padmasree"]});

            case "REMOVE_LAST":
                let [...newState3] = state;
                newState3.pop();
                return newState3

                case "REMOVE_PLAYER":
                    let pName = action.playerName;
                    let [...newState4] = state;
                    newState4 =  newState4.filter(item => item.name !== pName);
                    return newState4;

                 case "REMOVE_BY_AGE":
                        console.log("action"+action.playerAge);
                           let pAge= action.playerAge;
                           let[...newState5]=state;
                           newState5= newState5.filter(item=>item.age !== pAge);
                         console.log("latest"+newState5);
                            return newState5;

                    case "ADD_play":
                        let p1Name= action.plyrName;
                        let p1Age= action.plyrAge
                        let p1Award= action.plyrAward;
                        let [...newState6]=state;
                        newState6=newState6.push({name:p1Name,age:p1Age,award:p1Award});
                        return newState6;
                        
                    default :  
                    return state; 
        };
    }
       
export default PlayerReducer;