import React from "react";
import Expraw from "./customization/Experience.json";
import "./styles/main.css";

export function Exp() {
    const result = [];
    Expraw.companies.map((company) => {
        result.push(
            <div class="edu">
                <span id="logo-block">
                <img src={require(`${company.logo}`)}  alt={"company"} style={{ width: 150, height: 80}}/>
                </span>
                <span class="text" style={{paddingLeft:100}}>
                    <p class="school">{company.name}  </p>
                    <p class="dep">{company.position_time} </p>
                    <p class="time">{company.discription}  </p>
                </span>
            </div>
        );
    });

    return (
        result
    );
}

export default Exp;