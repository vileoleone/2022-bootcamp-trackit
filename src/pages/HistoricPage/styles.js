import styled from "styled-components";


export const HabitsOuterContainer = styled.div`
    align-items: center;
    background-color: rgb(241,241,241);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
    width: 100%;
    margin-top: 50px;
    h2{
        color: #126BA5;
        font-size: 25px;
        font-weight: 400;
        font-family: Lexend Deca;
    }
`

export const AddHabit = styled.span`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const NoHabitP = styled.p`
    color: #666666;
    font-size: 18px;
    font-weight: 600;
    font-family: lexend Deca;
`