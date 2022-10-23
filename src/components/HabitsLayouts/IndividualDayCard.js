import styled from "styled-components"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth"
export default function IndividualDayCard(props) {
    const { day, index, disabled, daysArray } = props


    return (
        <Day color={daysArray.includes(index + 1)}>{day}</Day>

    )
}


const Day = styled.button`
    width: 30px;
    height: 30px;
    color: ${props => props.color ? "#FFFFFF" : "#CFCFCF"};
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: Lexend Deca;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 5px;
    background-color: ${props => props.color ? "#CFCFCF" : "#FFFFFF"};
`