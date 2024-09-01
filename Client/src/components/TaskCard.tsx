import styled from 'styled-components'

export const TaskCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #1E1E26;
    border-radius: 4px;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 16px;
        width: 100%;
        overflow: hidden;

        .title{
            color: #EE69AC;
            font-weight: 500;
            font-size: 14px;
            text-align: start;
            text-overflow: ellipsis; 
            overflow: hidden; 
            white-space: nowrap;
            width: 100%;
            cursor: pointer;

            
        }

        .title:hover{
            text-decoration: underline #EE69AC;
        }

        .description{
            font-size: 12px;
            text-align: start;
            text-overflow: ellipsis; 
            overflow: hidden; 
            white-space: nowrap;
            width: 100%;
        }
    }

    img{
        cursor: pointer;
        margin-right: 16px;
        max-width: 24px;
    }
`
