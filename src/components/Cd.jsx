import React, { useState } from 'react';
import CD from '/disk.png'

const Disk = (props) => {
    
  return (
    <div className="w-[650px] h-[650px] xl:w-[1200px] xl:h-[1200px] flex items-center -mb-[325px] xl:-mb-[600px] justify-center">
      <img
        src={props.cd}
        alt={"disk"}
        className="w-full h-full object-cover animate-spin-slow"
      />
    </div>
  );
};

export default Disk;
