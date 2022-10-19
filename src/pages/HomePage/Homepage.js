import { Link } from "react-router-dom"
import Logo from "../../assets/images/TrackItLogo.png"
import { HomePageContainer, Form, Input, SubmitButton } from "./styles"

export default function HomePage() {
    return (
        <HomePageContainer>
            <img src={Logo} alt="logo" />
            <Form>
                <Input data-identifier="" required type="email" name="email" placeholder="email" />
                <Input data-identifier="" required type="password" name="password" placeholder="senha" />
                <SubmitButton data-identifier="" type="submit" >Entrar</SubmitButton>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </HomePageContainer>
    )
}
