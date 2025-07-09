import { MainContainer, PhoneContainer, TitleContainer, Title } from "../../GeneralStyle";
import { HomeArea, SquareShapeContainer, HomeSquareShape, StartButton, ButtonContainer } from "./HomeStyle";

const Home = () =>{

    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <HomeArea>
                    <TitleContainer fontSize={2}>
                        <Title>MATH TIME</Title>
                    </TitleContainer>
                    
                    <SquareShapeContainer>
                        <HomeSquareShape height={72} />
                        <HomeSquareShape height={65} />
                        <HomeSquareShape height={58} />
                        <HomeSquareShape height={51} />
                        <ButtonContainer>
                            <StartButton href="/level-selector">Começar</StartButton>
                        </ButtonContainer>
                    </SquareShapeContainer>
                </HomeArea>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Home;