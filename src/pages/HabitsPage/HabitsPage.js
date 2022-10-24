
import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import Habits from "../../components/HabitsLayouts/Habits";
import { AddHabit, HabitsOuterContainer, AddIcon } from "./Style"
import { useState } from "react";

export default function HabitsPage() {
    const [addHabit, setAddHabit] = useState(false)


    return (
        <>
            <HeaderBox />
            <HabitsOuterContainer>

                <AddHabit>
                    <h2>Meus hábitos</h2>
                    <AddIcon data-identifier="create-habit-btn" onClick={() => {
                        setAddHabit(!addHabit)
                    }}><p>+</p></AddIcon>
                </AddHabit>

                <Habits addHabit={addHabit} setAddHabit={setAddHabit} />
            </HabitsOuterContainer>
            <Footer />
        </>
    )
}


