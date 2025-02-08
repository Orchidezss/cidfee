import React, { useState } from "react";
import "./Menu.css";
import Menucard from "../menu-card/Menucard";
import close from "../../assets/x-solid.svg";

const Menu = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {/* Wrapper List */}
      <div className="container-fluid menu">
        <div className="container">
          <h1 id="title">Menu List</h1>
          <div className="menu-wrapper">
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
            <div className="viewmore" onClick={openModal}>
              <h2>View More</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Modal */}
      <div
        className={`${
          isModalOpen ? "container menu-position" : "container modal-close"
        }`}
      >
        <img src={close} alt="" width={20} id="close" onClick={closeModal} />
        <div className="container menu-list">
          <h1 id="title">Menu List</h1>
          <h2 id="menu-section">COFFEE</h2>
          <div className="menu-list-wrapper">
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
            <Menucard />
          </div>
          <h2 id="menu-section">Snacks</h2>
          <div className="menu-list-wrapper">
            <Menucard />
            <Menucard />
            <Menucard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
