import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    margin: auto;

    @media only screen and (max-device-width: 430px) {
        width: 100vw;
    }
`
