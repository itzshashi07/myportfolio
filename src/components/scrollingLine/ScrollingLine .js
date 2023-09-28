import React, { useEffect, useState } from 'react';
import './ScrollingLine.css'; // Make sure this points to the correct CSS file

const ScrollingLine = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.mySkill-imagesContainers');

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const scrollPercentage = (containerRect.top + containerRect.height / 2) / window.innerHeight;
      setScrollHeight(scrollPercentage * 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-line" style={{ height: `${scrollHeight}vh` }} />;
};

export default ScrollingLine;
