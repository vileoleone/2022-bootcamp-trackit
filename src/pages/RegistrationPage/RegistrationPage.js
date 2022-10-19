import { Link } from "react-router-dom"
import Logo from "../../assets/images/TrackItLogo.png"
import { HomePageContainer, Form, Input, SubmitButton } from "./styles"

export default function RegistrationPage() {
    return (
        <HomePageContainer>
            <img src={Logo} alt="logo" />
            <Form>
                <Input data-identifier="" required type="email" name="email" placeholder="email" />
                <Input data-identifier="" required type="password" name="password" placeholder="senha" />
                <Input data-identifier="" required type="text" name="name" placeholder="nome" />
                <Input data-identifier="" required type="url" name="photo" placeholder="foto" />
                <SubmitButton data-identifier="" type="submit" >Cadastrar</SubmitButton>
            </Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </HomePageContainer>
    )
}
