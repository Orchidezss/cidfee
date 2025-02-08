import React from 'react'
import './Menucard.css'
import coffee from '../../assets/coffee-card.svg'
import { FaCartPlus } from "react-icons/fa";

const Menucard = () => {
  return (
    <div className='menu-card'>
      <h2>COFFEE</h2>
        <img src={coffee} alt="" />
        <p>IDR 10.000</p>
        <button><FaCartPlus/ > ORDER</button>
    </div>
  )
}

export default Menucard
