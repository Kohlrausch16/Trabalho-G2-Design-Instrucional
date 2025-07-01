import { MainContainer, PhoneContainer, TitleContainer, Title } from "../../GeneralStyle";
import { LevelSelectorCard, LevelSelectorContainer, GradientSection, CardTitle, CardImage } from "./LevelSelector";
import foto from '../../assets/images/bom_de_guera.png';
import '../../main.css';

const LevelSelector = () =>{

  return(
  <>
    <MainContainer>
      <PhoneContainer>
        <TitleContainer fontSize={1.5}>
            <Title>Níveis</Title>
        </TitleContainer>

        <LevelSelectorContainer>
            <LevelSelectorCard href="/story" borderColor="hsla(272, 51.10%, 44.90%, 0.73)">
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