import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
    gap: 30px;
    max-width: 72%;
    width: 72%;
    height: 100%;

    h1 {
        font-size: 22px;
        line-height: 30px;
        margin: 0;
        padding: 0;

        @media only screen and (max-device-width: 430px) {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 3px;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-device-width: 430px) {
            img{
                position: fixed;
                bottom: 20px;
                right: 20px;
            }
        }
    }

    img{
        cursor: pointer;
    }

    @media only screen and (max-device-width: 430px) {
        width: 90%;
        padding: 0;
        gap: 17px;
        margin: auto;
        max-width: 90%;
    }
`
