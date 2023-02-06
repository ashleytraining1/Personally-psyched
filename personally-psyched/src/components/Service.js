import React from "react";

const Service = () => {
  return (
    <div>
      <section className="services">
        <div className="service-main-text">
          <h2>
            Our <span>Services</span>
          </h2>
        </div>
        <div className="services-content">
          <div className="service-box">
            <div className="s-icons">
              <i class="fa-regular fa-head-side-medical"></i>
            </div>
            <h3>Psychiatric Evaluations</h3>
            <p>
              {" "}
              We evaluate a person's mental health. The goal of the evaluation
              is to identify any mental health conditions and determine the best
              course of treatment.Regular follow-up appointments with the
              psychiatrists are typically recommended to monitor the person's
              progress.
            </p>
            <a href="./About" className="read">
              Read More
            </a>
          </div>

          <div className="service-box">
            <div className="s-icons">
              <i class="fa-regular fa-hand-holding-medical"></i>
            </div>
            <h3>Support Groups</h3>
            <p>
              Regularly scheduled meetings where individuals come together to
              share their experiences and support each other. These groups are
              typically facilitated by a mental health professional or trained
              peer, and they focus on a specific topic or concern related to
              mental health.
            </p>
            <a href="./About" className="read">
              Read More
            </a>
          </div>

          <div className="service-box">
            <div className="s-icons">
              <i class="fa-regular fa-person-chalkboard"></i>
            </div>
            <h3>Psychoeducation</h3>
            <p>
              Educating individuals about mental health, mental illness, and
              related topics. The goal of psychoeducation is to increase
              awareness, understanding, and knowledge about mental health, and
              to empower individuals to take an active role in their own mental
              well-being.
            </p>
            <a href="./About" className="read">
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
