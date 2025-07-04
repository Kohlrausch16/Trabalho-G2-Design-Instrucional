import { MainContainer, PhoneContainer, TitleContainer, Title } from "../../GeneralStyle";
import { LevelSelectorCard, LevelSelectorContainer, GradientSection, CardTitle, CardImage } from "./LevelSelector";
import foto from '../../assets/images/alexandria.png';
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
            <LevelSelectorCard href="/story" borderColor="rgba(36, 71, 84, 0.69)">
              <CardImage src={foto}/>
              <GradientSection />
              <CardTitle>ALEXANDRIA</CardTitle>
            </LevelSelectorCard>

        </LevelSelectorContainer>

      </PhoneContainer>
    </MainContainer>
  </>
  );
}


export default LevelSelector;