import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" py-3" style={{ backgroundColor: "#333333" }}>
        <p className="text-weight-property">
          All trademarks are the property of their respective owners.
        </p>
        <div className="container d-flex justify-content-center">
          <a href="#" className="mx-auto">
            <img
              src="/assets/images/footer-logo.png"
              alt="Logo"
              className="d-inline-block align-text-top class-bottom-paddding"
            />
          </a>
        </div>
        <img src="/assets/images/link.png" alt="" className="img-center" />
        <p className="class-256">256-BIT TLS SECURITY</p>
      </footer>
    </>
  );
};

export default Footer;
