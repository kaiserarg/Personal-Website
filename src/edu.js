import React from "react";
import "./styles/main.css";
import Eduraw from './customization/Education.json'

export function Edu() {
    const result = [];
    Eduraw.schools.map((school) => {
        result.push(
            <div class="edu">
                <span id="logo-block">
                <img src={require(`${school.logo}`)}  alt={"school"} style={{ width: 180, height: 100}}/>
                </span>
                <span class="text" style={{paddingLeft:150}}>
                    <p class="school">{school.name}  </p>
                    <p class="dep">{school.degree} </p>
                    <p class="time">{school.time}  </p>
                </span>
            </div>
        );
    });

    return (
        result
    );
}

export default Edu;