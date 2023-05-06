import React, { useEffect } from "react";
import "./retreat.css";

export default function Retreat() {
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
      <h1>EMDR Intensive Restoration Retreat Fall/Winter 2023</h1>
      <div className="coming-soon-container">
        <h3>Stay Tuned</h3>
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0299.JPG"
          className="retreat-img"
        />
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0300.jpg"
          className="retreat-img"
        />
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0301.JPG"
          className="retreat-img"
        />
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0496.JPG"
          className="retreat-img"
        />
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0497.JPG"
          className="retreat-img"
        />
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0498.JPG"
          className="retreat-img"
        />
      </div>
      <div className="retreat-img-container">
        <img
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0502.JPG"
          className="retreat-img"
        />
      </div>
    </div>
  );
}
