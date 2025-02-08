import React from "react";
import "./Contact.css";

// Icons
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container-fluid contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-left">
            <h1>Contact Us!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <ul>
              <li>
                <MdEmail /> youremail@gmail.com
              </li>
              <li>
                <FaPhoneAlt /> 08XX-XXXX-XXXX
              </li>
              <li>
                <AiFillInstagram /> @YourIG
              </li>
            </ul>
            <h2>PEMBELIAN BIJI KOPI</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              earum exercitationem soluta impedit recusandae nam. Ex?
            </p>
          </div>
          <div className="contact-form">
            <h2>Ingin bertemu?</h2>
            <p>Kami memprioritaskan kepuasan pelanggan</p>
            <div className="form">
                <p>Nama Lengkap</p>
              <input type="text" placeholder="Elon Musk" />
            </div>
            <div className="form">
                <p>No Telepon</p>
              <input type="number" placeholder="08XX-XXXX-XXXX" />
            </div>
            <div className="form">
                <p>Nama Lengkap</p>
              <input type="email" placeholder="youremail@gmail.com" />
            </div>
            <div className="form">
                <p>Alamat Domisili</p>
              <input type="text" placeholder="Tulis alamat lengkap anda" />
            </div>
            <button>KIRIM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
