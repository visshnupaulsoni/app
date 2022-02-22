import { Component } from "react";
import NavBar from "../NavBar";
 
class MyEventHandling extends Component {
 
    constructor(props) {
        super(props);
        //React requires us to do this one line for all functions we define
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit(e) {
        e.preventDefault();
        alert('Type of event : ' + e.type);
        alert('Target of event : ' + e.target.id);
 
        //check is in the form
        let age = document.forms[0].age.value;
        console.log('You clicked submit.');
 
        if (age > 60) {
            console.log('age is 60 so form submission will happen.');
            document.forms[0].submit();
        };

    }
    handleEvent2(e,params){
     e.preventDefault();   
    }

    render() {
        return (
            <div style={{ border: "4px solid orange" }}>
                <NavBar/>
                <p name="p1" id="p1" onMouseOver={this.handleSubmit} >Events Handling 1 in React</p>
                <hr />
                <p name="p2" id="p2" onMouseOver={this.handleSubmit} >Events Handling  2 in React</p>
 
                <form id="form1" name="form1" onSubmit={this.handleSubmit} action="process.php">
                    <input type="text" name="age" />
                   {// <button type="submit" name="button1">Submit</button>
                    } <button id="button" type ="submit" name="button2" onClick={this.handleClick}> submit button2</button>
                    <br/>
                </form>   
            </div>
        )
    }
 
};
 
export default MyEventHandling;