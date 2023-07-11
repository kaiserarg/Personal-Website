import React from "react";
import Awdraw from "./customization/Music.json";
import "./styles/main.css";
import { Spotify } from "react-spotify-embed";

export function Awd() {
    const result = [];
    Awdraw.awards.map((award) => {
        result.push(
            <p>{award.entry}</p>
        );
    });

    return (
        <span>
            <Spotify wide style={{paddingLeft:50, height:400, width:500}}link="https://open.spotify.com/playlist/0TsL8fXzqSe1EyJaVABy1c" />
            <Spotify wide style={{paddingLeft:50, height:400, width:500}} link="https://open.spotify.com/playlist/1ScqML1XvXQjmjjQMkhf7C/" />
            <br></br>
            <br></br>
            <br></br>
            <Spotify wide style={{paddingLeft:50, height:400, width:500}}link="https://open.spotify.com/playlist/1g3XbE2JPzcUpFwkhDOtoy" />
            <Spotify wide style={{paddingLeft:50, height:400, width:500}} link="https://open.spotify.com/playlist/3NJ5LxfVmWqyy0XcxIFiPY" />         
        </span>
    );
}

export default Awd;