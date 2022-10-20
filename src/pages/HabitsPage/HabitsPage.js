import styled from "styled-components";
import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import Habits from "../../components/Habits";
export default function HabitsPage() {
    return (
        <>
            <HeaderBox />
            <HabitsOuterContainer>

                <AddHabit>
                    <h2>Meus hábitos</h2>
                    <AddIcon><p>+</p></AddIcon>
                </AddHabit>

                <Habits/>
            </HabitsOuterContainer>
            <Footer />
        </>
    )
}


const HabitsOuterContainer = styled.div`
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

const AddHabit = styled.span`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const AddIcon = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #52B6FF;

    p{
        font-size: 26.98px;
        font-family: Lexend Deca;
    }
`