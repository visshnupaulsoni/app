import React, { Component } from "react";
import NavBar from "../NavBar";
 
class ControlledComponentFormDemo extends Component {
 
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
 
        this.state = {
            age: 0,
            qualification:"MCA"
        }
    }
 
    // in functional component instead of creating individual state variables age,setAge.... create
    // a state object!
    // Like below
    // const [state,setState] = useState({age: 0, qualification:"Msc" });
    // then you will be able to use the simple one line handleChange   
 
    // we are using computed property feature of ES6.
    // This will allow to use setState for all of its form variables 
    // by dynamically computing the "keys" as [e.target.name]
    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }
 
    //Handle submission. First prevent default backend submission
    handleSubmit(e) {
        e.preventDefault();
    }
 
    render() {
        return (
            <div style={{ border: "4px solid red" }}>
               <NavBar/>
                Controlled Form demo.
                <form id="form1" name="form1" onSubmit={this.handleSubmit} action="process.php">
                    Enter Age: <input type="text" name="age"
                        value={this.state.age}onChange={this.handleChange}/>
                    <br/>
                    Enter Qualification: <input type="text" name="qualification"
                        value={this.state.qualification} onChange={this.handleChange}/>
                    <br/>
                       <button type="submit" name="button1">Submit</button>
                </form>
 
                <p>Your age is : {this.state.age}</p>
                <p>Your Qualification is : {this.state.qualification}</p>
            
            </div>
        )
    }
 
};
 
export default ControlledComponentFormDemo;