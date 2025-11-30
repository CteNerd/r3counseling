import React, { useState } from "react";
import "./home.css";
import ImageCarousel from "../../components/imageCarousel/imageCarousel";
import PshycologyTodayLogo from "../../assets/logos/psychologytoday-13.png";
import CareCreditLogo from "../../assets/logos/CareCredit.png";
import { ImageMeta } from "../../types/models";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const images: ImageMeta[] = [
    {
      imageUrl:
        "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Home-Rocks.png",
      landingPageUrl:
        "https://cdn.forms-content.sg-form.com/58a2c899-c0c0-11ed-b4f5-060e8f5a62bc",
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
      "name": "Release Restore Redefine Counseling - Mental Health Services in Martinez, GA",
      "description": "Professional counseling services offering EMDR therapy, holistic healing, and wellness retreats in Martinez, GA.",
      "url": "https://r3counseling.com/",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Release Restore Redefine Counseling",
        "image": "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/R3+Counseling+Logo+-+Final-05.jpeg",
        "telephone": "(706) 750-8906",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4210 Columbia Rd",
          "addressLocality": "Martinez",
          "addressRegion": "GA",
          "postalCode": "30907"
        }
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
            src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/tiff-swinging.jpeg"
            alt="Tiffany Luke, founder of R3 Counseling, embodying freedom and joy"
            loading="eager"
          />
        </div>
        <h1>Let's Come Alive</h1>
        <p>
          Are you emotionally constipated? Are you trapped in your mask? Is your
          plate overflowing with life's demands? Are you noticing increased
          anxiety or stress? Are your past wounds impacting your present
          relationships? Do you find yourself numbing the pain to cope with your
          reality? Are you surrounded by 'your team' but still suffering in
          silence, feeling unheard, failing to be seen or fully supported?
        </p>
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
              rel="external nofollow"
              aria-label="Clinicians of Color Profile"
            >
              <img
                src="https://www.cliniciansofcolor.org/wp-content/uploads/2021/06/cocbdge-e1624452955918.png"
                alt="Clinicians of Color Badge - Tiffany Luke"
              />
            </a>
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/EMDR+Certified+Therapist+%E2%80%A2+Tiffany+Luke+%E2%80%A2+EMDR+International+Association+Badge.png"
              alt="EMDR Certified Therapist Badge - Tiffany Luke - EMDR International Association"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/TFBG-logo.jpg"
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
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-1.png"
              alt="R3 Counseling Retreat Experience 1"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-12.png"
              alt="R3 Counseling Retreat Experience 2"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-7.png"
              alt="R3 Counseling Retreat Experience 3"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-9.png"
              alt="R3 Counseling Retreat Experience 4"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-19.png"
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
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/united-healthcare-logo.png"
              alt="United Healthcare accepted insurance logo"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/anthem-bcbs-logo-removebg.png"
              alt="Anthem Blue Cross Blue Shield accepted insurance logo"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/oscar-removebg.png"
              alt="Oscar Health accepted insurance logo"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/aetna_purple.jpg"
              alt="Aetna accepted insurance logo"
            />
            <img
              className="banner-img"
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Cigna-Logo.png"
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
        <h2 style={{ textAlign: "center" }}>Take your voice back. BE YOU!</h2>
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
