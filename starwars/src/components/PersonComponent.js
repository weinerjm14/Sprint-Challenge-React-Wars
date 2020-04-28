import React from 'react';
import styled from "styled-components";

const PersonCompnentStyle = styled.div`
    background-color: seashell;
    width: 30%;
    border-radius: 15px;
    margin-bottom: 3%;
`;


let PersonCompnent = (props) => {
    
    return (
        <PersonCompnentStyle>
            <p>Name: {props.name}</p>
            <p>Height: {props.height} </p>
            <p>Weight: {props.mass} "kg"</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Born: {props.birth_year}</p>
            <p>Gender:  {props.gender}</p>
        </PersonCompnentStyle>
    )
}


export default PersonCompnent








