import styled from "styled-components";

interface ProgressBarFragmentProps{
    indexOf: number;
    bkgColor: boolean;
}

type HelpSectionDisplay = {
    displayConfig: boolean;
}

export const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 50%;
    gap: 1%;
`;

export const ProgressBarFragment = styled.div<ProgressBarFragmentProps>`
    height: 80%;
    flex: 1;
    border: 1px solid rgba(36, 71, 84, 0.75);
    background-color: ${props => (props.bkgColor) ? 'rgba(36, 71, 84, 0.75)' : 'transparent'};
    border-top-left-radius: ${props => (props.indexOf == 0) ? '15px' : '0px'};
    border-bottom-left-radius: ${props => (props.indexOf == 0) ? '15px' : '0px'};
    border-top-right-radius: ${props => (props.indexOf == 4) ? '15px' : '0px'};
    border-bottom-right-radius: ${props => (props.indexOf == 4) ? '15px': '0px'};
`;

export const HelpIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: rgba(36, 71, 84, 0.75);
    color: white;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-weight: normal;
    color: #e8e8e9;

    &:hover{
        cursor: pointer;
        background-color: rgba(36, 71, 84, 0.96);
    }
`;

export const HelpContainer = styled.div<HelpSectionDisplay>`
    display: ${props => (props.displayConfig == true) ? 'flex': 'hidden'};
    position: absolute;
    z-index: 10;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 95%;
    background-color: rgba(36, 71, 84, 0.75);
    border-radius: 12px;
    font-family: 'Montserrat';
    font-weight: normal;
    color: #e8e8e9;
    font-size: 3dvh;
`;

export const CloseHelpButton = styled.button`
    position: inherit;
    z-index: 11;
    display: flex;
`;