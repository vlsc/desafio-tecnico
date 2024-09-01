import styled from 'styled-components'

export const Header = styled.nav`
    background-color: #1A1A21;
    display: flex;
    justify-content: flex-end;
    padding: 12px 30px;
    align-items: center;

    img{
        cursor: pointer;

        @media only screen and (max-device-width: 430px) {
            width: 22px;
        }
    }
`
