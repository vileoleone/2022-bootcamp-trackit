import { useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import styled from "styled-components"
import { AuthContext } from '../contexts/Auth';
export default function Footer() {
    const { markedNumber } = useContext(AuthContext)
    return (
        <FooterBox>
            <Link data-identifier="habit-page-action" to='/Habitos' style={{ textDecoration: 'none' }}>
                <p>Hábitos</p>
            </Link>
            <Link to='/Hoje' style={{ textDecoration: 'none' }}>
                <TodayImage ><CircularProgressbar
                    background={true} value={markedNumber}
                    text={`Hoje`}
                    styles={buildStyles({
                        textSize: '22px',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                        pathColor: "#FFFFFF"

                    })}
                /></TodayImage>
            </Link>
            <Link data-identifier="historic-page-action"  to='/Historico' style={{ textDecoration: 'none' }}>
                <p>Histórico</p>
            </Link>
        </FooterBox>
    )
}

const FooterBox = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    p{
        font-size: 18px;
        font-weight: 400;
        color: #52B6FF;
        font-family: Lexend Deca;
        text-decoration: none;
    }
    `
const TodayImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    padding: 5px;
    background-color: #52B6FF;
    margin-bottom: 45px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 18px;
    font-family: Lexend Deca;
    font-weight: 500;
    text-decoration: none;
    /* box-shadow: inset 10px 10px #FFFFFF; */
`
