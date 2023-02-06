import React from "react";

function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-md-4">
                <h5 className="footer-heading">
                  Positively<span>Psyched</span>
                </h5>
                <p className="footer-text">
                  Enroll and heal at your own pace. We <br></br> are fun
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="footer-heading">Links</h5>
                <p className="footer-text">
                  <a className="footer-nav" href="/">
                    Home
                  </a>
                  <a className="footer-nav" href="/services">
                    Services
                  </a>
                  <a className="footer-nav" href="/about">
                    About Us
                  </a>
                  <a className="footer-nav" href="/events">
                    Events
                  </a>
                  <a className="footer-nav" href="/volunteers">
                    Volunteers
                  </a>
                  <a className="footer-nav" href="/faqs">
                    FAQs
                  </a>
                  <a className="footer-nav" href="/contact">
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="footer-heading">Social</h5>
                <p className="footer-text">
                  <p>
                    <a href="https://www.instagram.com/positivelypsyched_ke/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>{" "}
                    Instagram
                  </p>
                  <p>
                    <a href="https://www.facebook.com/profile.php?id=100088713470695">
                      <i className="fa-brands fa-facebook"></i>
                    </a>{" "}
                    Facebook
                  </p>
                  <p>
                    <a href="https://twitter.com/p_psychedke">
                      <i className="fa-brands fa-twitter"></i>
                    </a>{" "}
                    Twitter
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/positively-psyched-92a2b3262/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>{" "}
                    LinkedIn
                  </p>
                  <p>
                    {" "}
                    <a href="https://www.youtube.com/channel/UCpSLXbPFRJVzQM1HFKRKZRA">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    Youtube
                  </p>
                  <p>
                    <a href="https://www.tiktok.com/@positivelypsyched_ke?lang=en">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>{" "}
                    Tiktok
                  </p>
                </p>
              </div>
            </div>
            <div className="container-fluid">
              <hr></hr>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <p className="footer-text">Terms and Conditions</p>
                  </div>
                  <div className="col-md-4">
                    <p className="footer-text">Privacy Policy</p>
                  </div>
                  <div className="col-md-4">
                    <p className="footer-text">
                      Copyright ©2023 PositivelyPsyched{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
