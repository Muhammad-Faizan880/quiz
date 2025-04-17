import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#2FBAAC", width:"100%", height:"80px" }}
      >
        <div className="container d-flex justify-content-center">
          <a className="navbar-brand mx-auto" href="#">
            <img
              src="/assets/images/logo1.png"
              alt="Logo"
              className="d-inline-block align-text-top class-logo-padding"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
