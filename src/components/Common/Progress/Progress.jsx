import { useEffect, useState } from 'react';

const Progres = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollValue(scrollPercent);
    };

    window.addEventListener('scroll', handleProgress);

    return () => {
      window.removeEventListener('scroll', handleProgress);
    };
  }, []);

  const progressStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '2px',
    width: '100%',
  };
  const progressBarStyle = {
    width: `${scrollValue}%`,
    height: '100%',
    background: 'var(--primary-color',
  };
  return (
    <div className='progress-component' style={progressStyle}>
      <div className='progress-bar' style={progressBarStyle}></div>
    </div>
  );
};
export default Progres;
