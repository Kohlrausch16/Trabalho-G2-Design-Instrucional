import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    height: 100dvh;
    padding: 0% 0%;
    background-image: linear-gradient(to bottom,hsl(253, 56.20%, 93.70%), #D6CCF2, #B9AEE0);
`;

export const PhoneContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    align-self: center;
    background-color:rgb(232, 232, 233);
    box-shadow:rgb(105, 104, 104) 5px 5px 10px;
    
    @media(min-width: 1000px){
        width: 380px;
        height: 90%;
        max-height: 750px;
        border-radius: 15px;
    }
`;