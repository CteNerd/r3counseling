import React, { useState } from "react";
import "./offerings.css";
import Posters from "./posters.json";

interface Props {
  isMobile: boolean;
}

export default function Offerings(props: Props) {
  const [consultModalVis, setConsultModalVis] = useState(false);
  const [groupModalOpen, setGroupModalOpen] = useState(false);

  var slideIndex = 1;
  showSlides(slideIndex);

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

    Posters.forEach((poster, index) => {
      content.push(
        <div key={index} className="mySlides fade session-img">
          {/* <div className="numbertext">{index} / {Posters.length}</div> */}
          <img src={poster.url} className="slide-img" />
          {/* <div className="text">{poster.caption}</div> */}
        </div>
      );
    });

    return <div>{content}</div>;
  }

  return (
    <div>
      <h1>Offerings</h1>
      <div className={"session-img-container"}>
        <CarouselImages />
      </div>
      <div>
        <div>
          <h2>EMDR Intensives</h2>
          <p>
            EMDR Intensives are another road to healing, rather than changing
            how you think to change how you feel, EMDR rewires your memory
            networks and desensitizes those old memories that make you feel
            stuck in your past. The negative feelings and belief patterns about
            self that are embedded in your memory network can be changed with
            EMDR processing. EMDR Intensives provides you with an opportunity to
            work on your past, present, and/or future over a condensed period,
            which expedites your healing journey.
          </p>
          <p>
            An Intensive usually entails a 4 to 8 hour day session for 1 to 5
            consecutive days. With this time frame, we spend more concentrated
            time healing your specific concern. Yes, it is INTENSE work and it
            can be the healing and emotional reset needed in this moment of your
            life. EMDR Intensives are not for everyone, so, a free consultation
            is provided to determine your readiness for the intensive work being
            offered. You can travel from anywhere, feel free to spend a few days
            in Augusta while conducting your Intensive, then, return to your
            normal schedule. I invite you to contact me to schedule your free
            consultation, why wait!!
          </p>
        </div>
        <div className="free-consult-container">
          <a onClick={() => setConsultModalVis(!consultModalVis)}>
            <button className="free-consult-button">Free Consultation</button>
          </a>
          <div
            id="id01"
            className={consultModalVis ? "consult-modal" : "consult-modal-none"}
          >
            <div className="consult-modal-content">
              <div className="consult-container">
                <span
                  onClick={() => setConsultModalVis(false)}
                  className="w3-button w3-display-topright"
                >
                  &times;
                </span>
                <iframe src="https://cdn.forms-content.sg-form.com/58a2c899-c0c0-11ed-b4f5-060e8f5a62bc" />
              </div>
            </div>
          </div>
        </div>
        <div className="highlight-vid-container">
          <h3>EMDR at a Glance</h3>
          <iframe
            className="highlight-vid"
            src="https://www.youtube.com/embed/Pkfln-ZtWeY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2>EMDR Group Intensives</h2>
          <p>
            <a
              className="emdr-link"
              href="https://youtu.be/n2fQ8xC4U10"
              target="_blank"
            >
              EMDR Intensive Groups
            </a>{" "}
            are NOT your typical groups. There is no sharing required, internal
            processing occurs, and rapid intervention to support those who have
            experienced acute trauma. EMDR does not make you forget what has
            happened, it will help you decrease the intensity surrounding your
            flashbacks, limiting beliefs, and overwhelming feelings. EMDR group
            therapy can be provided within your organization as well. Feel free
            to schedule a consult today!!
          </p>
          <div className="free-consult-container">
            <a onClick={() => setGroupModalOpen(true)}>
              <button className="free-consult-button">
                Group Intensive Info
              </button>
            </a>
            <a onClick={() => setConsultModalVis(!consultModalVis)}>
              <button className="free-consult-button">Free Consultation</button>
            </a>
            <div
              id="id01"
              className={
                consultModalVis ? "consult-modal" : "consult-modal-none"
              }
            >
              <div className="consult-modal-content">
                <div className="consult-container">
                  <span
                    onClick={() => setConsultModalVis(false)}
                    className="w3-button w3-display-topright"
                  >
                    &times;
                  </span>
                  <iframe src="https://cdn.forms-content.sg-form.com/58a2c899-c0c0-11ed-b4f5-060e8f5a62bc" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Clinical Supervision</h2>
          <p>
            Release Restore Redefine Counseling offers clinical supervision to
            students and clinicians who are in the process of seeking their
            professional counseling license. If you are interested in beginning
            individual or group supervision, feel free to call 706-750-8906 or
            send an email to{" "}
            {
              <a href="mailto:r3counseling@counselingsecure.com">
                r3counseling@counselingsecure.com
              </a>
            }
          </p>
        </div>
        <div>
          <h2>Individual Therapy</h2>
          <p>
            Let’s talk one-on-one in a safe, non-judgmental, relaxed, and
            supportive environment. Allow me to gain an understanding of your
            past and present experiences through your lens. Let’s explore the
            impact of your emotions and thoughts on present behaviors. Let’s
            align to RELEASE, RESTORE and REDEFINE the next phase of your
            journey!
          </p>
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
      </div>
    </div>
  );
}
