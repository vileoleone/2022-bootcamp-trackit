
import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import Habits from "../../components/Habits";
import  {AddHabit, HabitsOuterContainer, AddIcon} from "./Style"
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


