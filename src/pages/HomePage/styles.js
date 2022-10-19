import styled from "styled-components"

export const Form = styled.form`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

`

export const SubmitButton = styled.button`
    width: 300px;
    height: 45px;
    background-color: #52B6FF;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 400;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: Lexend Deca;
     font-weight: 400;    
`

export const Input = styled.input`
    width: 300px;
    height: 45px;
    margin-bottom: 5px;
    color: #DBDBDB;
    font-size: 20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding-left: 5px;
    font-family: Lexend Deca;
    
    ::placeholder {
        color: #DBDBDB;
    }  
`

export const HomePageContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

    img{
        margin-top: 70px;
        margin-bottom: 30px;
        width: 180px;
        height: 180px;
    }

    p{
      color: #52B6FF;
      font-family: Lexend Deca;
      font-weight: 400;
      margin-top: 20px;
      font-size: 14px; 
      text-decoration: underline;
    }
`