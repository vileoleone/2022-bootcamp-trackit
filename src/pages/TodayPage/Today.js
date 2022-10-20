import styled from "styled-components";
import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import Habits from "../../components/Habits";
import { BsCheckLg } from "react-icons/bs"
export default function TodayPage() {

    return (
        <>
            <HeaderBox />
            <HabitsOuterContainer>

                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
               
                <HabitLayout>
                    <UpperLayoutConteiner>
                        <p>Ler 1 capítulo de livro</p>
                        <P2>Sequência atual: 3 dias</P2>
                        <P2>Seu recorde: 5 dias</P2>
                    </UpperLayoutConteiner>
                    <IconContainer>
                        <BsCheckLg color="white" size={40} />
                    </IconContainer>
                </HabitLayout>
            </HabitsOuterContainer>


            <Footer />
        </>
    )
}


const IconContainer = styled.div`
 background-color: #8FC549;
 width: 70px;
 height: 70px;
 border-radius: 5px;
 display: flex;
 align-items: center;
 justify-content: center;


`
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
    align-items: flex-start;
    
    h2{
        color: #126BA5;
        font-size: 25px;
        font-weight: 400;
        font-family: Lexend Deca;
        margin-top: 98px;
        margin-bottom: 0px;
    }
    p{
        color: #BABABA;
        font-size: 18px;
        font-weight: 600;
        font-family: Lexend Deca;
        margin:0;
        margin-bottom: 30px;
        
    }

`

const UpperLayoutConteiner = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 5px;
        font-family: Lexend Deca;
        color: #666666;
        }
`
const HabitLayout = styled.div`
    width: 320px;
    height: 95px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    margin-top: 10px;
    
    padding-left: 5px;
    box-sizing: border-box;
`

const P2 = styled.h3`
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 70px;
    font-family: Lexend Deca;
    color: #666666;
    margin-top: 2px;
    margin-bottom: 2px;

`
