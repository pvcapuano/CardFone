import React from "react"
import './Header.css'
import { FaHome, FaCartArrowDown } from 'react-icons/fa'

export default function Header(){
    return(
        <>
            <ul>
                <li><FaHome /></li>
                <li><FaCartArrowDown /></li>
            </ul>

        </>
    )
}