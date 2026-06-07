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
import { Link } from "react-router-dom";
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
  "Explore EMDR intensives, trauma-focused supervision, community wellness, and integrative therapy services with Release Restore Redefine Counseling in Martinez, Georgia.";
const offeringsUrl = "https://r3counseling.com/offerings";

interface Props {
  isMobile: boolean;
}

export default function Offerings(props: Props) {
  const [consultModalVis, setConsultModalVis] = useState(false);
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
            Book a Consultation
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
          <div className="offerings-info-panel">
            <h3 className="transition-text">Good Fit for EMDR Intensives</h3>
            <ul className="intensive-offerings-list">
              <li className="transition-text">
                You have been in therapy but still feel stuck.
              </li>
              <li className="transition-text">
                You have limited time for weekly therapy.
              </li>
              <li className="transition-text">
                You want a focused healing experience.
              </li>
              <li className="transition-text">
                You are seeking relief from unresolved trauma.
              </li>
              <li className="transition-text">
                You want deeper healing than talk therapy alone.
              </li>
            </ul>
          </div>

          <div className="offerings-info-panel">
            <h3 className="transition-text">Why Intensives Work</h3>
            <ul className="intensive-offerings-list">
              <li className="transition-text">Sustained focus for deeper processing</li>
              <li className="transition-text">Fewer interruptions than weekly 50-minute sessions</li>
              <li className="transition-text">Ability to stay with the work longer</li>
              <li className="transition-text">Greater continuity from start to integration</li>
            </ul>
          </div>

          <div className="offerings-info-panel">
            <h3 className="transition-text">Real-Life Outcomes</h3>
            <ul className="intensive-offerings-list">
              <li className="transition-text">Feeling present in your relationships</li>
              <li className="transition-text">Increased emotional awareness</li>
              <li className="transition-text">Reduced emotional reactivity</li>
              <li className="transition-text">Better decision making under stress</li>
              <li className="transition-text">Greater connection to self and daily life</li>
            </ul>
          </div>

          <div>
            <ul className="intensive-offerings-list">
              <li className="transition-text">
                <strong>1. Complimentary Consultation (30 Minutes)</strong>
                <br />
                Your healing journey begins with a complimentary consultation
                designed to help us connect and determine whether an EMDR
                Intensive is the right fit. Discussion includes current
                challenges, healing goals, how EMDR and integrative approaches
                can help, and questions about the intensive process. If not a
                good fit, referrals and alternative recommendations will be
                provided.
              </li>
              <li className="transition-text">
                <strong>2. Pre-Intensive Session (60 Minutes)</strong>
                <br />
                Clarify goals, review the Intensive Workbook, identify treatment
                targets, increase awareness of nervous system responses, gather
                background information, and develop your Intensive plan.
              </li>
              <li className="transition-text">
                <strong>3. Day of Intensive (4–6 Hours)</strong>
                <br />
                4–6 hours of customized therapeutic work that may include EMDR
                therapy and trauma processing, nervous system regulation,
                holistic and integrative healing modalities, and reflection,
                grounding, and integration.
              </li>
              <li className="transition-text">
                <strong>4. Integration Session (60 Minutes)</strong>
                <br />
                Reflect on shifts and insights, identify ongoing needs,
                strengthen integration, and discuss recommendations and next
                steps.
              </li>
            </ul>
            <ul className="intensive-offerings-list">
              <li className="transition-text">Customized based on individual goals</li>
              <li className="transition-text">Available in Augusta and Kennesaw</li>
              <li className="transition-text">Private Pay Service</li>
              <li className="transition-text">Typically not covered by insurance</li>
              <li className="transition-text">CareCredit available</li>
              <li className="transition-text">
                <strong>Pricing begins at $1,170</strong> and varies based on
                customized intensive plan
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
        <Row justify="space-around" align="middle">
          <CardWithRightImage
            heroTitle="Clinician Consult Corner"
            imageSrc={Consulting}
            title="Group or Individual Clinical Supervision"
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

        <div className="offerings-action-grid">
          <div className="offerings-action-card">
            <h3>Referral Partners</h3>
            <p>
              Refer adults who feel stuck despite therapy and need focused,
              trauma-integrative care.
            </p>
            <Link className="offerings-link-button" to="/referral-partners">
              Refer a Client
            </Link>
          </div>
          <div className="offerings-action-card">
            <h3>Clinical Supervision</h3>
            <p>
              Explore trauma-focused supervision and consultation for associate
              licensed clinicians and therapists.
            </p>
            <Link className="offerings-link-button" to="/clinical-supervision">
              Learn About Clinical Supervision
            </Link>
          </div>
          <div className="offerings-action-card">
            <h3>Community Wellness</h3>
            <p>
              Bring trauma-conscious yoga and mind-body wellness experiences to
              your school, team, or organization.
            </p>
            <Link className="offerings-link-button" to="/community-wellness">
              Explore Community Wellness Offerings
            </Link>
          </div>
        </div>
        {/* </Col> */}
        {/* </Row> */}
      </div>
    </div>
  );
}
