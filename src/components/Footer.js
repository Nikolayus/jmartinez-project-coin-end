import React from 'react';
import '../css/Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <small className='copyright'>&copy; {year} Desarrollado por 
        <a className='enlace' href='#' target='_blank'>  Martinez & Gonzales</a>
      </small>
    </div>
  );
}

export default Footer;