import HeaderBox from "../../components/header";
import Footer from "../../components/Footer";
import { BsCheckLg } from "react-icons/bs"

import {HabitsOuterContainer, P2 , HabitLayout, UpperLayoutConteiner, IconContainer } from "./styles.js"

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

