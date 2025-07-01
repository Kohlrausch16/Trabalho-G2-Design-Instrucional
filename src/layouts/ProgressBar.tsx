import { ProgressBarContainer, ProgressBarFragment } from "./Components";

type ProgressBar = {
    bkgColor: boolean;    
}

type FragmentIndex = {
    progressBar: number;
}

const ProgressBar = ({progressBar}: FragmentIndex) =>{

    return(
    <>
        <ProgressBarContainer> 

            {progressBar.map((item: ProgressBar, index: number) => {
                return <ProgressBarFragment indexOf={index} bkgColor={item.bkgColor}/>    
            })}
            
        </ProgressBarContainer>
    </>
    );

}

export default ProgressBar;