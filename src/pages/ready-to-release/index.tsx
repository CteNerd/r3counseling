import React, { useEffect } from "react";
import "./r3.css";

export default function ReadyToRelease() {
  return (
    <div id="r3">
      <h1>Ready to Release</h1>
      <p>
        Are you ready to schedule your initial free 15 minute consultations? Do
        you have a quick question? Please send us a message. This message does
        not establish you as a client of Release Restore Redefine. Our typical
        response time is within 24-48 business hours.
      </p>

      {/* <style>.spwidget-button-wrapper{text-align: center}.spwidget-button{display: inline-block;padding: 12px 24px;color: #fff !important;background: #de6a26;border: 0;border-radius: 4px;font-size: 16px;font-weight: 600;text-decoration: none}.spwidget-button:hover{background: #d15913}.spwidget-button:active{color: rgba(255, 255, 255, .75) !important;box-shadow: 0 1px 3px rgba(0, 0, 0, .15) inset}</style> */}
      <div className="spwidget-button-wrapper">
        <a
          href="https://provider.growtherapy.com/book-appointment?id=970&ref=prov"
          target="_blank"
        >
          <button>Grow Therapy Appt</button>
        </a>
      </div>

      <div className="spwidget-button-wrapper">
        <a
          href="https://tiffany-luke.clientsecure.me"
          className="spwidget-button"
          data-spwidget-scope-id="b429046b-2ff3-4502-9bc6-451911b33ad0"
          data-spwidget-scope-uri="tiffany-luke"
          data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
          data-spwidget-scope-global
          data-spwidget-autobind
          target="_blank"
        >
          Simple Practice Widget
        </a>
      </div>
      <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
    </div>
  );
}
