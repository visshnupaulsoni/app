import React, { Component } from "react";
 
class PlayerRegistration extends Component {
 
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
 
        this.state = {
            name:"soni",
            age: 0,
            awardOPtions:["state level","national level"],
            award:"state level",
            runs:0,
            playerOption:["Bowler","wicket kepper","Batsmen"],
            player:[],
            msg :"errors message"
        }
    }
    handleChange(e) {
        let newState={...this.state,msg:""};
        //this.setState({ [e.target.name] : e.target.value });
        if(e.target.name === "player"){
            if(e.target.checked)
            this.state.player.push(e.target.value);
            else if (!e.target.checked)
            this.state.player=this.state.player.filter(elem => elem != e.target.value)
            let [...nwplayer]=this.state.player;
            //this.setState({...this.state,player:nwplayer});
            newState={...newState,player:nwplayer}
        }
        else{
            if(e.target.name === "age" && e.target.value<21){
               // this.setState({...this.state,msg:"Age can't be less than 21 for player"})
                newState={...newState,msg:"Age is can't less than 21 for palyers"}
            };
            //this.setState({[e.target.name]:e.target.value});
            newState={...newState,[e.target.name]:e.target.value};
            
        }
        this.setState({...newState});
    }
 
    //Handle submission. First prevent default backend submission
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div style={{ border: "4px solid orange" }}>
                <h2>Player Registration Form</h2>
                <form id="form1" name="form1" onSubmit={this.handleSubmit} action="process.php">
               <br/>
               validate message:<span style={{color:"red"}}>{this.state.msg}</span>
                <br/>
                <br></br>
                Enter Name : <input type="text" name="name"
                        value={this.state.name}onChange={this.handleChange}/>
                    <br/>
                    Enter Age: <input type="text" name="age"
                        value={this.state.age}onChange={this.handleChange}/>
                    <br/>
                    
                    award: <input type="radio" name="award"
                        value={this.state.awardOPtions} onChange={this.handleChange}/>state level
                        <input type="radio" name="award"
                        value={this.state.awardOPtions} onChange={this.handleChange}/>national level
                   <br/>
                   Total runs score  in Ranji trophy: <input type="text" name="runs"
                        value={this.state.runs}onChange={this.handleChange}/>
                    <br/>runs

                    players Type: <input type="checkbox" name="player" value={this.state.playerOption[0]}
                         onChange={this.handleChange}/>bowler
                        <input type="checkbox" name="player" value={this.state.playerOption[1]} 
                        onChange={this.handleChange}/>wicket keeper
                        <input type="checkbox" name="player" value={this.state.playerOption[2]} 
                        onChange={this.handleChange}/>Batsmen
                        <br/><br/>
                    <button type="submit" name="button1">Submit</button>
                </form>
                <p>player Name:{this.state.name}</p>
                <p>player age : {this.state.age}</p>
                <p>award won:{this.state.award}</p>
                <p>total runs:{this.state.runs}</p>
                <p>player type:{this.state.player.join(",")}</p>
                
                </div>
        )
    }
 
};
 
export default PlayerRegistration;