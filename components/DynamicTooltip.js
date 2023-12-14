import { useState, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

function DynamicTooltip() {
  const [tooltipContent, setToolTipContent] = useState("");
  
  useEffect(()=>{
    setToolTipContent("this is a tooltip");
  },[])
  return (
    <TooltipPortal>
      <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
        {tooltipContent}
      </div>
    </TooltipPortal>
  );
}

export default DynamicTooltip;
