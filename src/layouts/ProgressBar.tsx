import { ProgressBarContainer, ProgressBarFragment } from "./Components";

type ProgressBar = {
    bkgColor: boolean;    
}

type FragmentIndex = {
    progressBar: number;
}

const ProgressBar = ({progressBar}: FragmentIndex) =>{

    const options: boolean[] = [false, false, false, false, false];

    for(let i = 0; i <= progressBar; i++){
        options[i] = true;
    }
    
    return(
    <>
        <ProgressBarContainer> 
            {options.map((item: boolean, index: number) => {
                return <ProgressBarFragment indexOf={index} bkgColor={item} />
            })}            
        </ProgressBarContainer>
    </>
    );

}

export default ProgressBar;