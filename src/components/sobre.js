import React from 'react'
import './sobre.css'
import sobre from './img/sobre1.png'


function Sobre(){

    return(
        <div className='container'>
            <div className='img'> 
                <img src={sobre}/>
            </div>
            <div id='text'>
                <h1>A nossa empresa é focada em <span className='blue'>desenvolvimento</span> digital.</h1>
                <small className='blue' id='small'>Temos varios cases de sucesso que utilizaram nossos serviços !</small>
                <button>SAIBA MAIS!</button>
            </div>
            
        </div>




    )

}

export default Sobre;
