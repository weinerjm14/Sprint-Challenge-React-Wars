import React from 'react';
import styled from "styled-components";

let PersonCompnent = (props) => {
    
    return (
        <div>
        <p>"Name: " {props.name}</p>
        <p>"Height:" {props.height} </p>
        <p>"Weight: " {props.mass} "kg"</p>
        <p>"Hair Color: " {props.hair_color}</p>
        <p>"Skin Color: " {props.skin_color}</p>
        <p>"Eye Color: " {props.eye_color}</p>
        <p>"Born: " {props.birth_year}</p>
        <p>"Gender: " {props.gender}</p>
        </div>
    )
}


export default PersonCompnent








