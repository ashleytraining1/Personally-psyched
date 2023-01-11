import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Navbar from "./Navbar";

function HomeBanner () {
    return (
        <section className="home">
            <div className="bg-home">
                <Navbar/>
            <div className="row">
                <div className="col">
                <div className="calz">
              <div className="calz-icon">
                <a href="https://www.instagram.com/ashleyoketo209">
                  <InstagramIcon />
                </a>
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <EmailIcon />
                <a href="tel:+254711938518">
                  <PhoneIcon />
                </a>
              </div>
            </div>
                    <div className="intro">
                        <h1>PositivelyPsyched. Heal <br></br> Grow Thrive</h1>
                    </div>
                    <div className="intro-p">
                        <p>Interact with our qualified professionals</p>
                    </div>
                    <div className="intro-p2">
                       <h3>A place where you can heal at your own pace, in a <br></br> friendly and supportive environment.</h3>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default HomeBanner;