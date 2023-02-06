import React from "react";
// import Navbar from "./Navbar";

const FAQs = () => {
  const questions = document.querySelectorAll('.question-answer');

  questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
      question.classList.toggle("show-text, btn.click > 100");
    })
  })
  return (
    <div>
      <section className="faqs">
        <div className="bg-faqs">
           {/* <Navbar />  */}
          <div className="faqs-container">
            <h2 className="faqs-title">Frequently Asked Questions</h2>

            <main className="faqs-accordion">
              
              <div className="faqs-content-accordion">
                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                      What causes mental health conditions?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>

                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                      How can I manage my symptoms?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>

                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                    Is therapy the only option for treatment?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>

                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                    How do I know if I have a mental health condition?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>

                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                    What are the side effects of medication for mental health conditions?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>

                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                    How can I support a loved one who is struggling with mental health issues?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>

                <div className="question-answer">
                  <div className="faqs-question">
                    <h3 className="title-question">
                    How can I maintain good mental health and prevent the development of mental health conditions?
                    </h3>
                    <button className="question-btn">
                      <span className="arrow-up-icon">
                        <i class="fa-solid fa-chevron-up"></i>
                      </span>
                      <span className="arrow-down-icon">
                        <i class="fa-solid fa-chevron-down"></i>
                      </span>
                    </button>
                  </div>
                  <div className="faqs-answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada, massa et aliquet blandit, ipsum quam
                      consectetur dui, a facilisis eros massa et ante. Integer
                      fringilla, risus et varius rhoncus, lectus urna fermentum
                      nulla, a blandit ante nibh sit amet tellus. Nullam id
                      commodo enim. Curabitur eget mollis nulla.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
