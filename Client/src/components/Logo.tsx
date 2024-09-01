import styled from 'styled-components'

export const Logo = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    margin: auto;

    span {
        font-size: 24px;
        font-weight: bold;

        @media only screen and (max-device-width: 430px) {
            display: none;
        }
    }

    p {
        margin: 0px;
        font-size: 16px;

        @media only screen and (max-device-width: 430px) {
            display: none;
        }
    }

    img {
        width: 50px;

        @media only screen and (max-device-width: 430px) {
            width: auto;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media only screen and (max-device-width: 430px) {
        gap: 0;
        margin: 0;
        padding-bottom: 30px;
    }
`
