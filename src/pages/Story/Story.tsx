import { useState } from "react";
import { MainContainer, PhoneContainer } from "../../GeneralStyle";
import { Button, ButtonContainer, StoryArea, TextContainer, TextSection } from "./StoryStyle";
import { useNavigate } from "react-router";

const Story = () =>{

    const [index, setIndexValue] = useState(0);
    const navigate = useNavigate();

    const storyContent = [
        {
            pageText: 'Olá XXXX, tu está pronto para o teste número 1? Te desejo boa sorte no passado e lembre-se: use apenas os conhecimentos predefinidos para concluir suas missões. Não podemos interferir mais do que o esperado na linha do tempo. O seu chip neural irá guiá-lo em sua missão e ajudá-lo se tu estiver com dificuldades — mas tu não vai precisar disso, não é?',
        },
        {
            pageText: 'Chip Neural iniciado Ano 331 a.C. — Localização: Alexandria, Egito. Tu está no corpo de um arquiteto vindo do Oriente para a cidade de Alexandria. tu acorda e percebe que está ajoelhado. À sua frente, um homem fala:',
        },
        {
            pageText: 'Erga a cabeça, arquiteto, eu tenho uma missão para ti. Em meus sonhos, tive visões sobre uma cidade que nunca será esquecida, e que eu deveria fundá-la. E tu FARÁ PARTE DISSO!!! Prove seu valor projetando uma praça em homenagem a Ísis. Desejo uma praça perfeita, com oito lados iguais, em honra à Deusa. Os sacerdotes egípcios izem que o número da Deusa é 2500, então essa praça deverá ter exatamente 2500 m².',
        },
        {
            pageText: 'Essa praça será fechada, e quero que sua porta principal esteja alinhada com a estrela Sírius. No centro da praça haverá um templo circular, perfeitamente inscrito em um quadrado que, por sua vez, estará inscrito no octógono.',
        },
        {
            pageText: 'E por fim, tu já deve ter percebido que nosso farol está ao norte do local onde será construída a praça. Tu deve garantir que, no dia do solstício de verão, ao meio-dia, a luz do sol toque o interior da praça. Eu irei, de tempos em tempos, observar o andamento da construção. Isso é tudo. Pode se retirar.',
        }
    ];

    function nextPage(){
        setIndexValue(index + 1);
        if(index == 4){
            navigate("/question");
        }
    }


    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <StoryArea>
                    <TextContainer>
                        <TextSection>
                            {storyContent[index].pageText}
                        </TextSection>
                    </TextContainer>
                
                    <ButtonContainer>
                    <Button active={(index == 0)? false : true} disabled={(index == 0)? true : false} onClick={() => setIndexValue(index - 1)}>
                        Back
                    </Button>

                    <Button active={true} disabled={false} onClick={() => nextPage()}>
                        Next
                    </Button>
                    
                    </ButtonContainer>
                </StoryArea>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Story;