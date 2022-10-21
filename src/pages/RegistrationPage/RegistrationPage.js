import { Link } from "react-router-dom"
import Logo from "../../assets/images/TrackItLogo.png"
import { HomePageContainer, Form, Input, SubmitButton } from "./styles"
import { useContext, useState} from "react"
import { AuthContext } from "../../contexts/Auth"
import { URL } from "../../components/constants"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner'

export default function RegistrationPage() {
    const [disabled, setDisabled] = useState(false)

    const Navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)
    const [buttonAnimation, setButtonAnimation] = useState("cadastrar")
  

    function handleForm(e) {
        setUser({...user,[e.target.name]: e.target.value,
        }) 
    }
    
    function Register(e) {

        e.preventDefault()
        setDisabled(true)
        setButtonAnimation(<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}

        />)
        axios.post(`${URL}auth/sign-up`, user)
            .then(() => {

                setDisabled(false)
                Navigate('/')

            }).catch((error) => {

                setDisabled(false)
                setButtonAnimation('Cadastrar')
                alert(`Por favor preencha os campos corretamente ${error.response.message}`)
                console.log(error.response.data)

            }
                )
    }
    
    return (
        <HomePageContainer>
            <img src={Logo} alt="logo" />
            <Form onSubmit  ={Register}>
                <Input data-identifier="" required disabled = {disabled}  type="email" name="email" placeholder="email" onChange={handleForm} value = {user.email} />
                <Input data-identifier="" required disabled={disabled} type="password" name="password" placeholder="senha" onChange={handleForm} value={user.password} />
                <Input data-identifier="" required disabled={disabled} type="text" name="name" placeholder="nome" onChange={handleForm} value={user.name} />
                <Input data-identifier="" required disabled={disabled} type="url" name="image" placeholder="foto" onChange={handleForm} value={user.image} />
                <SubmitButton data-identifier="" disabled={disabled} type="submit" >{buttonAnimation}</SubmitButton>
            </Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </HomePageContainer>
    )
}
