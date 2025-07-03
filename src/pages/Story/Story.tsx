import { useState } from "react";
import { MainContainer, PhoneContainer } from "../../GeneralStyle";
import { Button, ButtonContainer, StoryArea, TextContainer, TextSection } from "./StoryStyle";
import { useNavigate } from "react-router";

const Story = () =>{

    const [index, setIndexValue] = useState(0);
    const navigate = useNavigate();

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
    ];

    function nextPage(){
        setIndexValue(index + 1);
        if(index == 3){
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