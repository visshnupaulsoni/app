import { useState } from "react";
const Personcomp = (props) => {
    var initScore = 100;

    const [score,setScore] = useState(initScore);
    const changeScore = () => {
        if (score % 5 === 0)
        setScore(score+2);
        else
        setScore(score+1);  
    }

const [address, setAddress] = useState([117, "SBI colony", "tirupathi","ap"])
    return (
        <div style={{border:"1px solid yellow"}}>

             <h4> {props.name} and score is {score}</h4>
         
            <button onClick={() => setScore(score + 1)}>score</button>
            <br></br>
            Address : doorno:{address[0]},street:{address[1]},city:{address[2]},state:{address[3]}
            <button onClick={()=>setAddress([117,...address])}>address</button>
        
        </div>
    );
}
export default Personcomp;