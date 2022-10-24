import styled from "styled-components"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth"
export default function IndividualDay(props) {
    const { habitsArray, setHabitsArray } = useContext(AuthContext)
    const { day, index, disabled } = props


    function handleDay(index) {
        if (!habitsArray.days.includes(index)) {
            const newArray = habitsArray.days
            newArray.push(index)
            setHabitsArray({ ...habitsArray, days: newArray })
 
        }
        else {

            const newArray2 = habitsArray.days.filter(i => i !== index)
            console.log(newArray2)
            setHabitsArray({ ...habitsArray, days: newArray2 })

        }
    }


    return (
        <Day   color={habitsArray.days.includes(index)} disabled={disabled} onClick={() => { handleDay(index) }}>{day}</Day>

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