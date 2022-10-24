import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";
import BlankHabitCard from "./BlankHabitCard";
import HabitsCard from "./HabitsCard";
import { URL } from "../constants";
export default function Habits(props) {
    const { addHabit, setAddHabit } = props

    const { user } = useContext(AuthContext)

    const [habitsAdded, setHabitsAdded] = useState([])
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        axios.get(`${URL}habits`, config)
            .then((resp) => {
                setHabitsAdded(...habitsAdded, resp.data)

            })
            .catch((resp) => {
                console.log(resp.response.data.message)
            }) 
    }, [])



    if (habitsAdded.length === 0) {

        if (!addHabit) {
            return (
                <NoHabitP data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitP>
            )
        }
        return (
            <>

                <BlankHabitCard habitsAdded={habitsAdded} setHabitsAdded={setHabitsAdded} setAddHabit={setAddHabit} addHabit={addHabit} />
                <NoHabitP data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitP>
            </>

        )
    }

    else {
        if (!addHabit) {
            return (
                <>
                    {
                        habitsAdded.map((card, index) => {
                            return (
                                <HabitsCard habitsAdded={habitsAdded} setHabitsAdded={setHabitsAdded} setAddHabit={setAddHabit} addHabit={addHabit} key={index} index={index} text={card.name} daysArray={card.days} id = {card.id} />
                            )
                        })
                    }
                </>
            )
        }
        return (
            <>
                <BlankHabitCard habitsAdded={habitsAdded} setHabitsAdded={setHabitsAdded} setAddHabit={setAddHabit} addHabit={addHabit} />
                {
                    habitsAdded.map((card, index) => {
                        return (
                            <HabitsCard habitsAdded={habitsAdded} setHabitsAdded={setHabitsAdded} key={index} index={index} text={card.name} daysArray={card.days} id={card.id} />
                        )
                    })
                }

            </>
        )
    }
}



const NoHabitP = styled.p`
    color: #666666;
    font-size: 18px;
    font-weight: 600;
    font-family: lexend Deca;
`



