import styled from 'styled-components'

export const Container = styled.div`
    background-color: #16161C;
    display: flex;
    height: 100%;
    overflow: hidden;

    .list::-webkit-scrollbar {
        width: 7px;

        @media only screen and (max-device-width: 430px) {
            width: 0px;
        }
    }

    .list::-webkit-scrollbar-thumb {
        background: linear-gradient(0deg, #F29682 0%, #EE69AC 50%, #CB4BCF 100%);
        border-radius: 5px;
    }

    .list::-webkit-scrollbar-track {
        background-color: transparent;
    }

    @media only screen and (max-device-width: 430px) {
        flex-direction: column;
    }
`
