import React, { useEffect, useState } from 'react';
import fotter from './img/fotter.png';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const style = windowWidth < 600
    ? { width: '100%', height: '20%' }
    : { width: '90%', height: '10%' };

  return (
    <footer>
        <img
          src={fotter}
          alt="Footer"
          style={style}
        />
    </footer>
  );
}

export default Footer;
