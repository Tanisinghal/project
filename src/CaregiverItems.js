import React from "react";

function CaregiverItems(props) {
  return (
    <div className="carevigerItems">
      {/* eslint-disable-next-line */}
      <img
        style={{
          width: "62px",
          height: "62px",
          backgroundColor: "#f5f6fa",
          borderRadius: "50px",
          filter: "drop-shadow(0px 4px 4px #E5E5E5)",
        }}
        src={props.imgUrl}
      />
      <h3
        style={{
          fontWeight: "bolder",
          fontSize: "18px",
          lineHeight: " 22px",
          margin: "20px 10px",
        }}
      >
        {props.h3}
      </h3>
      <p
        style={{
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: "17px",
          margin: "20px 0px",
        }}
      >
        {props.p}
      </p>
    </div>
  );
}

export default CaregiverItems;
