import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="box">
        <div className="profile">
          <Image
            src="/assets/user.png"
            alt="img"
            height={70}
            width={70}
            className="profile1"
          />
          <p className="profileP">Advocate</p>
        </div>
        <div className="profile">
          <Image
            src="/assets/user.png"
            alt="img"
            height={70}
            width={70}
            className="profile1"
          />
          <p className="profileP">Almas</p>
        </div>
        <div className="profile">
          <Image
            src="/assets/user.png"
            alt="img"
            height={70}
            width={70}
            className="profile1"
          />
          <br />
          <p className="profileP">Bibi</p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
