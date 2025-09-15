'use client';

import { useState, useEffect } from 'react';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
};

export default function TypewriterEffect({ text, speed = 100 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <>
      {displayedText}
      {!isTypingComplete && <span className="blinking-cursor">|</span>}
    </>
  );
}
