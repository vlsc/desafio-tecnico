import styled from 'styled-components'

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    span {
        font-size: 22px;
        font-weight: bold;

        @media only screen and (max-device-width: 430px) {
            font-size: 20px;
        }
    }
`
