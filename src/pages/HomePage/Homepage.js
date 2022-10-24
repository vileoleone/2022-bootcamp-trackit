import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/images/TrackItLogo.png"
import { HomePageContainer, Form, Input, SubmitButton } from "./styles"
import { URL } from "../../components/constants"
import axios from "axios"
import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/Auth"
import { ThreeDots } from "react-loader-spinner"
export default function HomePage() {
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    const [buttonAnimation, setButtonAnimation] = useState("Entrar")
    const { setUser } = useContext(AuthContext)
    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )

    function handleForm(e) {
        setForm({
            ...form, [e.target.name]: e.target.value,
        })
        
    }

    function login(e) {
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
        
        axios.post(`${URL}auth/login`, form)
            .then((resp) => {

                setDisabled(false)
                const newArray = resp.data
                setUser( newArray )
                navigate('/habitos')

            }).catch((error) => {

                setButtonAnimation('Login')
                setDisabled(false)
                alert(`Login ou senha inseridos incorretamente`)
              

            }
            )
    }


    return (
        <HomePageContainer>
            <img src={Logo} alt="logo" />
            <Form onSubmit={e => login(e)}>
                <Input data-identifier="email" disabled={disabled} required type="email" name="email" placeholder="email" onChange={handleForm} value= {form.email} />
                <Input data-identifier="password" disabled={disabled} required type="password" name="password" placeholder="senha" onChange={handleForm} value= {form.password} />
                <SubmitButton data-identifier="login-btn" disabled={disabled} type="submit" >{buttonAnimation}</SubmitButton>
            </Form>
            <Link to="/cadastro">
                <p data-identifier="sign-up-action" >Não tem uma conta? Cadastre-se!</p>
            </Link>
        </HomePageContainer>
    )
}
