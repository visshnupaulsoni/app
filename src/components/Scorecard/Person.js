import { Component } from "react";
class Person extends Component {
  constructor(props) {
        super(props);
 
        this.state = {
            score: props.score
        }
    }
    f1 = () => {
        this.setState(
            {
                score: this.state.score + Math.floor(Math.random() * 10)
            }
        );
    }
    render() {
 
        return (
            <p>
            
                Name: {this.props.name} Score: {this.state.score}
            </p>    
            
        )
    }
}
export default Person;