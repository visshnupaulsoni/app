import {React, useEffect, useState }from "react";
import { useParams } from "react-router";
export default function HelloWorldFunc(props){
const PlayerData = [
    {name:"player1" ,age:25},{name:"player2",age :28},
];
const PlayerName =(name)=>{
    for(let i=0;i<PlayerData.length;i++){
        if(PlayerData[i].name === name)return PlayerData[i];
        
    }
    return null;
}
    const {name,city,stateOfCity}=useParams();
    const [player1 ,setplayer1]=useState({});
    useEffect(()=>{
        setplayer1(PlayerName(name));
        console.log("inside use effect");
        console.log("player1 details" +player1.name);
        },[player1],
        );
    let player2=PlayerName(name);
    return(
        <div>
            you are coming from <h2>{city}
             {stateOfCity ?<span>
                 ( {stateOfCity})</span>:""}</h2>

            {
                name ?
               <span> your name is<h2> {name}</h2></span>
                : "your are anonymous user"
            }

            your in our database:(sol 1)
            {
                PlayerName(name) !=null? 
                <p>{PlayerName(name).age}</p>
                : <p>player not found</p>
            }
                <br/> your in database:(sol 2){
                    player1 !=null? player1.name:"not found"
                }
                <br/> your in database:(sol 2){
                    player2 != null? player2.name:"not found"
                }

        </div>
    ); 
}