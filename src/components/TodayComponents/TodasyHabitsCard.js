import axios from "axios"
import { useContext, useState } from "react"
import { BsCheckLg } from "react-icons/bs"
import { AuthContext } from "../../contexts/Auth"
import { P, P2, P3, TodayHabitsLayout, UpperLayoutConteiner, IconContainer } from "../../pages/TodayPage/styles"

export default function TodayHabitsCard(props) {
    const { id, done, index, highestSequence, currentSequence, name, setTodayHabits, TodayHabits } = props
    const [isDone, setIsDone] = useState(done)
    const { user, setResetPage, resetPage } = useContext(AuthContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function makeItDoneOrUndone(id, index) {

        if (done === false) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config).then((resp) => {
                setResetPage(!resetPage)
                setIsDone(!isDone)
                const newArray = TodayHabits
                newArray[index].done = !done
                setTodayHabits(newArray)

            }).catch((resp) => {

                console.log(resp)
            })
        }

        else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config).then((resp) => {
                const newArray = TodayHabits
                newArray[index].done = !done
                setTodayHabits(newArray)
                setResetPage(!resetPage)
                setIsDone(!isDone)
            }).catch((resp) => {
                console.log(resp)
            })


        }
    }

    return (
        < TodayHabitsLayout >
            <UpperLayoutConteiner>
                <p>{name}</p>
                <P>Sequência atual: <P2 currentSequence={currentSequence}>{currentSequence} dias</P2></P>
                <P> Seu recorde: <P3 currentSequence={currentSequence} highestSequence={highestSequence}>{highestSequence} dias</P3></P>
            </UpperLayoutConteiner>
            <IconContainer isDone={isDone} onClick={() => { makeItDoneOrUndone(id, index) }}>
                <BsCheckLg color={"white"} size={40} />
            </IconContainer>
        </TodayHabitsLayout>
    )
}
