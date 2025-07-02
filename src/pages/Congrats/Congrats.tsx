import { MainContainer, PhoneContainer } from "../../GeneralStyle";
import { Button, ButtonContainer } from "../Question/QuestionStyle";
import { CongratsContainer } from "./CongratsStyle";

const Congrats = () =>{
    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <CongratsContainer>
                    Parabéns!
                    <ButtonContainer>
                        <Button> Retornar ao menu</Button>
                    </ButtonContainer>
                </CongratsContainer>
            </PhoneContainer>
        </MainContainer>
    </>
    );

}

export default Congrats;