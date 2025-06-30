import styled from "styled-components";

interface LevelCardProps{
  borderColor: string;
}

export const LevelSelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 2% 0%;
  gap: 2%;
  width: 100%;
  flex: 4;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const LevelSelectorCard = styled.a<LevelCardProps>`
  position: relative;
  display: flex;
  align-self: flex-start;
  justify-content: baseline;
  align-items: center;
  width: 96%;
  height: 20%;
  border-radius: 10px;
  text-decoration: none;
  border: solid 1px ${props => props.borderColor};
  transition: transform 0.5s;

  &:hover{
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const GradientSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(to right, transparent 0%, #e8e8e9 60%);
`;

export const CardTitle = styled.h1`
  z-index: 10;
  font-family: 'Montserrat';
  font-weight: normal;
  color:rgba(118, 56, 173, 0.73);
  font-size: 3dvh;
  transform: translateX(50%);
`;

export const CardImage = styled.img`
  align-self: flex-start;  
  height: 100%;
`;