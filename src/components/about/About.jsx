import React from 'react'
import './About.css'
import coffeeBeans from '../../assets/coffee-beans.png';

const About = () => {
  return (
    <div className='container-fluid about'>
        <div className="container">
            <h1>About Us</h1>
            <div className="about-content">
                <img src={coffeeBeans} alt="" width={263}/>
                <div className="about-text">
                    <h2>"Dari Biji Kopi sampai Rasa Autentik"</h2>
                    <p>Setiap cangkir kopi kami berasal dari biji pilihan yang dipetik dengan hati-hati dan diseduh dengan cinta. Kami bangga menghadirkan rasa asli kopi nusantara, sambil mendukung petani lokal dan keberlanjutan.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
