import styled from 'styled-components'

export const LoginContainer = styled.div`
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    button{
        margin-top: 24px;
    }

    a{
        margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
    }

    @media only screen and (max-device-width: 430px) {
        width: 100vw;
        background-color: #16161C;
        height: 100vh;
        gap: 0;
        justify-content: center;
    }
`

export const FormLogin = styled.div`
    background-color: #16161C;
    margin: 0 auto;
    border-radius: 5px;
    width: 25%;
    min-width: 300px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.1);

    .title{
        width: 100%;
        text-align: start;
    }

    .divider{
        border-bottom: 1px solid grey;
        width: 100%;

        @media only screen and (max-device-width: 430px) {
            display: none;
        }
    }

    .alert{
        font-size: 14px;
        color: red;
    }

    h3{
        font-size: 20px;
        font-weight: bold;
        margin: 0;
    }

    button{
        margin-top: 10px;
    }

    a{
        margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
    }

    @media only screen and (max-device-width: 430px) {
        min-width: auto;
        width: 80%;
        padding: 0;
        box-shadow: none;
    }
`