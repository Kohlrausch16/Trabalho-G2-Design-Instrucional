import styled from 'styled-components';

interface SquareProps{
    height: number;
}

export const HomeArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const SquareShapeContainer = styled.div`
    display: flex;
    width: 100%;
    flex: 2.5;
`;

export const HomeSquareShape = styled.div<SquareProps>`
    position: absolute;
    align-self: flex-end;
    width: 100%;
    height: ${props => `${props.height}%`};
    background-color:rgba(36, 71, 84, 0.43);
    border-radius: 15px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 65%;
`;

export const StartButton = styled.a`
    background-color: white;
    padding: 4% 12%;
    align-self: flex-end;
    border-radius: 50px;
    font-size: 15px;
    border: none;
    color: #244754;
    font-family: 'Montserrat';
    font-weight: normal;
    transition: 0.5s;
    backgorund-color: red;
    margin-bottom: 5%;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`;

/*
    border-radius: 50px;
    font-size: 15px;
    border: none;
    color: #244754;
    font-family: 'Montserrat';
    font-weight: normal;
    transition: 0.5s;
    backgorund-color: red;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
*/