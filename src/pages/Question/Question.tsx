import { MainContainer, PhoneContainer } from "../../GeneralStyle"
import HelpIcon from "../../layouts/HelpIcon";
import ProgressBar from "../../layouts/ProgressBar";
import { ContentContainer, OptionsContainer, OptionSelector, PageHeader, QuestionContainer } from "./QuestionStyle";

const Question = () => {

    type Options = {
        questionText: string;
        questionOptions: string[];
        correctIndex: number;
    }

    const progressCombination = [false, false, false, false, false];
    
    const options: Options[] = [
        {
            questionText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reprehenderit libero sunt ratione nobis tenetur debitis voluptatum ullam sapiente consequuntur nemo minus sint, corrupti, sed, cum in tempora omnis eveniet.',
            questionOptions: ['A', 'B', 'C', 'D'],
            correctIndex: 2
        }
    ]


    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <QuestionContainer>
                    <PageHeader>
                        <HelpIcon />
                        <ProgressBar progressBar={progressCombination}/>
                    </PageHeader>

                   <ContentContainer>
                        {options[0].questionText}
                   </ContentContainer>

                   <OptionsContainer>
                        
                        {options[0].questionOptions.map((item: string) => {
                            return <OptionSelector> {item} </OptionSelector>       
                        })}
                        
                   </OptionsContainer>
                </QuestionContainer>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Question;