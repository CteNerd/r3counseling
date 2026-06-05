import { Link } from "react-router-dom";
import "./clinical-supervision.css";

export default function ClinicalSupervision() {
  return (
    <main className="clinical-supervision-page">
      <h1>Clinical Supervision</h1>
      <p>
        Clinical supervision at R3 Counseling supports trauma-focused growth for
        associate licensed clinicians and therapists who want practical,
        integrative support.
      </p>

      <section className="clinical-supervision-section">
        <h2>Who It Is For</h2>
        <ul>
          <li>Associate licensed clinicians</li>
          <li>Therapists seeking trauma-focused development</li>
          <li>Clinicians interested in integrating EMDR, Holistic Modalities, IFS, and Somatics</li>
          <li>Providers seeking consultation and clinical support</li>
        </ul>
      </section>

      <section className="clinical-supervision-section">
        <h2>What You Can Expect</h2>
        <ul>
          <li>Trauma-informed case conceptualization support</li>
          <li>Integrative treatment planning guidance</li>
          <li>Group supervision opportunities</li>
          <li>Professional growth and private practice development focus</li>
        </ul>
      </section>

      <div className="clinical-supervision-cta-row">
        <Link className="clinical-supervision-button" to="/contact">
          Learn About Clinical Supervision
        </Link>
        <Link className="clinical-supervision-button" to="/offerings">
          View Related Offerings
        </Link>
      </div>
    </main>
  );
}
