import { useState } from "react";
import { CloseHelpButton, HelpContainer } from "./Components";

type HelpDisplay = {
  displayConfig: boolean;
}

const HelpSection = ({displayConfig}: HelpDisplay) =>{

  const [showHelp, setShowHelp] = useState(displayConfig); 
  return(
  <>
    <CloseHelpButton onClick={() => setShowHelp(false)}> a </CloseHelpButton>
    <HelpContainer displayConfig={showHelp}>Hello World!</HelpContainer>
  </>
  );

}

export default HelpSection;