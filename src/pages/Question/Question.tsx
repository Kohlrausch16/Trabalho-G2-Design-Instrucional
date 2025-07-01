import { useState } from "react";
import { MainContainer, PhoneContainer } from "../../GeneralStyle";
import { Button, ButtonContainer, QuestionArea, TextContainer, TextSection } from "./QuestionStyle";

const Question = () =>{

    const [index, setIndexValue] = useState(0);
    const storyContent = [
        {
            pageText: '1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dignissimos, numquam a earum sunt ipsa, consequatur voluptatum est voluptas veritatis totam sequi. Nesciunt sunt amet, velit quod nobis ipsam.',
        },
        {
            pageText: '2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dignissimos, numquam a earum sunt ipsa, consequatur voluptatum est voluptas veritatis totam sequi. Nesciunt sunt amet, velit quod nobis ipsam.',
        },
        {
            pageText: '3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dignissimos, numquam a earum sunt ipsa, consequatur voluptatum est voluptas veritatis totam sequi. Nesciunt sunt amet, velit quod nobis ipsam.',
        },
        {
            pageText: '4 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dignissimos, numquam a earum sunt ipsa, consequatur voluptatum est voluptas veritatis totam sequi. Nesciunt sunt amet, velit quod nobis ipsam.',
        }
    ]


    return(
    <>
        <MainContainer>
            <PhoneContainer>
                <QuestionArea>
                    <TextContainer>
                        <TextSection>
                            {storyContent[index].pageText}
                        </TextSection>
                    </TextContainer>
                    {index}
                    <ButtonContainer>
                    <Button active={(index == 0)? false : true} onClick={() => setIndexValue(index - 1)}>
                        Back
                    </Button>
                    <Button active={(index == storyContent.length - 1)? false : true} onClick={() => setIndexValue(index + 1)}>
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