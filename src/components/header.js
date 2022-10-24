import TrackItSignature from "../assets/images/TrackItSignature.png"
import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../contexts/Auth"
import { Link } from "react-router-dom"
export default function Header() {
    const { user } = useContext(AuthContext)
    return (
        <HeaderBox>
            <Link  to = "/">
                <Signature src={TrackItSignature} alt="Signature" />
            </Link>
            <LoginImagebox data-identifier="avatar" src={user.image} alt="loginImage" />
        </HeaderBox>
    )
}

const HeaderBox = styled.div`
    background-color: #126BA5;
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    box-shadow: 0px 4px 4px   rgba(0,0,0,0.15);
    z-index: 1;

    `
const Signature = styled.img`
    width: 97px;
    height: 50px;
    margin-left: 20px
   ;
`

const LoginImagebox = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 18px;
 
`

