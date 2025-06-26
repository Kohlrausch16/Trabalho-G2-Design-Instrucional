import { MainContainer, PhoneContainer } from "../GeneralStyle";
import { HomeArea, SquareShapeContainer, TitleContainer, HomeTitle, HomeSquareShape, StartButton } from "./HomeStyle";

const Home = () =>{

    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <HomeArea>
                    <TitleContainer>
                        <HomeTitle>NOME DO JOGO</HomeTitle>
                    </TitleContainer>
                    
                    <SquareShapeContainer>
                        <HomeSquareShape height={72} />
                        <HomeSquareShape height={65} />
                        <HomeSquareShape height={58} />
                        <HomeSquareShape height={51} />
                        <StartButton> Start! </StartButton>
                    </SquareShapeContainer>
                </HomeArea>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Home;