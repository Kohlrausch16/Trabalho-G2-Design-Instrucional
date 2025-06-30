import { MainContainer, PhoneContainer, TitleContainer, Title } from "../../GeneralStyle";
import { LevelSelectorCard, LevelSelectorContainer, GradientSection, CardTitle, CardImage } from "./LevelSelector";
import foto from '../../assets/images/bom_de_guera.png';

const LevelSelector = () =>{

  return(
  <>
    <MainContainer>
      <PhoneContainer>
        <TitleContainer fontSize={1.5}>
            <Title>Níveis</Title>
        </TitleContainer>

        <LevelSelectorContainer>
          <LevelSelectorCard borderColor="#CCCCCC">
            <CardImage src={foto}/>
            <GradientSection />
            <CardTitle>Grécia</CardTitle>
          </LevelSelectorCard>
        </LevelSelectorContainer>

      </PhoneContainer>
    </MainContainer>
  </>
  );
}


export default LevelSelector;