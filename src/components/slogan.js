import React from 'react'
import './slogan.css';
import monitoramento from './img/slogan.jpg';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from './img/logo.png'



function Slogan(){

    return(
        <div>
        <div className="menu">
            <div className='rgba'>
                <div className='list'>
                    <img src={ logo } id='logo'/>
                    <ul>    
                        <li><a href='#'>HOME</a></li>
                        <li><a href='#'>MONITORAMENTO</a></li>
                        <li><a href='#'>SOBRE</a></li>
                    </ul>
                </div>    
            </div>
            <div>
                <div className='banner'>
                    <h1>Ajudamos você a monitorar a sua <span className='blue'>página</span> na WEB.</h1>
                    <small className='grey'>Os nossos consultores irão te indicar os melhores planos.</small>
                </div>
                <img id='img' src={monitoramento} alt=' monitoramento' ></img>
            </div>
            
        </div></div>
    )
}

export default Slogan