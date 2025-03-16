import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 85px;
    background-color:rgb(179, 131, 242);

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size:  24px;
    font-family: 'Roboto';

    border-radius: 10px;

    input {
        width: 100%;
        height: 85px;
        background-color:rgb(179, 131, 242);
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size:  24px;
        font-family: 'Roboto';
        color: white;
    }
`