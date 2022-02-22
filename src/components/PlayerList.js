import {Link} from "react-router-dom";
import NavBar from "./NavBar";
const playerlist=()=>{
    const playerData=[
        {name:"gawtham", age:27, role:"Bowler",country:"india", totRuns:2000},
        {name:"virat", age:25, role:"Batsman",country:"india", totRuns:3000},
        {name:"rahul", age:28, role:"Bowler",country:"india", totRuns:2500},
        {name:"rohit", age:29, role:"Batsman",country:"india", totRuns:2010},
        {name:"yuvi", age:30, role:"Batsman",country:"india", totRuns:2600},
        
    ];

    return(
        <div>
            <NavBar/>
            <ul>
                {
                    playerData.map(item=><li>click here to get the details of
                        <Link to ={`/player/${item.name}`}>{item.name}</Link></li>)
                }
            </ul>
        </div>
    )

}
export default playerlist;