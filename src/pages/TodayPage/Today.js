import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import { HabitsOuterContainer, Paragraph } from "./styles.js"
import { date, formatDay, month, URL } from "../../components/constants";
import TodayHabitsCard from "../../components/TodayComponents/TodasyHabitsCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth";


export default function TodayPage() {
    const [TodayHabits, setTodayHabits] = useState([])
    const { user, resetPage, markedNumber, setmarkedNumber } = useContext(AuthContext)
    const today = formatDay()
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }
    const total = TodayHabits.length
    function numberOfMarked(total) {
        let variable = 0
        
        TodayHabits.forEach((i) => {
            if (i.done === true) {
                variable += 1
            }
        }
        )
        const percentage = Math.ceil(variable * 100 / total)
        return setmarkedNumber(percentage)
    }

    useEffect(() => {
        axios.get(`${URL}/habits/today`, config).then((resp) => {
            setTodayHabits(resp.data)
           
        }).catch((resp) => {
            alert(resp.response.data.message)
        })
    }, [resetPage])

    if (total !== 0) {
        numberOfMarked(total)
        return (
            <>
                <HeaderBox />
                <HabitsOuterContainer>
                    <h2 data-identifier="today-infos">{today}, {date}/{month}</h2>
                    <Paragraph data-identifier="today-infos"  markedNumber={markedNumber}>{markedNumber === 0 || isNaN(markedNumber) ? "Nenhum hábito concluído ainda" : `${markedNumber}% dos hábitos concluídos`}</Paragraph>

                    {TodayHabits.map((habit, index) => {
                        return (
                            <TodayHabitsCard data-identifier="today-infos" index={index} TodayHabits={TodayHabits} setTodayHabits={setTodayHabits} key={index} name={habit.name} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} id={habit.id} />
                        )

                    })}

                </HabitsOuterContainer>


                <Footer />
            </>
        )
    }
         
        
    
}

