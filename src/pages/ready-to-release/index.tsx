import React, { useEffect } from "react";
import "./r3.css";
import R3QrCodeForCareCredit from "../../assets/images/Release Restore Redefine Counseling QR Code for CareCredit.png";

export default function ReadyToRelease() {
  useEffect(() => {
    const widgetContainer = document.getElementById("widget");

    if (widgetContainer) {
      widgetContainer.innerHTML = `<!-- Start SimplePractice Appointment-Request Widget Embed Code -->
      <style>.spwidget-button-wrapper{text-align: center}.spwidget-button{display: inline-block;padding: 12px 24px;color: #fff !important;background: #de6a26;border: 0;border-radius: 4px;font-size: 16px;font-weight: 600;text-decoration: none}.spwidget-button:hover{background: #d15913}.spwidget-button:active{color: rgba(255, 255, 255, .75) !important;box-shadow: 0 1px 3px rgba(0, 0, 0, .15) inset}</style>
      <div class="spwidget-button-wrapper"><a href="https://tiffany-luke.clientsecure.me" class="spwidget-button" data-spwidget-scope-id="b429046b-2ff3-4502-9bc6-451911b33ad0" data-spwidget-scope-uri="tiffany-luke" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>Request Appointment</a></div>
      <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
      <!-- End SimplePractice Appointment-Request Widget Embed Code -->`;
    }
  }, []);
  return (
    <div id="r3">
      <h1>Ready to Release</h1>
      {/* <div className={"reception-img-container"}>
        <img
          className="reception-img"
          src={
            "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Front-Desk-Check-in.jpeg"
          }
        />
      </div> */}
      <p>
        Are you ready to schedule your initial free 15 minute consultations? Do
        you have a quick question? Please send us a message. This message does
        not establish you as a client of Release Restore Redefine. Our typical
        response time is within 24-48 business hours.
      </p>

      {/* <style>.spwidget-button-wrapper{text-align: center}.spwidget-button{display: inline-block;padding: 12px 24px;color: #fff !important;background: #de6a26;border: 0;border-radius: 4px;font-size: 16px;font-weight: 600;text-decoration: none}.spwidget-button:hover{background: #d15913}.spwidget-button:active{color: rgba(255, 255, 255, .75) !important;box-shadow: 0 1px 3px rgba(0, 0, 0, .15) inset}</style> */}
      <div className="spwidget-button-wrapper">
        <h4>Please Schedule Here</h4>
        <a href="https://tiffany-luke.clientsecure.me" target="_blank">
          <button title="Schedule With Simple Practice">
            Request Appointment
          </button>
        </a>
      </div>

      <section className="private-rates">
        <h2>Rates &amp; Terms</h2>
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
        <ul>
          <li>Individual Therapy $195.00 — 55 min session with Tiffany Luke</li>
          <li>Individual Therapy $175.00 — 55 min session with Niya Burnette</li>
          <li>Individual Therapy $150.00 — 50 min session with Nicole Thoms Fuentes (under clinical supervision of Tiffany Luke)</li>
        </ul>
      </section>

      <section className="payments">
        <h4>Accepts Payments</h4>
        <p>
          All major credit cards are accepted for payment, including Care Credit
          for EMDR Intensives and Wellness Sessions.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <a href="https://www.carecredit.com/go/542NPQ" target="_blank" rel="noopener noreferrer">
            <img
              src={R3QrCodeForCareCredit}
              alt="Scan QR code to apply for CareCredit for R3 Counseling"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
        </div>
        <h4>Superbill</h4>
        <p>
          A Superbill can be requested and generated if you would like to submit
          information to your insurance company.
        </p>
        <h4>Good Faith Estimate</h4>
        <p>
          Under the No Surprises Act, you have the right to receive a Good Faith
          Estimate explaining how much your care will cost. Health care providers
          are required to give patients who don't have insurance or who are not
          using insurance an estimate of the bill for medical items and services.
        </p>
      </section>

      <section className="insured-clients">
        <h2>Insured Clients</h2>
        <p>
          At Release Restore Redefine Counseling, insurance is accepted. Services
          may be covered in full or in part based on your individual plan. Contact
          your insurance provider for detailed coverage information. Co-payments
          can be made with all major credit cards.
        </p>
      </section>

      <section className="scheduling">
        <h2>Cancellation / No Shows / Rescheduling</h2>
        <p>
          In the event that you do not attend your scheduled therapy appointment
          or fail to reschedule/cancel at least 24 hours prior to your
          appointment, you will be charged a $75.00 fee (with Tiffany or Niya) or
          $150.00 (with Nicole).
        </p>
      </section>
    </div>
  );
}
