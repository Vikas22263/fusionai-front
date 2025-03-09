import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingEffect = () => {
  return (
    <h1 className="text-sm font-extralight text-purple-400">
    <Typewriter
      options={{
        strings: ['searching. . . .','Analyzing. . . .','typing. . . .'],
        autoStart: true,
        loop: true,
        delay: 'natural', 
        pauseFor: 1500, 

      }}
    />
  </h1>
 
  );
};

export default TypingEffect;
