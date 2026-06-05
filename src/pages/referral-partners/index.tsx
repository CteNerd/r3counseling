import { Link } from "react-router-dom";
import "./referral-partners.css";

export default function ReferralPartners() {
  return (
    <main className="referral-page">
      <h1>Referral Partners</h1>
      <p>
        R3 Counseling partners with physicians, nurse practitioners,
        psychiatrists, wellness providers, coaches, and college counseling
        centers to support adults with unresolved trauma who feel stuck despite
        prior treatment.
      </p>

      <section className="referral-section">
        <h2>Who to Refer</h2>
        <ul>
          <li>Clients who feel stuck despite ongoing therapy</li>
          <li>Clients with unresolved trauma and emotional reactivity</li>
          <li>Clients with limited time for weekly therapy</li>
          <li>Clients who need a focused treatment model</li>
        </ul>
      </section>

      <section className="referral-section">
        <h2>What R3 Offers</h2>
        <ul>
          <li>EMDR Intensives</li>
          <li>Individual Therapy</li>
          <li>Group Clinical Supervision</li>
          <li>Trauma-Conscious Yoga</li>
          <li>Somatic Practices</li>
          <li>IFS-Informed Care</li>
          <li>Expressive Therapies</li>
          <li>Community Wellness Programs</li>
        </ul>
      </section>

      <section className="referral-section">
        <h2>Referral Pathway</h2>
        <p>
          Share your referral details and treatment goals. We will complete a
          consultation and match the client to the most appropriate care path.
        </p>
        <div className="referral-cta-row">
          <Link className="referral-button" to="/contact">
            Refer a Client
          </Link>
          <Link className="referral-button" to="/offerings">
            Explore EMDR Intensives
          </Link>
        </div>
      </section>
    </main>
  );
}
