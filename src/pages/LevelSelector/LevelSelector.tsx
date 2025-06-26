import { MainContainer, PhoneContainer, TitleContainer, Title } from "../../GeneralStyle";
import { LevelSelectorCard, LevelSelectorContainer, GradientSection, CardTitle } from "./LevelSelector";

const LevelSelector = () =>{

  return(
  <>
    <MainContainer>
      <PhoneContainer>
        <TitleContainer fontSize={1.5}>
            <Title>Níveis</Title>
        </TitleContainer>

        <LevelSelectorContainer>
          <LevelSelectorCard borderColor="blue">
            <GradientSection />
            <CardTitle> Mesopotâmia </CardTitle>

          </LevelSelectorCard>
          <LevelSelectorCard borderColor="green"> Test </LevelSelectorCard>

        </LevelSelectorContainer>

      </PhoneContainer>
    </MainContainer>
  </>
  );
}


export default LevelSelector;