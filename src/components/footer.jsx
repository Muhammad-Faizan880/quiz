import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className=""
        style={{ backgroundColor: "white", padding: "15px", width:"100%", position:"fixed", bottom:"0" }}
      >
        <div className="padding-footer">
          <div className="footer-flex-class">
            <div className="footer-start-flex">
              <img
                src="/assets/images/footer-img3.png"
                alt=""
                style={{ width: "32px", height: "32px" }}
              />
              <img src="/assets/images/footer-img2.png" alt="" />
              <img src="/assets/images/footer-img.png" alt="" />
            </div>

            <div className="footer-second-flex block-none-class">
              <div className="footer-second-flex">
                <img src="/public/assets/images/trust1.png" alt="" />
                <img src="/public/assets/images/trust-star.png" alt="" />
              </div>
              <p className="mb-0 footer-text">
                4.8 <span className="footer-span-1">out of 5 based on</span>{" "}
                <span>50,000+ happy customers</span>
              </p>
            </div>

            <div className="hide-none-class">
              <p className="excellent">Excellent 4.8</p>
              <img src="/assets/images/trust-star.png" alt="" />
              <p className="footer-mob">
                50,000+ <span className="color-change">happy customers</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
