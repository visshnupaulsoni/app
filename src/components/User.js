import { Component } from "react";
 
import Address from "./Address";
import Hobby from "./Hobby";
import Qualification from "./Qualification"
 
const initialState = {    
    age: 25,
    phone: 6795568999
};
 
var i=0;
 
class User extends Component {
 
    constructor(props) {
        super(props);
 
        //// so we have got the props now through this contructor
        //// props has an userID props.userId
        ////lets connect to the backend and pass the UserID and get the full details
        /// once we get the response, it will/may have the user's age.
        /// let's store it (age) of the User for later use or now as part of this component's
        // state
 
        this.state = initialState;
        this.state = {...this.state , popRating: props.popularity}
    }
 
 
    changePoularity =  ()=>{
        this.setState(() => ({
            popRating: this.state.popRating+1
          }));
    };
 
    render() {
 
        return (
            <div style={{border:"1px solid red"}}>
 
                <img src={this.props.image} width="25" height="25"
                    alt="Image not given" />
                <h4> My name is  {this.props.name} and age is {this.state.age} </h4>
                <h2 > My current popularity is:  {this.state.popRating}  </h2>
 
                <button onClick={this.changePoularity} >
                    Click to increase my popularity
                </button>
 
                <Hobby hobby={["cooking ,  Gardening"]} />
                <Qualification qualification={["BSc", "MCA"]} />
                <Address address={["sbi coloby", "AIR BY PASS road", "Tirupathi"]} />
 
            </div>
        )
 
    }
 
}
 
export default User;

     

