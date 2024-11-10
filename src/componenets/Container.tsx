import Image from "next/image";
import React from "react";

const Container = () => {
  return (
    <div className="container">
      <div className="container-div1">
        <div className="con-div-img">
          <div className="div-main">
            <div className="div1">
              <Image
                src="/assets/Shape3.png"
                alt="img"
                height={70}
                width={70}
                className="div1-img"
              />
            </div>
            <div className="div2">
              <p className="div2-p">Discover the new</p>
              <p className="div2-p2">NIKE KYRIE 3</p>
            </div>
          </div>
          <button className="btn-con-div1">VIEW COLLECTION</button>
        </div>
      </div>

      <div className="container-div2">
        <div className="con-div2-main">
          <div className="con-div2-img">
            <Image
              src="/assets/0021.png"
              alt="img"
              height={228}
              width={180}
              className="con-div2-img-1"
            />
          </div>
          <div className="con-div2-p">
            <p className="con-div2-p1">Check out the</p>
            <p className="con-div2-p2">NEW ARRIVALS</p>
            <button className="con-div2-btn">DISCOVER</button>
          </div>
        </div>
        <div className="con-div2-lower">
          <div className="con-div2-lower1">
            <p
              style={{
                color: "white",
                fontSize: "30px",
                textAlign: "center",
                marginTop: "130px",
              }}
            >
              Best for
            </p>
            <p
              style={{
                color: "rgb(255, 114, 112)",
                fontSize: "25px",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              ATHLETES
            </p>
          </div>
          <div className="con-div2-lower2">
            <p
              style={{
                color: "rgb(124, 124, 124)",
                fontSize: "30px",
                textAlign: "center",
                marginTop: "25px",
              }}
            >
              Feel
            </p>
            <p
              style={{
                color: "white",
                fontSize: "25px",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              PREMIUM
            </p>
            <Image
              src="/assets/005.png"
              alt="img"
              height={97}
              width={190}
              className="con-div2-lower2-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
