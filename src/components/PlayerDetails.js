import * as React from "react";
import { useParams } from "react-router";
import {useEffect, useState} from "react";
const PlayerDetails=(props)=>{
    const playerData=[
        {name:"gawtham", age:27, role:"Bowler",country:"india", totRuns:2000},
        {name:"virat", age:25, role:"Batsman",country:"india", totRuns:3000},
        {name:"rahul", age:28, role:"Bowler",country:"india", totRuns:2500},
        {name:"rohit", age:29, role:"Batsman",country:"india", totRuns:2010},
        {name:"yuvi", age:30, role:"Batsman",country:"india", totRuns:2600},
        
    ];
    const PlayerName=(name)=>{
        for(let i=0;i<playerData.length;i++){
            if(playerData[i].name === name)
        return playerData[i];   
    }
    return null;
    }
    const {name, age, role,country,totRuns }=useParams();
    const[player1,setplayer1]=useState({});
    useEffect(()=>{
        setplayer1(PlayerName(name));
    },
    [player1],
    );

    let player2=PlayerName(name);
    return(
        <div>
            <center>player name: {name}<br/> age: {age ? age : ""}<br/>role: {role ? role:""}
            <br/>country: {country ? country:""}<br/> totRuns: {totRuns ? totRuns :""}</center>
         </div>
    )
}
export default PlayerDetails