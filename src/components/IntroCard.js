import React, { useState } from 'react';
import Badge from './Badge';
import Icon from './Icon';

const IntroCard = () => {

  const userName = "Adriano Maringolo";
  const baseWord = "Hello";

  const [displayWord, setDisplayWord] = useState(baseWord);

  return (
    <div className="card">
      <Badge word={displayWord} />
      <h1>I'm {userName}</h1>

      <p className="top-border">Front-end developer and instructor</p>
      <p>Find me on:</p>

      <p>
        <Icon name="github"
          link="http://github.com/adrianomaringolo"
          onMouseOverEvent={(param) => setDisplayWord(param)}
          onMouseLeaveEvent={() => { setDisplayWord(baseWord) }} />

        <Icon name="codePen"
          link="http://codepen.io/adrianomaringolo/"
          onMouseOverEvent={(param) => setDisplayWord(param)}
          onMouseLeaveEvent={() => { setDisplayWord(baseWord) }} />

        <Icon name="linkedIn"
          link="https://www.linkedin.com/in/adrianomaringolo/"
          onMouseOverEvent={(param) => setDisplayWord(param)}
          onMouseLeaveEvent={() => { setDisplayWord(baseWord) }} />
      </p>
    </div>
  )

};

export default IntroCard;