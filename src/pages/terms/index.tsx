import React, { useState } from "react";
import "./terms.css";
import GroupIntensiveImages from "./group-intensive-images.json";

export default function Terms() {
  const [emdrModalOpen, setEmdrModalOpen] = useState(false);
  const [groupModalOpen, setGroupModalOpen] = useState(false);

  var slideIndex = 1;

  function showSlides(n: number) {
    var i;
    var slides = document.getElementsByClassName(
      "mySlides"
    ) as HTMLCollectionOf<HTMLElement>;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3500); // Change image every 3.5 seconds
  }

  function CarouselImages() {
    let content: JSX.Element[] = [];

    GroupIntensiveImages.forEach((image, index) => {
      content.push(
        <div key={index} className="mySlides fade">
          {/* <div className="numbertext">{index} / {Cookies.length}</div> */}
          <img src={image.url} className="gii-slide-img" />
          {/* <div className="text">{image.caption}</div> */}
        </div>
      );
    });

    return <div>{content}</div>;
  }

  return (
    <div>
      <h1>Terms</h1>
      <section className="private-rates">
        <h2>Private Rates</h2>
        <p>
          At Release Restore Redefine Counseling, we provide private rates to
          all our clients based on their needs. We offer an initial Goodness of
          Fit consultation which is 15 minutes and free to all clients.
        </p>
        <p>
          For more information about Retreats, Intensives, Clinical Supervision,
          Training, Group Therapy, or Individual Therapy feel free to send a
          message <a href="mailto:R3counseling@counselingsecure.com">here</a>.
          Our typical response time is within 24-48 business hours.
        </p>
      </section>
      <section className="individual-psychotherapthy">
        <h4>Individual Psychotherapy</h4>
        <div className="psychotherapy-container">
          <div className="psychotherapy-container-columns">
            <ul>
              <li>$175/$125 for a 60 minute Individual Session</li>
              <li>
                <a onClick={() => setEmdrModalOpen(true)}>
                  Self Pay Package Rate: Individual/EMDR Intensive
                </a>
              </li>
              <ul>
                <li>
                  <a
                    href={
                      "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/2024+EMDR+Intensive+Packages.png"
                    }
                    target={"_blank"}
                  >
                    Download PDF
                  </a>
                </li>
              </ul>
              <li>
                <a
                  onClick={() => {
                    setGroupModalOpen(true);
                    showSlides(slideIndex);
                  }}
                >
                  EMDR Group Intensive Offerings/Package Rate
                </a>
              </li>
              <ul>
                <li>
                  <a
                    href={
                      "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Group+Intensive+Offering+.pdf"
                    }
                    target={"_blank"}
                  >
                    Download PDF
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
      <section className="sliding-scale">
        <h4>Sliding Scale</h4>
        <ul>
          <li>$40 for a 50 minute Individual Session</li>
          <ul>
            <li>
              Intern-Graduate Student in an internship program, under the direct
              clinical supervision of a fully licensed therapist
            </li>
          </ul>
        </ul>
      </section>
      <section className="payments">
        <h4>Accepts Payments</h4>
        <p>All major credit cards are accepted for payment.</p>
        <h4>Superbill</h4>
        <p>
          A Superbill can be requested and generated, if you would like to
          submit information to your insurance company.
        </p>
        <h4>Good Faith Estimate</h4>
        <p>
          Under Section 2799B-6 of the Public Health Service Act, health care
          providers and health care facilities are required to inform
          individuals who are not enrolled in a plan or coverage or a Federal
          health care program, or not seeking to file a claim with their plan or
          coverage both orally and in writing of their ability, upon request or
          at the time of scheduling health care items and services, to receive a
          “Good Faith Estimate” of expected charges.
        </p>
        <p>
          You have the right to receive a “Good Faith Estimate” explaining how
          much your medical care will cost.
        </p>
        <p>
          Under the law, health care providers need to give patients who don’t
          have insurance or who are not using insurance an estimate of the bill
          for medical items and services.
        </p>
      </section>
      <section className="insured-clients">
        <h2>Insured Clients</h2>
        <p>
          At Release Restore Redefine Counseling, insurance is accepted.
          Services may be covered in full or partial based on your individual
          insurance plan. Feel free, to contact your insurance for detailed
          coverage. Also, prior to your initial session, insurance benefits are
          verified. Co-payments can be made with all major credit cards.
        </p>
      </section>
      <section className="scheduling">
        <h2>Cancellation / No Shows / Rescheduling</h2>
        <p>
          In the event that you do not attend your scheduled therapy appointment
          or you failed to reschedule/cancel 24 hours prior to scheduled
          appointment, you will be automatically charged a $50.00 fee.
        </p>
      </section>
      <div
        id="emdrIntesiveModal"
        className="modal"
        style={{ display: emdrModalOpen ? "block" : "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setEmdrModalOpen(false)}>
            &times;
          </span>
          <video className="modal-video" autoPlay={true} loop muted>
            <source
              src={
                "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/2024+EMDR+Intensive+Packages.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        id="groupIntensiveModal"
        className="modal"
        style={{ display: groupModalOpen ? "block" : "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setGroupModalOpen(false)}>
            &times;
          </span>
          <video className="modal-video" autoPlay={true} loop muted>
            <source
              src={
                "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Group+Intensive+Offering+.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="modal-container">
          <span className="close" onClick={() => setGroupModalOpen(false)}>
            &times;
          </span>
          <CarouselImages />
        </div>
      </div>
    </div>
  );
}
