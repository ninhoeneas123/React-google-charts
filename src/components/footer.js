import React from 'react'
import './footer.css'


function Footer(){

    return(
        <div className='footer'> 
            <div className='text'>
                <p> 
                    Developed by J.Enéas ❮❯. 
                </p>
            </div>
           <div className='list-footer'>
                <ul>
                    <li><a id='blue'>Institucional</a></li>
                    <li><a href='#'>Politicas</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
           </div>
           <div className='list-footer'>
            <ul>
                <li><a id='blue'>Ajuda</a></li>
                <li><a href='#'>Duvidas frequentes</a></li>
                <li><a href='#'>Guia de segurança </a></li>
            </ul>
           </div>
           <div className='list-footer'>
            <ul>
                <li><a id='blue'>Ajuda</a></li>
                <li><button>TIRE SUAS DUVIDAS</button></li>
                
            </ul>
           </div>
        </div>
        )
}



export default Footer