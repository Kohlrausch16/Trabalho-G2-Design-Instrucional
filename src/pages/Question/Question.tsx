import { useState } from "react";
import { MainContainer, PhoneContainer } from "../../GeneralStyle"
import HelpIcon from "../../layouts/HelpIcon";
import ProgressBar from "../../layouts/ProgressBar";
import { ContentContainer, OptionsContainer, OptionSelector, PageHeader, QuestionContainer } from "./QuestionStyle";
import { useNavigate } from "react-router";

const Question = () => {

    type Options = {
        questionText: string;
        questionOptions: string[];
        correctIndex: number;
    }

    const options: Options[] = [
        {
            questionText: '1 - Vamos descobrir se a sombra do farol alcançará a praça onde ela está projetada. O Farol de Alexandria está ao norte da praça, a 120 metros de distância, e tem aproximadamente 100 metros de altura. Você precisa garantir que, no solstício de verão, ao meio-dia, quando o sol estiver a uma altitude de 78 graus, a sombra do farol toque o interior da praça. - Qual o comprimento aproximado da sombra do farol ao meio-dia?',
            questionOptions: ['32,45m', '45,67m', '21,10m', '120,00m'],
            correctIndex: 3
        },
        {
            questionText: '2 - Vamos iniciar a construção do projeto. A primeira coisa que você deve fazer é calcular o comprimento de cada lado do octógono. Lembre-se de que a área total é de 2500 metros quadrados.',
            questionOptions: ['14,72m', '16,19m', '18,03m', '20,50m'],
            correctIndex: 2
        },
        {
            questionText: '3 - Antes de os construtores erguerem os muros, você deve calcular o ponto da porta principal alinhada para o nascimento de Sírius, a 45 graus nordeste.Determine a posição da porta principal com base nesse ângulo.',
            questionOptions: ['14,96m', '17,20m', '21,15m', '10,00m'],
            correctIndex: 1
        },
        {
            questionText: '4 - Agora, o próximo passo é construir o templo circular no centro da praça. Lembre-se: ele deve estar dentro de um quadrado, que também deve estar dentro da praça. Descubra o tamanho máximo do templo.',
            questionOptions: ['25,00m', '30,00m', '38,91m', '43,12m'],
            correctIndex: 4
        },
        {
            questionText: '5 - Falta pouco, arquiteto. Você precisa alinhar a porta do templo com o nascer do sol no equinócio de outono. Segundo os registros dos astrônomos, nesse dia o sol nasce exatamente a leste. Sabendo que a praça está alinhada com os pontos cardeais, em que direção a porta do templo deve estar voltada?',
            questionOptions: ['0°', '90°', '135°', '180°'],
            correctIndex: 2
        }
    ];

    const [optionsIndex, setOptionsIndex] = useState(0);
    const [showHelp, setShowHelp] = useState(false);

    let navigate = useNavigate();

    function setNavigate(){
        if(optionsIndex == 4){
            navigate("/congrats");
        }
    }

    function verifyAnswer(index: number){
        if(options[optionsIndex].correctIndex == (index + 1)){
            setOptionsIndex(optionsIndex + 1);
            setNavigate();
        }
    }

    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <QuestionContainer>
                    {/*<HelpSection displayConfig={showHelp} />*/}
                    <PageHeader>
                        <HelpIcon />
                        <ProgressBar progressBar={optionsIndex}/>
                    </PageHeader>

                   <ContentContainer>
                        {options[optionsIndex].questionText}
                   </ContentContainer>

                   <OptionsContainer>
                        {options[optionsIndex].questionOptions.map((item: string, index: number) => {
                            return <OptionSelector onClick={() => verifyAnswer(index)} > {item} </OptionSelector>       
                        })}
                   </OptionsContainer>
                </QuestionContainer>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Question;