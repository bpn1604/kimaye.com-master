import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footermain}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          lineHeight: "0px",
        }}
        className={styles.leftuppperfooter}
      >
        <div>
          <h5>FAQ's</h5>
          <h5>Contacts Us</h5>
          <h5>Shipping {"&"} Return Policy</h5>
          <h5>Terms {"&"} Conditions</h5>
          <h5>Privacy Policy</h5>
        </div>

        <div>
          <h5>Follow us on</h5>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
              alt="facebook"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756"
              alt="instagram"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756"
              alt="tweeter"
            />
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "85vw",
          backgroundColor: "gray",
          height: "1px",
          margin: "auto",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p className={styles.footercopyright}>
          Copyright©2022. All Rights Reserved{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040"
            alt="madeby"
            width={"100px"}
          />
        </div>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Made with &hearts; by{" "}
        <a
          href="https://www.linkedin.com/in/bipin-mishra-14a136112/"
          style={{ color: "black", textDecoration: "none" }}
        >
          &nbsp; Bipin Kumar
        </a>
      </p>
    </div>
  );
};

export default Footer;
