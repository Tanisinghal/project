import React from "react";

function Chap() {
  return (
    <div
      id="chap"
      style={{
        position: "absolute",
        width: "1320px",
        height: "200px",
        left: "0px",
        top: "2080px",
      }}
    >
      <img
        style={{
          position: "static",
          width: "180px",
          height: "170.25px",
          margin: "50px",
        }}
        src="https://www.inhomecarenj.com/wp-content/uploads/2016/03/CHAP.png"
        alt="signature"
      ></img>
      <div id="text" style={{ width: "859px", height: "112px" }}>
        <h1
          style={{
            fontStyle: "Montserrat",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "37px",
          }}
        >
          CHAP Accreditation and this line can be about this big
        </h1>
        <p
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "29px",
            letterSpacing: "-0.007em",
            margin: "0px 53px",
          }}
        >
          UniversaCare, LLC will provide the following home health care programs
          at flexible schedules and cost-friendly services rates.
        </p>
      </div>
    </div>
  );
}
export default Chap;
