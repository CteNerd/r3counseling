import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ImageCarousel from "../../components/imageCarousel/imageCarousel";
import PshycologyTodayLogo from "../../assets/logos/psychologytoday-13.png";
import CareCreditLogo from "../../assets/logos/CareCredit.png";
import { ImageMeta } from "../../types/models";
import { MEDIA } from "../../constants/media";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const images: ImageMeta[] = [
    {
      imageUrl: MEDIA.homeRocks,
      landingPageUrl:
        "https://cdn.forms-content.sg-form.com/58a2c899-c0c0-11ed-b4f5-060e8f5a62bc",
      alt: "Stacked stones beside calm water — Release Restore Redefine Counseling",
    },
  ];

  function closeModal() {
    setModalOpen(false);
  }

  // Add schema markup for the homepage
  React.useEffect(() => {
    const homeSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Release Restore Redefine Counseling - Mental Health Services in Martinez and Kennesaw, GA",
      "description": "Professional counseling services offering EMDR therapy, holistic healing, and wellness retreats in Martinez and Kennesaw, Georgia.",
      "url": "https://r3counseling.com/",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Release Restore Redefine Counseling",
        "image": MEDIA.logoSocial,
        "telephone": "(706) 750-8906",
        "areaServed": ["Martinez, GA", "Kennesaw, GA"],
        "location": [
          {
            "@type": "Place",
            "name": "R3 Counseling Martinez Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4210 Columbia Rd",
              "addressLocality": "Martinez",
              "addressRegion": "GA",
              "postalCode": "30907"
            }
          },
          {
            "@type": "Place",
            "name": "R3 Counseling Kennesaw Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1301 Shiloh Rd. Suite 1240",
              "addressLocality": "Kennesaw",
              "addressRegion": "GA",
              "postalCode": "30144"
            }
          }
        ]
      }
    };
    
    // Create and append the script element to the document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(homeSchema);
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main>
      <section className="banner top-banner" aria-label="Inspirational Quote">
        <div className="banner-container">
          <blockquote className="banner-quote">
            "Don't ask what the world needs. Ask what makes you come alive, and
            go do it. Because what the world needs is people who have come
            alive."
          </blockquote>
          <p className="banner-citation">- Howard Thurman</p>
        </div>
      </section>
      
      <section className="hero-section">
        <div className="masthead-img-container">
          <img
            className="masthead-img"
            src={MEDIA.tiffanySwinging}
            alt="Tiffany Luke, founder of R3 Counseling, embodying freedom and joy"
            loading="eager"
          />
        </div>
        <h1>Let's Come Alive</h1>
        <p>
          If you have been doing the work but still do not feel like yourself,
          you are not alone. Maybe you understand your patterns but still feel
          emotionally disconnected. Maybe you have tried therapy, wellness, and
          self-development tools, but progress keeps stalling and restarting.
          R3 supports adults who feel stuck and are ready for focused,
          integrative trauma treatment that creates meaningful forward movement.
        </p>
        <div className="hero-cta-row">
          <Link className="home-cta-button" to="/offerings">
            Explore EMDR Intensives
          </Link>
          <Link className="home-cta-button" to="/appointment-request">
            Book a Consultation
          </Link>
        </div>
      </section>

      <section className="stuck-section" aria-label="Who We Support">
        <h2>If You Feel Stuck, This Space Is for You</h2>
        <ul className="stuck-list">
          <li>You have been in therapy but still feel stuck in the same cycle.</li>
          <li>You understand your trauma history but still feel disconnected in daily life.</li>
          <li>You have tried wellness practices but have not felt lasting relief.</li>
          <li>You are a busy professional who needs focused care, not slow fragmented progress.</li>
          <li>You feel emotionally constipated — like you know things but can't move through them.</li>
          <li>You feel trapped behind a mask, showing up for everyone but yourself.</li>
          <li>You feel disconnected despite doing all the right things.</li>
        </ul>
      </section>

      <section className="outcomes-section" aria-label="Outcome Focused Healing">
        <h2>What Change Can Look Like</h2>
        <ul className="outcomes-list">
          <li>Feeling more present in your relationships</li>
          <li>Greater emotional awareness and less emotional numbness</li>
          <li>Reduced emotional reactivity during stress</li>
          <li>Clearer decisions with more confidence and self-trust</li>
          <li>Deeper connection to your body, values, and daily life</li>
        </ul>
      </section>

      <section className="milestone-section banner" aria-label="Practice Milestone">
        <div className="banner-container">
          <img
            className="banner-img milestone-logo"
            src={MEDIA.logoSocial}
            alt="R3 Counseling logo"
          />
          <p className="milestone-title">Practice Leadership Milestone</p>
        </div>
      </section>
      
      <section className="credentials-section" aria-label="Professional Credentials">
        <div className="banner">
          <div className="banner-container">
            <h2 className="banner-header">Find me on :</h2>
            <img
              className="banner-img"
              src={PshycologyTodayLogo}
              alt="Psychology Today Profile - Tiffany Luke"
            />
            <a
              href="https://www.cliniciansofcolor.org:443/clinicians/tiffany-luke-lpc/"
              target="_blank"
              rel="external nofollow noopener noreferrer"
              aria-label="Clinicians of Color Profile"
            >
              <img
                src="https://www.cliniciansofcolor.org/wp-content/uploads/2021/06/cocbdge-e1624452955918.png"
                alt="Clinicians of Color Badge - Tiffany Luke"
              />
            </a>
            <img
              className="banner-img"
              src={MEDIA.emdrBadge}
              alt="EMDR Certified Therapist Badge - Tiffany Luke - EMDR International Association"
            />
            <img
              className="banner-img"
              src={MEDIA.tfbgLogo}
              alt="Trauma-Focused Behavioral Health Provider - Tiffany Luke"
            />
          </div>
        </div>
      </section>

      <section className="retreats-section" aria-label="Holistic Healing Retreats">
        <h2>Boutique Holistic Healing Retreats</h2>
        <p>
          Holistic Healing retreats for women to rest, restore, and reclaim their
          wholeness, time, and self care. You may find yourself feeling burnt-out,
          with little time to pour into yourself. The daily grind can be
          overwhelming, leaving little time for self care, authenticity, and
          rejuvenation. It is time to reset, recenter, and cultivate the balance
          you have envisioned.
        </p>
        <div className="banner">
          <div className="banner-container">
            <img
              className="banner-img"
              src={MEDIA.retreat1}
              alt="R3 Counseling Retreat Experience 1"
            />
            <img
              className="banner-img"
              src={MEDIA.retreat12}
              alt="R3 Counseling Retreat Experience 2"
            />
            <img
              className="banner-img"
              src={MEDIA.retreat7}
              alt="R3 Counseling Retreat Experience 3"
            />
            <img
              className="banner-img"
              src={MEDIA.retreat9}
              alt="R3 Counseling Retreat Experience 4"
            />
            <img
              className="banner-img"
              src={MEDIA.retreat19}
              alt="R3 Counseling Retreat Experience 5"
            />
          </div>
        </div>
      </section>
      
      <section className="services-section" aria-label="Our Services">
        <h2>Empowerment | Support | Alliance | Safety</h2>
        <p>
          Are you ready to thrive and come alive, while continuing on your
          journey? If so, I am here to align with you, become your ally, explore
          your journey through your lens in a safe, non-judgmental, relaxed and
          supportive environment. Let's release pent up trauma, restore overall
          wellbeing: mind, body, and soul. Allow me to help you become empowered
          to redefine your personal transformation.
        </p>
      </section>
      
      <section className="insurance-section" aria-label="Accepted Insurance">
        <div className="banner">
          <div className="banner-container">
            <img
              className="banner-img"
              src={MEDIA.unitedHealthcareLogo}
              alt="United Healthcare accepted insurance logo"
            />
            <img
              className="banner-img"
              src={MEDIA.anthemLogo}
              alt="Anthem Blue Cross Blue Shield accepted insurance logo"
            />
            <img
              className="banner-img"
              src={MEDIA.oscarLogo}
              alt="Oscar Health accepted insurance logo"
            />
            <img
              className="banner-img"
              src={MEDIA.aetnaLogo}
              alt="Aetna accepted insurance logo"
            />
            <img
              className="banner-img"
              src={MEDIA.cignaLogo}
              alt="Cigna accepted insurance logo"
            />
            <img 
              className="banner-img" 
              src={CareCreditLogo} 
              alt="Care Credit payment option"
            />
          </div>
        </div>
      </section>
      
      <section className="cta-section" aria-label="Call to Action">
        <h2 style={{ textAlign: "center" }}>Take your voice back. Be you.</h2>
        <div className="hero-cta-row">
          <Link className="home-cta-button" to="/offerings">
            Learn if an Intensive is Right for You
          </Link>
        </div>
      </section>
      
      <div
        id="groupIntensiveModal"
        className="modal"
        style={{ display: modalOpen ? "block" : "none" }}
        onBlur={() => setModalOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="home-modal-content">
          <div className="close-container">
            <span className="close" onClick={closeModal} aria-label="Close modal">
              &times;
            </span>
          </div>
          <h3 id="modalTitle" className="visually-hidden">Promotional Offers</h3>
          <ImageCarousel className={"home-img"} images={images} />
        </div>
      </div>
    </main>
  );
}
