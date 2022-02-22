import React, {Component} from "react";
import Person from  "./Person";
import Message from "./Message";
 
class ScoreCard extends Component{
 
    constructor(props){
        super(props);
 
        this.ref1 = React.createRef();
        this.ref2 = React.createRef(); 
        this.ref3=  React.createRef();
    }
    changeScore = ()=>{
        this.ref1.current.f1();
        this.ref2.current.f1();
        var score1=this.ref1.current.state.score;
        var score2=this.ref2.current.state.score;
        if(score1>50){
            this.ref3.current.setState((state,props)=>({message:"winner is player1"}))
        }
        else if(score2>50){
            this.ref3.current.setState((state,props)=>({message:"winner is player2"}))
        }  
        };
        
        
        f2=()=>{
            alert("in parent");
        }
    render() {
        return (
            <div style={{border:"2px solid yellow"}}>

                <Person name="player1" ref={this.ref1} score={0} somefunc={this.f2} />
                <Person name="player2" ref={this.ref2} score={0} somefunc={this.f2} />
                <Message ref={this.ref3}/>
                <button onClick={this.changeScore} >Change Score</button>
            </div>
        )
    }
}
 
export default ScoreCard;  
