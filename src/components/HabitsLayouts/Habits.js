import styled from "styled-components";
import { useContext, useState } from "react";

import { AuthContext} from "../../contexts/Auth";
import BlankHabitCard from "./BlankHabitCard";
import HabitsCard from "./HabitsCard";
export default function Habits() {

    
    const { habitsArray } = useContext(AuthContext)
    const [clicked, setClicked] = useState(false)

    if (habitsArray.length === 0 /* && clicked === false */) {
        return (
            <NoHabitP>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitP>
        )
    }

}




const NoHabitP = styled.p`
    color: #666666;
    font-size: 18px;
    font-weight: 600;
    font-family: lexend Deca;
`



