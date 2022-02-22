import React, { Component } from "react";
import NavBar from "../NavBar";
 
class ControlledcompFormwithmoreElements extends Component {
 
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
 
        this.state = {
            age: 0,
            qualification:"MCA",
            genderOPtions:["male","female"],
            gender:"female",
            hobbiesOption:["cooking","gardeinig","listening Music","shettle"],
            hobbies:[]
        }
    }
 
     handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
        if(e.target.name === "hobbies"){
            this.state.hobbies.push(e.target.value);
            let [...nwHobbies]=this.state.hobbies;
            this.setState({...this.state,hobbies:nwHobbies});
        }
        else{
            this.setState({[e.target.name]:e.target.value});
        }
    }
 
    //Handle submission. First prevent default backend submission
    handleSubmit(e) {
        e.preventDefault();
    }
 
    render() {
        return (
            <div style={{ border: "4px solid blue" }}>
                <NavBar/>              
                  Controlled Form demo with more elements
                <form id="form1" name="form1" onSubmit={this.handleSubmit} action="process.php">
                    Enter Age: <input type="text" name="age"
                        value={this.state.age}onChange={this.handleChange}/>
                    <br/>
                    Enter Qualification: <input type="text" name="qualification"
                        value={this.state.qualification} onChange={this.handleChange}/>
                    <br/>
                    Gender: <input type="radio" name="gender"
                        value={this.state.genderOPtions} onChange={this.handleChange}/>male
                        <input type="radio" name="gender"
                        value={this.state.genderOPtions} onChange={this.handleChange}/>female
                   <br/>
                    HObbies: <input type="checkbox" name="hobbies" value={this.state.hobbiesOption[0]}
                         onChange={this.handleChange}/>cooking
                        <input type="checkbox" name="hobbies" value={this.state.hobbiesOption[1]} 
                        onChange={this.handleChange}/>Gardening
                        <input type="checkbox" name="hobbies" value={this.state.hobbiesOption[2]} 
                        onChange={this.handleChange}/>Listening Music
                        <input type="checkbox" name="hobbies" value={this.state.hobbiesOption[3]}
                         onChange={this.handleChange}/>shettle
                   
                    <button type="submit" name="button1">Submit</button>
                </form>
 
                <p>Your age is : {this.state.age}</p>
                <p>Your Qualification is : {this.state.qualification}</p>
                <p>your Gender:{this.state.gender}</p>
                <p>your Hobbies:{this.state.hobbies.join(",")}</p>
                </div>
        )
    }
 
};
 
export default ControlledcompFormwithmoreElements;