import { PureComponent } from "react";
import {Link,Redirect} from "react-router-dom";
class NoPageFound extends PureComponent {
    render() {
        return (
            <div>
                <p>
                    sorry the page are your are looking doesn't exist
                </p>
                <p>
                    contact the admin
                </p>
                Go back to Home page<Link to={"/"}>Home</Link>
                {//<Redirect to ="/">you will be  redirect</Redirect>
    }
            </div>
        )
    }
}
export default NoPageFound;