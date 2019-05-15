import React from "react";

const Character = props => {
return (
 <div>
    <div>
      <p className='nameList'>{props.character.name}</p>
    </div>
 </div>
);
};

export default Character;
