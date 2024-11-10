import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="footer1Main">
        <div className="footer2Box">
          <Image
            src="/assets/icons01.png"
            alt="img"
            height={40}
            width={40}
            className="icons01"
          />
          <p className="icons01P">Free Shipping in</p>
          <p style={{ marginLeft: "30px", color: "white" }}>Europe</p>
        </div>

        <div className="footer1Box">
          <Image
            src="/assets/icons02.png"
            alt="img"
            height={40}
            width={40}
            className="icons01"
          />
          <p className="icons01P" style={{ marginLeft: "20px" }}>
            Money Back
          </p>
          <p style={{ marginLeft: "20px", color: "white" }}>Guarantee</p>
        </div>

        <div className="footer1Box">
          <Image
            src="/assets/icons03.png"
            alt="img"
            height={40}
            width={40}
            className="icons01"
          />
          <p className="icons01P">24/7 Customer</p>
          <p style={{ marginLeft: "30px", color: "white" }}>Support</p>
        </div>

        <div className="footer1Box">
          <Image
            src="/assets/icons04.png"
            alt="img"
            height={40}
            width={40}
            className="icons01"
          />
          <p className="icons01P" style={{ marginLeft: "15px" }}>
            Lowest Prices
          </p>
          <p style={{ marginLeft: "15px", color: "white" }}>Guaranteed</p>
        </div>

        <div className="footer1Box">
          <Image
            src="/assets/icons05.png"
            alt="img"
            height={40}
            width={40}
            className="icons01"
          />
          <p className="icons01P">Exclusive Items for</p>
          <p style={{ marginLeft: "30px", color: "white" }}>Sportshold</p>
        </div>

        <div className="footer1Box">
          <Image
            src="/assets/icons06.png"
            alt="img"
            height={40}
            width={40}
            className="icons01"
          />
          <p className="icons01P">5-Day Delivery in</p>
          <p style={{ marginLeft: "30px", color: "white" }}>Europe</p>
        </div>
      </div>

      <Image
        src="/assets/footer.png"
        alt="img"
        height={220}
        width={900}
        className="footer2"
      />

      <footer className="footer3">
        <Image
          src="/assets/SPORTSHOLD_logo.png"
          alt="img"
          height={20}
          width={140}
          className="footer3Img"
        />
        <p className="footer3P">© 2017 Sportshold. All rights reserved.</p>
        <Image
          src="/assets/icons8-twitter-50.png"
          alt="img"
          height={20}
          width={20}
          className="footer3Icon"
        />
        <Image
          src="/assets/icons8-fb-30.png"
          alt="img"
          height={20}
          width={20}
          className="footer3Icon2"
        />
       <Image
          src="/assets/icons8-pinterest-50.png"
          alt="img"
          height={20}
          width={20}
          className="footer3Icon2"
        />
        <Image
          src="/assets/icons8-youtube-30.png"
          alt="img"
          height={20}
          width={20}
          className="footer3Icon2"
        />
      </footer>
      <p className="code">Clone By Almas</p>
    </footer>
  );
};

export default Footer;
