import TrackItSignature from "../assets/images/TrackItSignature.png"
import loginImage from "../assets/images/loginImage.png"
import styled from "styled-components"
export default function Header() {
    return (
        <HeaderBox>
            <Signature src={TrackItSignature} alt="Signature" />
            <LoginImagebox src={loginImage} alt="loginImage" />
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

