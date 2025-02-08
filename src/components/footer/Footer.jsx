import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="copyright">
          <p>
            &copy; 2025 <b>Adhwa Aulia Prabasa</b>. All Rights Reserved.
          </p>
          <p>
            <span>
              Please do not alter or modify this website without proper
              authorization.
            </span>
          </p>
        </div>
        <div className="credits">
          <h5>Illustration Source and Others</h5>
          <a href="https://www.freepik.com/free-psd/delicious-dark-coffee-rustic-brown-mug-transparent-background_406611502.htm#fromView=search&page=1&position=25&uuid=f2a78fb7-f884-425f-8a61-500f8a76fad6&new_detail=true">
            Coffee Menu - By muhammad.abdullah on Freepik
          </a>
          <a href="https://www.freepik.com/free-vector/flat-background-world-coffee-day-celebration_63704366.htm#fromView=search&page=1&position=1&uuid=6bc142fa-9111-4e78-9125-fd7e4284a8d8&new_detail=true">
            Hero Background - By Freepik
          </a>
          <a href="https://unsplash.com/photos/a-pile-of-coffee-beans-and-coffee-beans-4KqHNQ3sJ6g">
            Coffee Beans - By Fatih Mehmet YILDIZ On Unsplash
          </a>
          <a href="https://unsplash.com/photos/man-sitting-on-bar-chair-in-front-man-at-cafe-9Y8vxVQN4o4">
            Cafe background - by Jazmin Quaynor on Unsplash
          </a>
          <a href="https://react-icons.github.io/react-icons/">React ICONS</a>
          <a href="https://getbootstrap.com/">Bootstrap</a>
          <a href="https://gsap.com">GSAP for animation</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
