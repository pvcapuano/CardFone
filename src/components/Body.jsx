import React from 'react'
import './Body.css'
import JblPreta from '../img/jbl_black.jpg'
// import JblVermelha from '../img/jbl_red.jpg'
// import JblAzul from '../img/jbl_blue.jpg'

export default function Body(){
    return(
        
        <div className='Card'>
                <div className='imagem'>
                    <img src={JblPreta} alt=''></img>
                </div>

                <div className='conteudo'>
                    <h1>JBL Live 400BT</h1>
                    <h2>Fones de ouvido on-ear sem fio</h2>
                    <p>R$499,99</p>
                    <h4>Até 6x de 83,17</h4>
                </div>

                <button>Comprar</button>
            
        </div>
        
    )
}