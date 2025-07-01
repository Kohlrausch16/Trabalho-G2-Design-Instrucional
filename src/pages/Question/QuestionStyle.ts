import styled from "styled-components";

interface ButtonActionProps{
    active: boolean;
}

export const QuestionArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 4;
    background-image: linear-gradient(to bottom, rgba(118, 56, 173, 0.73) 0%, transparent 40%);
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 35%;
    font-family: 'Montserrat';
    font-weight: normal;
    
    font-size: 0.7dvw;
    color: white;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    gap: 5%;
    flex: 1;
`;

export const Button = styled.button<ButtonActionProps>`
    display: flex;
    width: 20%;
    height: 40%;
    border-radius: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.active) ? 'transparent' : 'transparent'};
    border: 1px solid transparent;
    color: ${props => (props.active) ? 'hsla(272, 51.10%, 44.90%, 0.73)' : 'grey'};

    &:hover{
        cursor: ${props => (props.active) ? 'pointer' : 'not-allowed'};
        border: ${props => (props.active) ? '1px solid hsla(272, 51.10%, 44.90%, 0.73)' : '1px solid transparent'};
    }
`;