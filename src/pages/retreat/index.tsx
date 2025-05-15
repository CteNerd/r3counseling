import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./retreat.css";

export default function Retreat() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Add Schema.org Event markup for retreat events
  useEffect(() => {
    const retreatSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "R3 Counseling Retreats",
      "description": "Holistic Healing retreats for women to rest, restore, and reclaim their wholeness, time, and self care.",
      "image": "https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0299.JPG",
      "url": "https://r3counseling.com/retreat",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "organizer": {
        "@type": "Person",
        "name": "Tiffany Luke",
        "url": "https://r3counseling.com/about"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://r3counseling.com/retreat",
        "availability": "https://schema.org/InStock"
      },
      "location": {
        "@type": "Place",
        "name": "Retreat Location",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Martinez",
          "addressRegion": "GA"
        }
      }
    };
    
    // Create and append the script element to the document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(retreatSchema);
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(
        "h1, h2, h3, h4, h5, p, ul, li"
      );
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(
          "h1, h2, h3, h4, h5, p, ul, li"
        );
        elements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <div id="r3">
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0299.JPG)`,
        }}
      >
        <div className="hero-text">Rest. Restore. Reclaim.</div>
      </div>
      <div className="retreat-links">
        <h1>Our Retreats</h1>
        <ul>
          <li>
            <Link to="/retreat/still-away" className="new-retreat">
              <h4>Still Away Retreat (New 2025!)</h4>
            </Link>
          </li>
          <li>
            <Link to="/retreat/pause">
              <h4>Pause Retreat</h4>
            </Link>
          </li>
        </ul>
      </div>
      <div className="container" ref={containerRef}>
        <div className="image-side">
          <div>
            <img src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat_Host_v2.jpg" />
          </div>
        </div>
        <div className="text-side">
          <h1 className="transition-text">Your Host</h1>
          <p className="transition-text">
            Hey Y’all, I‘m Tiffany. I am an ambitous woman juggling the roles of
            a wife, a nurturing mother to three amazing kiddos, and a
            multipreneur. For years, I threw myself into caring for others,
            often neglecting my own well-being in the process. Despite my
            dedication, I began feeling drained, disconnected, and even
            resentful at times. I did not realize that you can not pour from an
            empty cup. On my journey to self-discovery and revitalization,
            holistic practices became transformative. Through movement, I found
            a way to reconnect with my body, create space for healing, and
            deepen my love for self. I explored and rediscovered my innate
            connection to the power of sound, meditation, and the usefulness for
            healing each layer of my being. Of course, as I intentionally moved
            towards embodiment of these practices, I naturally wanted to share
            their transformative power with others. Recognizing the power of
            PAUSE, intentionality, and embracing holistic healing, I am
            passionate about sharing this journey to guide others to their own
            path to rest, restore, and reclaim their wholeness, time, and self
            care.
          </p>
        </div>
      </div>
    </div>
  );
}
