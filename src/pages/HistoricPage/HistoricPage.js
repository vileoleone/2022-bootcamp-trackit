import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import { HabitsOuterContainer, AddHabit, NoHabitP } from "./styles.js";
export default function HistoricPage() {
    return (
        <>
            <HeaderBox />
            <HabitsOuterContainer>

                <AddHabit>
                    <h2>Meus hábitos</h2>
                </AddHabit>
                <NoHabitP>Em breve você poderá ver o histórico dos seus hábitos aqui!!</NoHabitP>
            </HabitsOuterContainer>
            <Footer />
        </>
    )
}

