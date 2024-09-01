import styled from 'styled-components'

export const Footer = styled.div`
    display: flex;
    gap: 18px;
    align-items: flex-start;

    span {
        font-size: 18px;
        font-weight: 600;
    }

    p {
        margin: 0px;
        font-size: 14px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media only screen and (max-device-width: 430px) {
        display: none;
    }
`
