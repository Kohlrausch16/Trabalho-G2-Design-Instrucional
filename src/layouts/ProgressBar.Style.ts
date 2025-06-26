import styled from "styled-components";

interface ProgressBarFragmentProps{
    indexOf: number;
    bkgColor: boolean;
}

export const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 1;
    width: 60%;
    height: 3%;
    gap: 1%;
`;

export const ProgressBarFragment = styled.div<ProgressBarFragmentProps>`
    height: 80%;
    flex: 1;
    border: 1px solid rgb(109, 173, 56);
    background-color: ${props => (props.bkgColor) ? '#7638ad' : 'transparent'};
    border-top-left-radius: ${props => (props.indexOf == 0) ? '15px' : '0px'};
    border-bottom-left-radius: ${props => (props.indexOf == 0) ? '15px' : '0px'};
    border-top-right-radius: ${props => (props.indexOf == 4) ? '15px' : '0px'};
    border-bottom-right-radius: ${props => (props.indexOf == 4) ? '15px': '0px'};
`;