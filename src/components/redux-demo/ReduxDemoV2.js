import store from "../../store/mystore";
import { useState } from "react";
const ReduxDemoV2 = (props) => {

    var storeData = store.getState();
    console.log("initial data in the store");
    console.log(storeData);

    const addOnePlayer = () => {
        //console.log("dispatching ADD_ONE action");
        store.dispatch({ type: "ADD_ONE" });
        //console.log("Latest Store data is : ");
        // console.log(store.getState());
    }

    const addTwoPlayer = () => {
        store.dispatch({ type: "ADD_TWO" });
        // console.log("Latest Store data is : ");
        //  console.log(store.getState());
    }

    //const RemoveLastPlayer = () => {
        // store.dispatch({type:"REMOVE_LAST"});
        //console.log("Latest Store data is : ");
        //console.log(store.getState());}

        const removePlayer = () => {
            store.dispatch({ type: "REMOVE_PLAYER", playerName: localState.playerToRemove });
            // console.log("Latest Store data is : ");
            // console.log(store.getState());
        }

        const removeAge = (e) => {
            e.preventDefault();
            store.dispatch({ type: "REMOVE_By-Age", playerAge: localState.AgeToRemove });
            console.log("Latest Store data is : ");
            console.log(store.getState());
        }

        const [localState, setLocalState] = useState({ playerToRemove: "" });
        const handleChange = (e) => {
            e.preventDefault();
            setLocalState({ ...localState, playerToRemove: e.target.value });
        };

        const [localState2, setLocalState2] = useState({ nameAdd: "", ageAdd: "", awardAdd: [] })

        const handleChange2 = (e) => {
            e.preventDefault();
            // setLocalState2({...localState2,nAdd:e.target.value, aAdd:e.target.value, awAdd:e.target.value});
            setLocalState2({ ...localState2, [e.target.name]: e.target.value });
        };

        const addPlayer = (e) => {
            e.preventDefault();
            store.dispatch({ type: "ADD", playName: localState2.nameAdd, playAge: localState2.ageAdd, playAwards: localState2.awAdd })
        }

        const removeplayerAgemore70 = (e) => {
            e.preventDefault();
            props.removePlayerAgeGT70();
        }

        const updateAge50 = (e) => {
            e.preventDefault();
            props.updateAge50();
        }

        return (
            <div>Redux demo
                initial data from the store is:
                <ul>
                    {props.playersData.SecondReducer.map((item, key) => <li key={key}>player # {key}:{item.name} {item.age} {item.award.join(",")} </li>
                    )}
                </ul>

                <button onClick={addOnePlayer}>add 1 player</button><br></br><br></br>
                <button onClick={addTwoPlayer}>add 2 player</button><br></br><br></br>

                Enter Player Name : <input type="text" name="name" value={localState.playerToRemove} onChange={handleChange} /><br />
                <button onClick={removePlayer}>Remove  player</button>

                Enter Player Age : <input type="text" name="age" value={localState.ageToRemove} onChange={handleChange} /><br />
                <button onClick={removeAge}>Remove age </button>

                <h4>ADD PLAYER FORM</h4>
                Enter Player Name : <input type="text" name="nAdd" value={localState2.nAdd} onChange={handleChange2} /><br />
                Enter Player Age : <input type="text" name="aAdd" value={localState2.aAdd} onChange={handleChange2} /><br />
                <button onClick={(e) => { addPlayer(e) }}>ADD the given player</button>

                removeplayerAgemore70<br></br>
                <button onClick={removeplayerAgemore70}>Remove Player age greater than 70</button>

                UPDATE ALL PLAYER AGE BY 50 DEMO<br />
                <button onClick={(e) => { updateAge50(e) }}>UPDATE ALL PLAYER AGE by 50</button>

                saga middleware demo:

                <button onClick={() => props.callMyAsync()}>dispatch add one async</button>

            </div>
        )
    }
    export default ReduxDemoV2;