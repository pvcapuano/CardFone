import './index.css'
import Header from './components/Header'
import Body from './components/Body'

import React from 'react'
import ReactDOM  from 'react-dom'

ReactDOM.render(
    <> 
    <Header/>
    <div className='corpo'>
    <Body />
    </div>
    
    </>,
    document.getElementById('root')
)