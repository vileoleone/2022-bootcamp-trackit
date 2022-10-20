import styled from "styled-components";
import react from "react";
import { BsTrash } from 'react-icons/bs';
export default function Habits() {

    const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
    const [habitsArray, setHabitsArray] = react.useState([])

    if (habitsArray.length == 0) {
        return (
            <>
                <BlankLayout>
                    <Input data-identifier="" required type="text" name="name" placeholder="nome do hábito" />
                    <DayOfWeek>
                        {days.map(day => {
                            return (
                                <Day>{day}</Day>
                            )
                        })}
                    </DayOfWeek>
                    <ButtonContainer>
                        <CancelButton data-identifier="" type="button" name="Cancelar" value="Cancelar" />
                        <SaveButton data-identifier="" type="button" name="Salvar" value="Salvar" />
                    </ButtonContainer>
                </BlankLayout>

                <HabitLayout>
                    <UpperLayoutConteiner>
                        <p>Ler 1 capítulo de livro</p>
                        <BsTrash/>
                    </UpperLayoutConteiner>
                    
                    
                    <DayOfWeek>
                        {days.map(day => {
                            return (
                                <Day>{day}</Day>
                            )
                        })}
                    </DayOfWeek>
                </HabitLayout>



                <NoHabitP>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitP>
            </>
        )
    }




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
const ButtonContainer = styled.div`
    display: flex;
    margin-left: 140px;

`
const SaveButton = styled.input`
    width: 85px;
    height: 35px;
    background-color: #52B6FF;
    margin-bottom: 5px;
    color: #FFFFFF ;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: Lexend Deca;
     font-weight: 400;    
`
const CancelButton = styled.input`
    width: 85px;
    height: 35px;
    background-color: #FFFFFF;
    margin-bottom: 5px;
    color: #52B6FF;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    font-family: Lexend Deca;
     font-weight: 400;    
`


const NoHabitP = styled.p`
    color: #666666;
    font-size: 18px;
    font-weight: 600;
    font-family: lexend Deca;
`

const BlankLayout = styled.div`
    width: 300px;
    height: 170px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    border: 5px;
    border-radius: 5px;
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

const Input = styled.input`
    width: 300px;
    height: 45px;
    margin-bottom: 5px;
    color: #DBDBDB;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding-left: 5px;
    font-family: Lexend Deca;
    
    ::placeholder {
        color: #DBDBDB;
    }  
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