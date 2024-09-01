import styled from 'styled-components'

export const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    height: 80%;
    overflow: auto;
    width: 100%;

    @media only screen and (max-device-width: 430px) {
        height: 100%;
    }
`
