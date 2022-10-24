import styled from "styled-components"
import { BsTrash } from 'react-icons/bs';
import { days, URL } from "../constants";
import IndividualDayCard from "./IndividualDayCard";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";
import { useContext } from "react";
export default function HabitsCard(props) {
    const { user } = useContext(AuthContext)
    const { text, daysArray, id, habitsAdded, setHabitsAdded } = props
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    function deleteHabit() {
        const del = window.confirm("Por favor confirme a exclusão do hábito")
        if (del) {
            axios.delete(`${URL}habits/${id}`, config)
                .then((resp) => {
                    console.log("delete com sucesso")
                    
                    const newArray5 = habitsAdded.filter((i)=> i.id!== id)
                    setHabitsAdded(newArray5)
                   

                }).catch((resp) => {
                    console.log(resp.data)
                })

        }

    }

    return (
        <HabitLayout>
            <UpperLayoutConteiner>
                <p data-identifier="habit-name">{text}</p>
                <Container onClick={deleteHabit} data-identifier="delete-habit-btn">
                    <BsTrash size={20} />
                </Container>
            </UpperLayoutConteiner>
            <DayOfWeek>
                {days.map((day, index) => {
                    return (
                        <IndividualDayCard key={index} index={index} day={day} daysArray={daysArray} ></IndividualDayCard>
                    )
                })}
            </DayOfWeek>
        </HabitLayout>

    )
}

const UpperLayoutConteiner = styled.div`
    display: flex;
    align-items: center;
    p {
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 5px;
        font-family: Lexend Deca;
        color: #666666;
        }
`
const Container = styled.button`
   position: absolute;
   top: 15px;
   right: 10px;
   border: none;
   background-color: inherit;
`

const HabitLayout = styled.div`
    width: 340px;
    height: 90px;
    background-color: white;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 20px;
    box-sizing: border-box;
    position: relative;
`

const DayOfWeek = styled.div`
    width: 300px;
    height: 35px;
    font-size: 20px;
    display: flex;
    margin-bottom: 40px;

`
