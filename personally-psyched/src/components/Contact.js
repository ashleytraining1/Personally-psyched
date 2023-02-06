import React from "react";

const Contact = () => {
  // const inputs = document.querySelectorAll(".input");
  // function focusFunc() {
  //   let parent = this.parentNode;
  //   parent.classList.add("focus");
  // }

  // function blurFunc() {
  //   let parent = this.parentNode;
  //   if (this.value == "") {
  //     parent.classList.remove("focus");
  //   }
  // }

  // inputs.forEach((input) => {
  //   input.addEventListener("focus", focusFunc);
  //   input.addEventListener("blur", blurFunc);
  // });
  return (
    <div className="contacts">
      <div className="contact-container">
        <span className="big-circle"></span>
        <div className="form">
         
            <div className="contact-info">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form action="index.html">
                <h3 className="contact-title">Contact us</h3>
                <div className="contact-input-container focus">
                  <input type="text" name="name" className="input" />
                  <label for="">Username</label>
                  <span>Username</span>
                </div>

                <div className="contact-input-container focus">
                  <input type="email" name="email" className="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>

                <div className="contact-input-container focus">
                  <input type="tel" name="phone" className="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>

                <div className="contact-input-container-text focus">
                  <input type="text" name="message" className="input" />
                  <label for="">Message</label>
                  <span>Message</span>
                </div>

                {/* <div className="contact-input-container-textarea">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
              </div> */}

                <input type="submit" value="Send" className="contact-btn" />
              </form>
              <div className="form-contact-info">
            <h3 className="title-contact">Lets get in touch</h3>
            <p className="contact-text">
              lorem ipsum dolor sit amet elit.Saepe dolorum adipiscing
              elit.Saepe dolorum adipiscing recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
              <i class="fa-sharp fa-solid fa-envelope"></i>
              <p>psychedpositively@gmail.com</p>
              </div>

              <div className="information">
              <i class="fa-sharp fa-solid fa-phone"></i>
              <p>tel:+254791061744 <br />tel:+254718770971</p>
              </div>
            </div>
            <div className="contact-social-media">
              <p>Connect with us :</p>
              <div className="contact-social-icon">
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
                <a href="https://www.tiktok.com/@positivelypsyched_ke?lang=en">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
