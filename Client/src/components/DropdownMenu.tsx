import styled from 'styled-components'

export const Dropdown = styled.div`
    position: relative;

    img{
        margin-top: 5px;
    }
`

export const DropdownMenu = styled.div<{ open: boolean }>`
    background-color: #292934;
    right: 0;
    border-radius: 5px;
    display: flex;
    padding: 8px 15px;
    flex-direction: column;
    position: absolute;
    width: 90px;
    visibility: ${props => props.open ? "visible" : "hidden"};
    opacity: ${props => props.open ? "1" : "0"};
    cursor: pointer;

    span {
        font-size: 14px;
        font-weight: 500;
        
    }
`
