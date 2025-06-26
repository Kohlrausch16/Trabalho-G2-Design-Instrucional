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

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
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
    background-color:rgba(118, 56, 173, 0.39);
    border-radius: 15px;
`;

export const HomeTitle = styled.h1`
    font-family: 'Montserrat';
    font-weight: normal;
    color:rgba(118, 56, 173, 0.73);
`;

export const StartButton = styled.button`
    position: absolute;
    z-index: 2;
    align-self: flex-end;
    width: 40%;
    margin-left: 30%;
    margin-bottom: 25%;
    height: 6%;
    border-radius: 50px;
    font-size: 15px;
    border: none;
    color:rgba(118, 56, 173, 0.73);
    font-family: 'Montserrat';
    font-weight: normal;
    transition: 0.5s;

    &:hover{
        transform: scale(1.05);
    }
`;