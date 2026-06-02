import { Link } from "react-router-dom";
import "./community-wellness.css";

export default function CommunityWellness() {
  return (
    <main className="community-wellness-page">
      <h1>Community Wellness Offerings</h1>
      <p>
        R3 Counseling offers trauma-conscious wellness experiences designed for
        schools, organizations, and community spaces. These offerings reinforce
        whole-person healing beyond the therapy room.
      </p>

      <section className="community-wellness-section">
        <h2>Featured Offerings</h2>
        <ul>
          <li>Trauma-Conscious Yoga</li>
          <li>Wellness Workshops</li>
          <li>Community Healing Events</li>
          <li>College-Based Programming</li>
          <li>Business Wellness Partnerships</li>
        </ul>
      </section>

      <section className="community-wellness-section">
        <h2>Why It Matters</h2>
        <p>
          Community wellness offerings help individuals regulate stress, improve
          mind-body awareness, and build sustainable practices that support
          emotional wellbeing in everyday life.
        </p>
      </section>

      <div className="community-wellness-cta-row">
        <Link className="community-wellness-button" to="/contact">
          Book a Community Wellness Consultation
        </Link>
        <Link className="community-wellness-button" to="/offerings">
          Explore Related Services
        </Link>
      </div>
    </main>
  );
}
