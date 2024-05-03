import React, { useState, useEffect } from "react";
import "./offerings.css";
import Posters from "./posters.json";
import FAQs from "./intensive-faqs";
import { Card, Image, Row } from 'antd';
import Image1 from '../../assets/images/lightbeam-on-eye.png'

interface Props {
  isMobile: boolean;
}

export default function Offerings(props: Props) {
  const [consultModalVis, setConsultModalVis] = useState(false);
  const [groupModalOpen, setGroupModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".transition-text");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const fullyVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);
        const partiallyVisible =
          rect.top < window.innerHeight && rect.bottom >= 0; // Adjusted to check for any part of the element being visible

        if (fullyVisible || partiallyVisible) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once to check visibility on initial render

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Your existing component code

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
        <div style={{ position: 'relative' }}>
        <Row>
        
          <Image 
            height={723}
            width={614}
            src={Image1}
            preview={false}
          />
          <Card style={{ 
            width: 600,
            position: 'absolute',
            top: '60%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            borderColor: 'rgb(224, 188, 191, 0.5)',
            borderWidth: 2,
            }}>
            <h2 className="transition-text">EMDR Intensives</h2>
            <p className="transition-text">
            EMDR Intensives offer an alternative path to healing by rewiring
            memory networks rather than simply altering thought patterns to
            change emotions. Through EMDR processing, memories that contribute
            to feeling stuck in the past are desensitized, allowing for
            transformation of negative feelings, beliefs, and body sensations.
            These Intensives provide a condensed opportunity to address past,
            present, and future concerns, expediting the healing process.
          </p>
          <p className="transition-text">
            Typically spanning 4 to 8 hours per day over 1 to 5 days, Intensives
            offer concentrated time to address specific issues. While the work
            is intense, it can serve as a profound emotional reset. To ensure
            suitability for Intensive work, a complimentary consultation is
            provided. Clients are welcome to travel to Augusta for the
            Intensive, creating space for focused healing before returning to
            their regular routines. Don't hesitate to reach out and schedule
            your free consultation today—why wait to begin your healing journey?
          </p>
        </Card>
        </Row>
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
        <div>
          <div>
            <div>
              <h3 className="transition-text">
                Intensive Experience at a Glance
              </h3>
            </div>
          </div>
          <div>
            <ul className="intensive-offerings-list">
              <li className="transition-text">
                <strong>Consultation 30 minutes</strong> - Our Goodness of Fit
                consultation aims to assess whether the Intensive is the optimal
                approach for your current journey.
              </li>
              <li className="transition-text">
                <strong>EMDR Client Workbook</strong> - This workbook features
                assessments and activities designed to ready you for the
                Intensive, enabling you to track progress on your treatment
                goals throughout our sessions. This tool empowers you to
                maintain a comprehensive record of your journey before, during,
                and after our sessions.
              </li>
              <li className="transition-text">
                <strong>Intensive Intake 60 minutes</strong> - In this 60-minute
                session, we establish the objectives of the Intensive and lay
                the groundwork for the journey ahead. Together, we'll pinpoint
                the sources of discomfort—be it painful experiences, beliefs,
                emotions, bodily sensations, or images—that you aim to address.
              </li>
              <li className="transition-text">
                <strong>Customized EMDR Intensive Schedule</strong> - Intensives
                typically span from 1 to 5 days, with sessions lasting 4 to 8
                hours each. Our focus during these sessions will be on
                addressing the stressful experiences identified during the
                initial 60-minute Intensive Intake session. Techniques such as
                EMDR, Resourcing Activities, and Holistic Practices will be
                integrated.
              </li>
              <li className="transition-text">
                <strong>Post Intensive Follow Up/Next Steps 45 minutes</strong>{" "}
                - This 45-minute session is dedicated to exploring your
                experience, reflecting on any changes you've observed within
                yourself or new insights you may have gained. We'll also discuss
                the next steps for your journey.
                <ul>
                  <li className="transition-text">
                    <strong>Not an insurance covered service</strong>
                  </li>
                </ul>
              </li>
              <li className="transition-text">
                <strong>Pricing begins at $1000</strong> and is adjusted based
                on your Customized EMDR Intensive Schedule/Needs
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h3 className="transition-text">
                Intensive Frequently Asked Questions (FAQs)
              </h3>
              <p className="transition-text">Click To Expand Answer</p>
            </div>
          </div>
          <FAQs />
        </div>
        <div className="highlight-vid-container">
          <h3 className="transition-text">EMDR at a Glance</h3>
          <iframe
            className="highlight-vid"
            src="https://www.youtube.com/embed/Pkfln-ZtWeY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2 className="transition-text">EMDR Group Intensives</h2>
          <p className="transition-text">
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
          <h2 className="transition-text">Clinical Supervision</h2>
          <p className="transition-text">
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
          <h2 className="transition-text">Individual Therapy</h2>
          <p className="transition-text">
            Let’s talk one-on-one in a safe, non-judgmental, relaxed, and
            supportive environment. Allow me to gain an understanding of your
            past and present experiences through your lens. Let’s explore the
            impact of your emotions and thoughts on present behaviors. Let’s
            align to RELEASE, RESTORE and REDEFINE the next phase of your
            journey!
          </p>
        </div>
      </div>
      <div className="coming-soon-container">
        <h3 className="transition-text">
          Stay Tuned R & R-Rest and Restore Retreat Coming November 2024
        </h3>
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
