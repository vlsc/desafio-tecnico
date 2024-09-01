import styled from 'styled-components'

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    gap: 8px;

    .label {
        font-size: 15px;
        font-weight: 500;
    }

    .alert{
        font-size: 12px;
        color: red;
    }
`

export const Input = styled.input`
    font-size: 14px;
    font-color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    background-color: #1E1E26;
    outline: none;
    border: 1px solid grey;
`

export const TextArea = styled.textarea`
    font-size: 14px;
    font-color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    background-color: #1E1E26;
    outline: none;
    border: 1px solid grey;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    height: 100px;
    resize: none;
`
