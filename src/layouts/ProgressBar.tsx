import { ProgressBarContainer, ProgressBarFragment } from "./ProgressBar.Style";

const ProgressBar = () =>{

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