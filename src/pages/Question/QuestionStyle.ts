import styled from "styled-components";

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5%;
`;

export const PageHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex: 1;
`;

export const ContentContainer = styled.div`
    width: 80%;
    flex: 12;
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 0.7dvw;
    padding: 5% 0%;
    text-align: center;
    color: hsla(272, 51.10%, 44.90%);
`;

export const OptionsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    flex: 3.5;
    gap: 5px;
`;

export const OptionSelector = styled.a`
    grid: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsla(272, 51.10%, 44.90%, 0.73);
    color: white;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-weight: normal;
    color: #e8e8e9;

    &:hover{
        cursor: pointer;
        background-color: hsla(272, 51.10%, 44.90%);
    }
`;