import { MainContainer, PhoneContainer } from "../../GeneralStyle";
import { Button, ButtonContainer, QuestionArea, TextContainer, TextSection } from "./QuestionStyle";

const Question = () =>{

    const storyContent = [
        {
            pageText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dignissimos, numquam a earum sunt ipsa, consequatur voluptatum est voluptas veritatis totam sequi. Nesciunt sunt amet, velit quod nobis ipsam.',
            active: false
        }
    ]


    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <QuestionArea>
                    <TextContainer>
                        <TextSection>
                            d
                        </TextSection>
                    </TextContainer>
                    
                    <ButtonContainer>
                    <Button active={false}>
                        Back
                    </Button>
                    <Button active={true}>
                        Next
                    </Button>
                    </ButtonContainer>
                </QuestionArea>
            </PhoneContainer>
        </MainContainer>
    </>
    );
}

export default Question;