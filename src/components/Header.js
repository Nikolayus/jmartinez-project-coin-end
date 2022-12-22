import React, { Component } from 'react';
import LogoImg from '../images/bitcoin-green.png';
import '../css/Header.scss'

class Header extends Component {
  render() {
    return (
      <header className="headers">             
          <img className='logo-mg' src={LogoImg}/>
          <h3 className='titulo-ini'>Bienvenidos al Buscador de Cryptos</h3>
       
      </header>
    );
  }
}

export default Header;