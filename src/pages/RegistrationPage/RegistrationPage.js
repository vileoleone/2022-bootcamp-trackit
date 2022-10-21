import { Link } from "react-router-dom"
import Logo from "../../assets/images/TrackItLogo.png"
import { HomePageContainer, Form, Input, SubmitButton } from "./styles"
import { useContext} from "react"
import { AuthContext } from "../../contexts/Auth"
import { URL } from "../../components/constants"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function RegistrationPage() {
    
    const Navigate = useNavigate()
    const {user, setUser} = useContext(AuthContext)
    
    function handleForm(e) {
        setUser({...user,[e.target.name]: e.target.value,
        }) 
        console.log(user)
    }
    
    function Register(e) {
        e.preventDefault()
        axios.post(`${URL}auth/sign-up`, user)
            .then(() => {
                Navigate('/')
            })
    }
    
    return (
        <HomePageContainer>
            <img src={Logo} alt="logo" />
            <Form onSubmit  ={Register}>
                <Input data-identifier="" required type="email" name="email" placeholder="email" onChange={handleForm} value = {user.email} />
                <Input data-identifier="" required type="password" name="password" placeholder="senha" onChange={handleForm} value={user.password} />
                <Input data-identifier="" required type="text" name="name" placeholder="nome" onChange={handleForm} value={user.name} />
                <Input data-identifier="" required type="url" name="image" placeholder="foto" onChange={handleForm} value={user.image} />
                <SubmitButton data-identifier="" type="submit" >Cadastrar</SubmitButton>
            </Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </HomePageContainer>
    )
}
