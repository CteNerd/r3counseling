import React, { useState } from "react";
import "./terms.css";

export default function Terms() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Terms</h1>
      <h2>Private Rates</h2>
      <p>
        At Release Restore Redefine Counseling, we provide private rates to all
        our clients based on their needs. We offer an initial Goodness of Fit
        consultation which is 15 minutes and free to all clients.
      </p>
      <p>
        For more information about consultations, or training, please feel free
        to reach out to The Cookie Counselor.
      </p>
      <h4>Individual Psychotherapy</h4>
      <div className="psychotherapy-container">
        <div className="psychotherapy-container-columns">
          <ul>
            <li>$140 for a 60 minute initial Intake Sessions</li>
            <li>$115 for a 55 minute Psychotherapy/EMDR session</li>
            <li>$165 for a 90 minute Extended Session</li>
            <li>
              <a onClick={() => setModalOpen(true)}>
                Self Pay Package Rate: Individual/EMDR Intensive
              </a>
            </li>
            <ul>
              <li>
                <a
                  href={
                    "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Poster+-+R3-2.pdf"
                  }
                  target={"_blank"}
                >
                  Download PDF
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="psychotherapy-container-columns">
          <div className="emdr-badge-container tooltip">
            <a href="https://credentials.emdria.org/0d260993-9d2c-4819-868d-d08c7e358a63#gs.lo5cs3">
              <span className="tooltiptext">Click To View My Credentials</span>
              <img src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/EMDR+Certified+Therapist+%E2%80%A2+Tiffany+Luke+%E2%80%A2+EMDR+International+Association+Badge.png" />
            </a>
          </div>
        </div>
      </div>
      <h4>Accepts Payments</h4>
      <p>All major credit cards are accepted for payment.</p>
      <h4>Superbill</h4>
      <p>
        A Superbill can be requested and generated, if you would like to submit
        information to your insurance company.
      </p>
      <h4>Good Faith Estimate</h4>
      <p>
        Under Section 2799B-6 of the Public Health Service Act, health care
        providers and health care facilities are required to inform individuals
        who are not enrolled in a plan or coverage or a Federal health care
        program, or not seeking to file a claim with their plan or coverage both
        orally and in writing of their ability, upon request or at the time of
        scheduling health care items and services, to receive a “Good Faith
        Estimate” of expected charges.
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
      <h2>Insured Clients</h2>
      <p>
        At Release Restore Redefine Counseling, insurance is accepted. Services
        may be covered in full or partial based on your individual insurance
        plan. Feel free, to contact your insurance for detailed coverage. Also,
        prior to your initial session, insurance benefits are verified.
        Co-payments can be made with all major credit cards.
      </p>
      <h2>Cancellation / No Shows / Rescheduling</h2>
      <p>
        In the event that you do not attend your scheduled therapy appointment
        or you failed to reschedule/cancel 24 hours prior to scheduled
        appointment, you will be automatically charged a $50.00 fee.
      </p>
      <div
        id="myModal"
        className="modal"
        style={{ display: modalOpen ? "block" : "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setModalOpen(false)}>
            &times;
          </span>
          <video className="modal-video" autoPlay={true} loop muted>
            <source
              src={
                "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Poster+-+R3-2.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
