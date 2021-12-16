import React from "react";
import "./home.css";

export default function Home() {
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
          src="https://wellcall-app-cdk.s3.amazonaws.com/tiff-swinging.jpeg"
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
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/COC-logo-removebg.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/EMDRIA-logo.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/TFBG-logo-black.jpg"
          />
        </div>
      </div>
      <h1>Empowerment | Support | Alliance | Safety</h1>
      <p>
        Are you ready to thrive and come alive, while continuing on your
        journey? If so, I am here to align with you, become your ally, explore
        your journey through your lens in a safe, non-judgmental, relaxed and
        supportive environment. Let’s release pent up trauma, restore overall
        wellbeing: mind, body and soul. Allow me to help you become empowered to
        redefine your personal transformation.
      </p>
      <div className="banner">
        <div className="banner-container">
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/united-healthcare-logo.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/anthem-bcbs-logo-removebg.png"
          />
          <img
            className="banner-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/oscar-removebg.png"
          />
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Take your voice back. BE YOU!</h1>
    </div>
  );
}
