import styled from "styled-components";

interface ButtonActionProps{
    active: boolean;
}

export const StoryArea = styled.div`
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
    flex: 1.5;
    background-image: linear-gradient(to bottom,rgba(36, 71, 84, 0.75) 0%, transparent 90%);
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 100%;
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 1.5dvh;
    color: white;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    gap: 5%;
    flex: 1;
    padding: 5% 0% 0% 0%;
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
    color: ${props => (props.active) ? 'rgba(36, 71, 84, 0.75)' : 'grey'};

    &:hover{
        cursor: ${props => (props.active) ? 'pointer' : 'not-allowed'};
        border: ${props => (props.active) ? '1px solid rgba(36, 71, 84, 0.75)' : '1px solid transparent'};
    }
`;

export const BackgroundImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 95%;
    flex: 3;
    border-radius: 15px;
    border: 1px solid rgba(36, 71, 84, 0.75);
`;

export const SectionImage = styled.img`
    height: 100%;
    object-fit: cover;
`;