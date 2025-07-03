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


    // useLocation

    const options: Options[] = [
        {
            questionText: '1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reprehenderit libero sunt ratione nobis tenetur debitis voluptatum ullam sapiente consequuntur nemo minus sint, corrupti, sed, cum in tempora omnis eveniet.',
            questionOptions: ['A', 'B', 'C', 'D'],
            correctIndex: 2
        },
        {
            questionText: '2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reprehenderit libero sunt ratione nobis tenetur debitis voluptatum ullam sapiente consequuntur nemo minus sint, corrupti, sed, cum in tempora omnis eveniet.',
            questionOptions: ['A', 'B', 'C', 'D'],
            correctIndex: 4
        },
        {
            questionText: '3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reprehenderit libero sunt ratione nobis tenetur debitis voluptatum ullam sapiente consequuntur nemo minus sint, corrupti, sed, cum in tempora omnis eveniet.',
            questionOptions: ['A', 'B', 'C', 'D'],
            correctIndex: 1
        },
        {
            questionText: '4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reprehenderit libero sunt ratione nobis tenetur debitis voluptatum ullam sapiente consequuntur nemo minus sint, corrupti, sed, cum in tempora omnis eveniet.',
            questionOptions: ['A', 'B', 'C', 'D'],
            correctIndex: 1
        },
        {
            questionText: '5 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reprehenderit libero sunt ratione nobis tenetur debitis voluptatum ullam sapiente consequuntur nemo minus sint, corrupti, sed, cum in tempora omnis eveniet.',
            questionOptions: ['A', 'B', 'C', 'D'],
            correctIndex: 3,
        }
    ];

    const [optionsIndex, setOptionsIndex] = useState(0);
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
        } else {
            alert('Resposta errada :(; Sequência: B - D - A - A - C');
        }
    }


    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <QuestionContainer>
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