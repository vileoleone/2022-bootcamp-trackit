import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import { AuthContext } from "../../contexts/Auth"
import IndividualDay from "./IndividualDay";
import { days, URL } from "../constants"
import { ThreeDots } from "react-loader-spinner"
export default function BlankHabitCard(props) {

    const [buttonAnimation, setButtonAnimation] = useState("Salvar")
    const [disabled, setDisabled] = useState(false)
    const { habitsArray, setHabitsArray, user } = useContext(AuthContext)
    const { setAddHabit, habitsAdded, setHabitsAdded } = props
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }


    function handleHabit(e) {
        setHabitsArray({ ...habitsArray, [e.target.name]: e.target.value });
    }

    function resetBlankCard(situation) {

        if (situation === "success") {
            setHabitsArray({
                ...habitsArray,
                name: "",
                days: []

            })
            setAddHabit(false)
        }
        else if (situation === "fail") {
            setHabitsArray({
                ...habitsArray,
                name: "",
                days: []

            })
        }

        else {
            setAddHabit(false)
       
        }
    }

    function postHabit() {
        setDisabled(true)

        setButtonAnimation(

            <ThreeDots
                height="60"
                width="60"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />

        )
        axios.post(`${URL}habits`, habitsArray, config)

            .then((resp) => {
                setButtonAnimation("Salvar")
                resetBlankCard("success")
                setDisabled(false)
                const newArray5 = [...habitsAdded, resp.data]
                setHabitsAdded(newArray5)
                
            })
            .catch((resp) => {
                setDisabled(false)
                alert(resp)
                setButtonAnimation("Salvar")
                resetBlankCard("fail")

            })
    }


    return (
        <BlankLayout>
            <Input data-identifier="input-habit-name" disabled={disabled} required type="text" name="name" placeholder="nome do hábito" onChange={handleHabit} value={habitsArray.name} />

            <DayOfWeek data-identifier="week-day-btn" >
                {days.map((day, index) => {
                    return (
                        <IndividualDay data-identifier="week-day-btn" disabled={disabled} key={index} index={index} day={day} ></IndividualDay>
                    )
                })}
            </DayOfWeek>

            <ButtonContainer>
                <CancelButton  data-identifier="cancel-habit-create-btn" disabled={disabled} type="button" name="Cancelar" value="Cancelar" onClick={() => resetBlankCard("")} >Cancelar</CancelButton>
                <SaveButton data-identifier="save-habit-create-btn" disabled={disabled} type="button" name="Salvar" onClick={postHabit} >{buttonAnimation}</SaveButton>
            </ButtonContainer>
        </BlankLayout>

    )
}


const ButtonContainer = styled.div`
    display: flex;
    margin-left: 140px;

`
const SaveButton = styled.button`
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
     display:flex;
     justify-content: center;
     align-items: center;
`
const CancelButton = styled.button`
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