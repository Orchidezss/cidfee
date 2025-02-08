import React from "react";
import "./Hero.css";
import logo from "../../assets/logo-image.svg";
import coffeeRight from '../../assets/coffee-right.svg'
import coffeeLeft from '../../assets/coffee-left.svg'
import leaveLeft from '../../assets/leave-left.svg'
import leaveRight from '../../assets/leave-right.svg'

// GSAP
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Hero = () => {
    useGSAP(
      () => {
        gsap.from('#anim1', {opacity: 0, duration: 0.7, scale: 1.2, ease: 'sine.in'})
        gsap.from('.coffee-left', {left: -210, top: -100, rotation: -90, duration: 1.5, ease: 'power4.out', delay: 0.5})
        gsap.from('.coffee-right', {right: -400, bottom: -100, rotation: 90, duration: 1.5, ease: 'power4.out', delay: 0.5})
        gsap.from('.leave-left', {left: -300, bottom: -100, rotation: -90, duration: 1.5, delay: 1.3, ease: 'power4.out'})
        gsap.from('.leave-right', {right: -180, top: -130, rotation: -90, duration: 1.5, delay: 1.3, ease: 'power4.out'})
      }
    )


  return(
    <>
      <div className="container-fluid hero">
        <img src={coffeeRight} alt="" className="coffee-right"/>
        <img src={coffeeLeft} alt="" className="coffee-left"/>
        <img src={leaveLeft} alt="" className="leave-left"/>
        <img src={leaveRight} alt="" className="leave-right"/>


        <div className="container">
          <div className="hero-content">
            <img src={logo} alt="CIDFEE" title="Cidfee" id="anim1"/>
            <h2 id="anim1">CID<span>FEE</span></h2>
            <h1 id="anim1">"Kopi hanya Berbicara dengan <br />Rasa, Bukan Kata."</h1>
            <button id="anim1">Pesan Sekarang</button>
            <button id="anim1">Lihat Menu</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
