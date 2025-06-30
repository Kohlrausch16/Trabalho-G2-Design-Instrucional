import { MainContainer, PhoneContainer } from "../GeneralStyle";
import ProgressBar from "../layouts/ProgressBar";
import { HomeArea, SquareShapeContainer, TitleContainer, HomeTitle, HomeSquareShape, StartButton } from "./HomeStyle";
import { Link } from "react-router-dom";

const Home = () =>{

    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <HomeArea>
                    <ProgressBar />
                    <TitleContainer>
                        <HomeTitle>NOME DO JOGO</HomeTitle>
                    </TitleContainer>
                    
                    <SquareShapeContainer>
                        <HomeSquareShape height={72} />
                        <HomeSquareShape height={65} />
                        <HomeSquareShape height={58} /> 
                        <HomeSquareShape height={51} />
                        <Link to="/level-selector">
                            <StartButton> Start! </StartButton>
                        </Link>
                    </SquareShapeContainer>
                </HomeArea>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Home;