import { ProgressBarContainer, ProgressBarFragment } from "./Components";

const ProgressBar = (progress: progress) =>{

    type ProgressBar = {
        bkgColor: boolean;    
    }

    const progressBarFragmentsStatus: ProgressBar[] = [
        {
            bkgColor: true
        },
        {
            bkgColor: true
        },
        {
            bkgColor: true
        },
        {
            bkgColor: false
        },
        {
            bkgColor: false
        }
    ] 

    return(
    <>
        <ProgressBarContainer> 

            {progressBarFragmentsStatus.map((item: ProgressBar, index: number) => {
                return <ProgressBarFragment indexOf={index} bkgColor={item.bkgColor}/>    
            })}
            
        </ProgressBarContainer>
    </>
    );

}

export default ProgressBar;