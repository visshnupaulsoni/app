import { Component } from "react";
class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
        console.log("inside constructor");
        
    }
    componentDidMount() {
        console.log("inside componentDidMount ");
        window.addEventListener("beforeunload",function(event){
            console.log("unloading");
            event.preventDefault();
            return event.returnValue="inside unload handle.Are you sure you"
        });
    }
    static getDerivedStateFromProps(props, state) {
        console.log("inside getDerivedStateFromProps");
    }

    render() {
        console.log("inside render")
        return (
            <div style={{ border: "4px solid yellow" }}>
             <hr><p> life Cycle component Demo</p></hr>
                Hello my name is{this.state.name}
                <br><button onClick={this.f1}>change Name</button></br>
                <a href="text.html"J>click me to text.html</a>
            </div>
        )
    }
//updating
    shouldComponentUpdate(nextprops,nextstate) {
        console.log("inside shouldComponentUpdate");
        if(this.state.name.indexOf("5")!= -1)
             return true;
        else
             return false;
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("inside getSnapshotBeforeUpdate");
    }
    componentDidUpdate(prevprops, prevstate, snapshot) {
        console.log("inside  componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("inside componentWillUnmount");
    }

}
export default LifeCycleDemo;