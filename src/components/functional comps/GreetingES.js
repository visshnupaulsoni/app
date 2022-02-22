import { useState } from "react";
const GreetingES6 = (props) => {
    var initAge = 100;
    //state of primitive numeric
    const [age, setAge] = useState(initAge);
    const changeAge = () => {
        if (age % 5 === 0)
            setAge(age + 2);
        else
            setAge(age + 1);
    }
    // state of String type variabel
    const[name, setNm] = useState("soni");
    //state of object type varible
    const [address, setAddress] = useState({
        doorNum: 117, street: "SBI colony", city:"tirupathi", state: "ap",

        //state fo array type varible
        //const initialHobbies=["cooking","gardening","music","shettle"]
    })
    return (
        <div style={{border:"1px solid yellow"}}>

            Name:{name} Age:{age}

            <button onClick={() => setAge(age + 1)}>change Age by 1</button>
            <button onClick={() => changeAge()}>change Age by 2 if age is div by 5 otherwise by 1</button>
            <br></br>
            <button onClick={() => setNm("soni")}>change name(to setNm)</button>
            <br></br>
            Address:{address.doorNum},street:{address.street},city:{address.city},state:{address.state}
            <button onClick={() => setAddress({ ...address, doorNum: 150 })}>change addr doorno(simple call as setAddress</button>
           { //make sure to spread the ...address first and then update doorNum}
           }      <br></br>
          {// HObbies:<ul>{hobbies.map(Item=><li>{item}</li>)}</ul>
          // <button onClick={changeHobby}>change first hobby</button>
           } </div>
    );
}
export default GreetingES6;