import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <div className="banner top-banner">
        <div className="banner-container">
          <blockquote className="banner-quote">
            “Don’t ask what the world needs. Ask what makes you come alive, and
            go do it. Because what the world needs is people who have come
            alive.”
          </blockquote>
          <p className="banner-citation">- Howard Thurman</p>
        </div>
      </div>
      <div className="masthead-img-container">
        <img
          className="masthead-img"
          src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/tiff-swinging.jpeg"
        />
      </div>
      <h1>Let's Come Alive</h1>
      <p>
        Are you emotionally constipated? Are you trapped in your mask? Is your
        plate overflowing with life’s demands? Are you noticing increased
        anxiety or stress? Are your past wounds impacting your present
        relationships? Do you find yourself numbing the pain to cope with your
        reality? Are you surrounded by ‘your team’ but still suffering in
        silence, feeling unheard, failing to be seen or fully supported?
      </p>
      <div className="banner">
        <div className="banner-container">
          <h1 className="banner-header">Find me on :</h1>
          <img
            className="banner-img"
            src="https://secureservercdn.net/198.71.233.229/41m.3eb.myftpupload.com/wp-content/uploads/2020/09/0009_psychology-today-logo.png?time=1634477867"
          />
          <a
            href="https://www.cliniciansofcolor.org:443/clinicians/tiffany-luke-lpc/"
            target="_blank"
            rel="external nofollow"
          >
            <img src="https://www.cliniciansofcolor.org/wp-content/uploads/2021/06/cocbdge-e1624452955918.png" />
          </a>
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/EMDR+Certified+Therapist+%E2%80%A2+Tiffany+Luke+%E2%80%A2+EMDR+International+Association+Badge.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/TFBG-logo.jpg"
          />
        </div>
      </div>
      <h1>Empowerment | Support | Alliance | Safety </h1>
      <p>
        Are you ready to thrive and come alive, while continuing on your
        journey? If so, I am here to align with you, become your ally, explore
        your journey through your lens in a safe, non-judgmental, relaxed and
        supportive environment. Let’s release pent up trauma, restore overall
        wellbeing: mind, body, and soul. Allow me to help you become empowered
        to redefine your personal transformation.
      </p>
      <div className="banner">
        <div className="banner-container">
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/united-healthcare-logo.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/anthem-bcbs-logo-removebg.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/oscar-removebg.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/aetna_purple.jpg"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Cigna-Logo.png"
          />
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Take your voice back. BE YOU!</h1>
      <div
        id="groupIntensiveModal"
        className="modal"
        style={{ display: modalOpen ? "block" : "none" }}
        onBlur={() => setModalOpen(false)}
      >
        <div className="home-modal-content">
          <div className="close-container">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
          <a
            href="https://cdn.forms-content.sg-form.com/58a2c899-c0c0-11ed-b4f5-060e8f5a62bc"
            target="_blank"
          >
            <img
              className="home-img"
              src={"https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Home-Rocks.png"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
