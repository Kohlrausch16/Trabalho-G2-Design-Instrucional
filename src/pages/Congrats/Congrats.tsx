import { MainContainer, PhoneContainer } from "../../GeneralStyle";
import { CongratsContainer, CongratsText } from "./CongratsStyle";
import { ButtonContainer, StartButton } from "../Home/HomeStyle";

const Congrats = () =>{
    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <CongratsContainer>
                    <CongratsText>
                        Muito bem! Você realmente conseguiu terminar esse projeto — e o fez com muita rapidez. Estou muito satisfeito com você! A partir de hoje, você estará sob minha proteção. Pode ter certeza de que ninguém, em lugar nenhum do mundo, ousará desrespeitar um homem de Alexandre, O Grande.
                    </CongratsText>
                    <ButtonContainer>
                        <StartButton href="/level-selector">Retonar ao menu</StartButton>
                    </ButtonContainer>
                </CongratsContainer>
            </PhoneContainer>
        </MainContainer>
    </>
    );

}

export default Congrats;

/*
<ButtonContainer>
    <Button> Retornar ao menu</Button>
</ButtonContainer>
*/