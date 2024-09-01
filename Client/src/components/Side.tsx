import styled from 'styled-components'

export const Side = styled.div`
    background-color: #1A1A21;
    display: flex;
    flex-direction: column;
    min-width: 20%;
    width: 20%;
    max-width: 20%;
    justify-content: space-between;
    padding: 40px 30px;

    @media only screen and (max-device-width: 430px) {
        background-color: transparent;
        padding: 24px 20px;
        width: max-content;
        min-width: max-content;
        max-width: max-content;

        img{
            display: none;
        }
    }
`
