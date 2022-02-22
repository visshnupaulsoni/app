import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar =()=>{
    return(
     <div>
         
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">Home</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to="/nodeApp/players">NODE_APP_DATA</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/apps"}>App1</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/players"}>players</NavLink>
        
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/eventsdemo"}>MyEventHandling</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/form-demo1"}>ControlledComponentFormDemo</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/form-demo2"}>UnControlledComponentFormDemo</NavLink>
        <NavLink activeClassName="active" style={{ margin: "20px" }} to={"/form-demo3"}>ControlledcompFormwithmoreElements </NavLink>
        
     </div>   
    )
}
export default NavBar;
