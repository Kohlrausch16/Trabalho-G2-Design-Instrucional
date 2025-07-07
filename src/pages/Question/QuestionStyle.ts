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
    width: 90%;
    font-family: 'Montserrat';
    font-weight: normal;
    font-size: 1.2dvh;
    padding: 5% 0%;
    text-align: center;
    flex: 3; 
    color: rgba(36, 71, 84, 0.75);
`;

export const OptionsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    padding: 5% 0% 0% 0%;
    flex: 3.5;
    gap: 5px;
`;


export const BackgroundImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 95%;
    flex: 6.5;
    border-radius: 15px;
    border: 1px solid rgba(36, 71, 84, 0.75);
`;

















export const OptionSelector = styled.a`
    grid: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(36, 71, 84, 0.75);
    color: white;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-weight: normal;
    color: #e8e8e9;

    &:hover{
        cursor: pointer;
        background-color: #244754;
    }
`;

export const SectionImage = styled.img`
    height: 100%;
    object-fit: cover;
`;