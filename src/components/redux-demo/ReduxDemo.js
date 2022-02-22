import store from "../../store/mystore";
import { useState } from "react";
const ReduxDemo=()=>{

    var storeData = store.getState();
    console.log("initial data in the store");
    console.log(storeData);

    const addOnePlayer = () =>{
        //console.log("dispatching ADD_ONE action");
        store.dispatch( {type:"ADD_ONE"} );
        //console.log("Latest Store data is : ");
       // console.log(store.getState());
    }

    const addTwoPlayer = () =>{
        store.dispatch( {type:"ADD_TWO"} );
       // console.log("Latest Store data is : ");
      //  console.log(store.getState());
    }

    //const RemoveLastPlayer=()=>{
       // store.dispatch({type:"REMOVE_LAST"});
        //console.log("Latest Store data is : ");
        //console.log(store.getState());}

        const removePlayer = () =>{
            store.dispatch( {type:"REMOVE_PLAYER",playerName:localState.playerToRemove} );
           // console.log("Latest Store data is : ");
           // console.log(store.getState());
        }

        const removeAge = (e) => {
            e.preventDefault();
            // console.log("dispatching remove by age");
            store.dispatch({ type: "REMOVE_BY_AGE", playerAge: localState.ageToRemove });
            // console.log("latest store data is :");
            // console.log(store.getState());
        }
        const [localState, setLocalState1] = useState({ ageToRemove: 0 });
    
        const handleChange = (e) => {
            e.preventDefault();
            setLocalState1({ ...localState, ageToRemove: e.target.value });
        }


     const [localState2, setLocalState2] = useState({ nAdd: "", aAdd: "", awAdd: [] })

    const handleChange2 = (e) => {
        e.preventDefault();
        // setLocalState2({...localState2,nAdd:e.target.value, aAdd:e.target.value, awAdd:e.target.value});
        setLocalState2({ ...localState2, [e.target.name]: e.target.value });
    };

    const addPlayer = (e) => {
        e.preventDefault();
        store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
    }

    return(
        <div>Redux demo
            initial data from the store is:
            <ul>
            {store.getState()
            .map((item,key) => <li key={key}>{item.name} {item.age} {item.award.join(",")} </li>
            )}
            </ul>
        
        <button onClick={addOnePlayer}>add 1 player</button><br></br><br></br>
        <button onClick={addTwoPlayer}>add 2 player</button><br></br><br></br>
        
        Enter Player Name : <input type="text" name="name" value={localState.playerToRemove} onChange={handleChange} /><br />
        <button onClick={removePlayer}>Remove  player</button><br/>

        Enter Player Age : <input type="text" name="age" value={localState.ageToRemove} onChange={handleChange} /><br />
                <button onClick={(e) => { removeAge(e) }}>Remove the given player</button>
            <hr />
            <h4>ADD PLAYER FORM</h4>
            Enter Player Name : <input type="text" name="nAdd" value={localState2.nAdd} onChange={handleChange2} /><br />
            Enter Player Age : <input type="text" name="aAdd" value={localState2.aAdd} onChange={handleChange2} /><br />
                <button onClick={(e) => { addPlayer(e) }}>ADD the given player</button>
        </div>
    )
}
export default ReduxDemo;