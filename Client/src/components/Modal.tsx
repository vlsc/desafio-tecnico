import styled from 'styled-components'

export const Modal = styled.div<{ open: boolean }>`
    display: ${props => props.open ? "flex" : "none"};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

    .modal-content {
        position: relative;
        background-color: #16161C;
        margin: auto;
        border-radius: 5px;
        width: 30%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        box-shadow: 10px 10px 5px rgba(0,0,0,0.1);

        @media only screen and (max-device-width: 430px) {
            width: 60%;
            padding: 30px;
            gap: 15px;
        }
    }

    .task-modal{
        position: relative;
        background-color: #16161C;
        margin: auto;
        border-radius: 5px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        box-shadow: 10px 10px 5px rgba(0,0,0,0.1);
        word-wrap: break-word;

        @media only screen and (max-device-width: 430px) {
            width: 100%;
            padding: 30px;
            gap: 15px;
        }

        span{
            text-align: left;
            width: 100%;
        }

        h1{
            text-align: left;
        }

    }

    h1 {
        font-size: 20px;
        font-weight: 500;
        color: #EE69AC;
        margin: 0;
        text-overflow: wrap;
        width: 100%;
    }

    img {
        position: absolute;
        top: 12px;
        right: 12px;
        cursor: pointer;
    }
`