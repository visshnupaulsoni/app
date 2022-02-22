import react, { Component } from "react";
import NavBar from "../NavBar";
 
class UnControlledComponentFormDemo extends Component {
 
    constructor(props) {
        super(props);
        //React requires us to do this one line for all functions we define
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputAgeRef=react.createRef();
    }
 
    handleSubmit(e) {
        e.preventDefault();
        alert(this.inputAgeRef.current.value);
          
    }
 
    render() {
        return (
            <div style={{ border: "4px solid green" }}>
               <NavBar/>
                Uncontrolled form demo
                <form id="form1" name="form1" onSubmit={this.handleSubmit} action="process.php">
                    <input type="text" name="age" />
                    <button type="submit" name="button1">Submit</button>
                    <br/>
                </form>
            </div>
        )
    }
 
};
 
export default UnControlledComponentFormDemo;