import React from "react";
import Navbar from "./Navbar";

function HomeBanner() {
  return (
    <section className="home">
      <div className="bg-home">
        <Navbar />
        <div className="row">
          <div className="col">
            <div className="calz">
              <div className="calz-icon">
                <a href="https://www.instagram.com/positivelypsyched_ke/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100088713470695">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://twitter.com/p_psychedke">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/positively-psyched-92a2b3262/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCpSLXbPFRJVzQM1HFKRKZRA">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://mail.google.com/mail/u/1/?ogbl#inbox">
                  <i class="fa-regular fa-envelope-dot"></i>
                </a>
                <a href="https://www.tiktok.com/@positivelypsyched_ke?lang=en">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
                {/* <a href="tel:+254791061744">
                  <i class="fa-regular fa-phone"></i>
                </a>
                <a href="tel:+254718770971">
                  <i class="fa-regular fa-phone"></i>
                </a> */}
              </div>
            </div>
            <div className="intro">
              <h1>
                PositivelyPsyched. Heal <br></br> Grow Thrive
              </h1>
            </div>
            <div className="intro-p">
              <p>Interact with our qualified professionals</p>
            </div>
            <div className="intro-p2">
              <h3>
                A place where you can heal at your own pace, in a <br></br>{" "}
                friendly and supportive environment.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
