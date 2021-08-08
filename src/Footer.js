import React from "react";

function Footer() {
  return (
    <div
      class="footer-container"
      style={{
        position: "static",
        width: "1380px",
        height: "487px",
        left: "0px",
        top: "3360.29px",

        background: "#FFFFFF",
      }}
    >
      <div>
        <h2>HEADQUATERS</h2>
        <h3>246-50 57th Drive</h3>
        <h3>Douglaston,NY 11362</h3>
        <h3>hello@universecare.com</h3>
        <h3>P:(718) 224-3758</h3>
        <h3>F: 8777999065</h3>
        <img
          style={{ position: "static", width: "193px", height: "38.44px" }}
          scr="https://s3-alpha-sig.figma.com/img/f930/3702/7e3a8c9446d5cc557cc0ec5a247b02e5?Expires=1625443200&Signature=RomcLKVLgm84jlhDgRBnE8wnmhY7mnbluujCoNll2p-fXXPomDakSOAKYR7DxuHWrlfWzG6~utdlLmZgL5PUjEVQhbvDDXSWdKpD9twY4zj-R~Or777veChhKCHHaWbxVpHXbTGW7sVP8GC23FUWK4wVv4lf7j9eH2FYsI4s8688Kw7nk0IApP2Cr6BnF2ti3QxIFhqjb8ogg66fl-edncPvnrK~oAwld-g8VaPnpMq65sOYKn1ZQY2cVVm1zsGFe3xtYsDgXuUZS~1LZDnKgNbgFwbS6SgQp-n1U1VwBvkHgZ4elXt0wm-yOP-Lpx~7xKfHtDw~w3xI0uFe0MugQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="logo"
        ></img>
      </div>
      <div>
        <h3>Services</h3>
        <ul class="list">
          <li>Hourly Care</li>
          <li>Daily Care</li>
          <li>Hospital to Home</li>
          <li>Respite Care</li>
          <li>Specification Care</li>
        </ul>
        <h3>Company</h3>
        <ul class="list">
          <li>About Us</li>
          <li>Locations</li>
          <li>Caregivers</li>
          <li>News & Blogs</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <div>
          <h3>Sign up to receive the latest articles</h3>
          <input type="text" placeholder="Your email address"></input>
          <btn>Submit</btn>
        </div>
        <img
          style={{ position: "static", width: "87px", height: "87px" }}
          scr="https://homehealthcareconsultants.com/wp-content/uploads/2019/11/chap-seal-of-accredidation-logo.png"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default Footer;
