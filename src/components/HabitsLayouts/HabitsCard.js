import styled from "styled-components"
import { BsTrash } from 'react-icons/bs';
export default function HabitsCard() {
    const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
    return (
        <HabitLayout>
            <UpperLayoutConteiner>
                <p>Ler 1 capítulo de livro</p>
                <BsTrash />
            </UpperLayoutConteiner>


            <DayOfWeek>
                {days.map(day => {
                    return (
                        <Day>{day}</Day>
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
        margin-right: 70px;
        font-family: Lexend Deca;
        color: #666666;
        }
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
    padding-left: 20px;
    box-sizing: border-box;
`

const DayOfWeek = styled.div`
    width: 300px;
    height: 35px;
    font-size: 20px;
    display: flex;
    margin-bottom: 40px;

`

const Day = styled.div`
    width: 30px;
    height: 30px;
    color: #DBDBDB;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: Lexend Deca;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 5px;
`