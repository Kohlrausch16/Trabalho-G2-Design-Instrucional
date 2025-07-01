import styled from "styled-components";

interface ProgressBarFragmentProps{
    indexOf: number;
    bkgColor: boolean;
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
    border: 1px solid hsla(272, 51.10%, 44.90%, 0.73);
    background-color: ${props => (props.bkgColor) ? 'hsla(272, 51.10%, 44.90%, 0.73)' : 'transparent'};
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
    background-color: hsla(272, 51.10%, 44.90%, 0.73);
    color: white;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-weight: normal;
    color: #e8e8e9;

    &:hover{
        cursor: pointer;
        background-color: hsla(272, 51.10%, 44.90%);
    }
`;