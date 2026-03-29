import React, { useState, useEffect } from "react";
import "./offerings.css";
import GirlsOnCourt from "../../assets/images/girls-on-court.png";
import LaughingWomen from "../../assets/images/laughing-women.png";
import FlowerWomen from "../../assets/images/flower-women.png";
import R3QrCodeForCareCredit from "../../assets/images/Release Restore Redefine Counseling QR Code for CareCredit.png";
import FAQs, { emdrIntensiveFaqs } from "./intensive-faqs";
import CardWithLeftImage from "../../components/Offerings/cardWithLeftImage";
import LightBeamOnEye from "../../assets/images/lightbeam-on-eye.png";
import AboutEDMR from "../../components/Offerings/EDMRIntesives/aboutEDMR";
import CardWithRightImage from "../../components/Offerings/cardWithRightImage";
import Consulting from "../../assets/images/girl-talk.png";
import ClinicalConsultCorner from "../../components/Offerings/clinicalConsultCorner";
import Bowls from "../../assets/images/Tiffany-playing-bowls.png";
import WellnessBooster from "../../components/Offerings/wellnessBooster";
import Tiffany from "../../assets/images/Tiffany-sitting.png";
import IndividualTherapy from "../../components/Offerings/individualTherapy";
import PrivateWellnessExperience from "../../assets/images/private-wellness-experience.png";
import PrivateWellnessExperienceAlt from "../../assets/images/2026/dji_mimo_20260221_113146_20260221113147_1771693822704_photo.JPG";
import privateWellnessExperience from "../../components/Offerings/privateWellnessExperience";
import { Col, Row } from "antd";
import LeadForm from "../../components/LeadForm";
import { MEDIA } from "../../constants/media";

const privateWellnessRotatingImages = [
  PrivateWellnessExperience,
  PrivateWellnessExperienceAlt,
];

const posterImages = [GirlsOnCourt, LaughingWomen, FlowerWomen];
const offeringsTitle =
  "Offerings | Release Restore Redefine Counseling | Martinez, GA";
const offeringsDescription =
  "Explore EMDR intensives, private wellness experiences, trauma-informed groups, clinical consultation, and individual therapy with Release Restore Redefine Counseling in Martinez, Georgia.";
const offeringsUrl = "https://r3counseling.com/offerings";

interface Props {
  isMobile: boolean;
}

export default function Offerings(props: Props) {
  const [consultModalVis, setConsultModalVis] = useState(false);
  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [activePosterIndex, setActivePosterIndex] = useState(0);

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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePosterIndex((currentIndex) =>
        (currentIndex + 1) % posterImages.length
      );
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const offeringsSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: offeringsTitle,
          description: offeringsDescription,
          url: offeringsUrl,
          mainEntity: {
            "@type": "OfferCatalog",
            name: "R3 Counseling Offerings",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "EMDR Intensives",
                  description:
                    "Extended trauma-focused EMDR intensives with consultation, preparation, customized scheduling, and follow-up care.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Private Wellness Experience",
                  description:
                    "Trauma-conscious yoga, breathwork, meditation, sound bath, and customized wellness experiences for private or corporate events.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Group Clinical Supervision",
                  description:
                    "Clinical consultation and supervision support for clinicians building skills, confidence, and practice direction.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "EmpowerHer: Women's Trauma Healing Group",
                  description:
                    "An 8-week trauma healing group blending support circles, movement, breathwork, and sound meditation.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Individual Therapy",
                  description:
                    "One-on-one therapy in a supportive environment focused on healing, insight, and next-step growth.",
                },
              },
            ],
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: emdrIntensiveFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "offerings-page-schema";
    schemaScript.text = JSON.stringify(offeringsSchema);
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById("offerings-page-schema");

      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  function CarouselImages() {
    return (
      <div className="mySlides fade session-img">
        <img
          src={posterImages[activePosterIndex]}
          className="slide-img"
          alt="Featured counseling and wellness offering"
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Offerings</h1>
      <div className={"session-img-container"}>
        <CarouselImages />
      </div>
      <div>
        <CardWithLeftImage
          imageSrc={LightBeamOnEye}
          title="EMDR Intensives"
          content={AboutEDMR}
        />

        <div className="free-consult-container">
          <button
            type="button"
            className="free-consult-button"
            onClick={() => setConsultModalVis(!consultModalVis)}
          >
            Free Consultation
          </button>
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
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div className="heading">
            <h3 className="transition-text">
              Intensive Experience at a Glance
            </h3>
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
                    <strong>
                      Not an insurance covered service. Care Credit optional
                      payment source
                    </strong>
                  </li>
                </ul>
              </li>
              <li className="transition-text">
                <strong>Pricing begins at $1000</strong> and is adjusted based
                on your Customized EMDR Intensive Schedule/Needs; Care Credit
                optional payment source.
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <a
                href="https://www.carecredit.com/go/542NPQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={R3QrCodeForCareCredit}
                  alt="Girls On Court"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div className="heading">
              <h3 className="transition-text">
                Intensive Frequently Asked Questions (FAQs)
              </h3>
              <p className="transition-text">Click To Expand Answer</p>
            </div>
          </div>
          <FAQs />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="highlight-vid-container heading">
            <h3 className="transition-text">EMDR at a Glance</h3>
            <iframe
              title="EMDR at a Glance video"
              className="highlight-vid"
              src="https://www.youtube.com/embed/Pkfln-ZtWeY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="transition-text heading">EMDR Group Intensives</h2>
          <p className="transition-text">
            <a
              className="emdr-link"
              href="https://youtu.be/n2fQ8xC4U10"
              target="_blank"
              rel="noopener noreferrer"
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
            <button
              type="button"
              className="free-consult-button"
              onClick={() => setGroupModalOpen(true)}
            >
              Group Intensive Info
            </button>
            <button
              type="button"
              className="free-consult-button"
              onClick={() => setConsultModalVis(!consultModalVis)}
            >
              Free Consultation
            </button>
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
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row justify="space-around" align="middle">
          <CardWithRightImage
            heroTitle="Clinician Consult Corner"
            imageSrc={Consulting}
            title="Group Clinical Supervision"
            content={ClinicalConsultCorner}
          />
        </Row>
        <Row
          justify="space-around"
          align="middle"
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
        >
          <Col>
            <CardWithLeftImage
              heroTitle="Wellness Booster"
              imageSrc={PrivateWellnessExperience}
              rotatingImageSources={privateWellnessRotatingImages}
              rotateIntervalMs={5000}
              imageObjectPosition="50% 22%"
              content={privateWellnessExperience}
              className="private-wellness"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row justify="space-around" align="middle">
          <CardWithRightImage
            // heroTitle="Wellness Booster"
            imageSrc={Bowls}
            title="EmpowerHer: Women's Trauma Healing Group"
            content={WellnessBooster}
          />
        </Row>
        {/* </Col> */}
        {/* <Col span={24}> */}
        <CardWithLeftImage
          imageSrc={Tiffany}
          imageObjectPosition="50% 10%"
          title="Individual Therapy"
          content={IndividualTherapy}
        />
        {/* </Col> */}
        {/* </Row> */}
      </div>
      <div className="coming-soon-container">
        <h3 className="transition-text">
          Stay Tuned....PAUSE Day Retreat Series Coming Soon
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
                MEDIA.groupIntensiveVideo
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
