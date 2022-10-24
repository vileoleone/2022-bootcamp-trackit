import styled from "styled-components";


export const IconContainer = styled.div`
 background-color: ${props => props.isDone ? "#8FC549" :"#E7E7E7" };
 width: 70px;
 height: 70px;
 border-radius: 5px;
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Paragraph = styled.p`
color: ${props => (props.markedNumber === 0 || isNaN(props.markedNumber) )? "#BABABA" : "#8FC549"} ;
`

export const HabitsOuterContainer = styled.div`
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(241,241,241);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    margin-bottom: 70px;
    padding-bottom: 40px;
    h2{
        color: #126BA5;
        font-size: 25px;
        font-weight: 400;
        font-family: Lexend Deca;
        margin-top: 90px;
        margin-bottom: 0px;
       
    }
    p{
       
        font-size: 18px;
        font-weight: 600;
        font-family: Lexend Deca;
        margin:0;
        margin-bottom: 20px;
        
    }

`

export const UpperLayoutConteiner = styled.div`
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
 export const TodayHabitsLayout = styled.div`
    width: 320px;
    height: 95px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
    box-sizing: border-box;
`

export const P = styled.h3`
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 70px;
    font-family: Lexend Deca;
    font-weight: 400;
    color: "#666666" ;
    margin-top: 2px;
    margin-bottom: 2px;
    align-items: center;
`
export const P2 = styled.h3`
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 50px;
    font-family: Lexend Deca;
    color: ${props => (props.currentSequence > 0) ? "#8FC549" : "#666666"} ;
    margin-top: 2px;
    margin-bottom: 2px;

`

export const P3 = styled.h3`
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 70px;
    font-family: Lexend Deca;
    color: ${props => (props.currentSequence === props.highestSequence ) ? "#8FC549" : "#666666"} ;
    margin-top: 2px;
    margin-bottom: 2px;

`
