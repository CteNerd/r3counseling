import React, { useEffect, useRef } from "react";
import "./retreat.css";

export default function PauseRetreat() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const widgetContainer = document.getElementById("widget");

    if (widgetContainer) {
      widgetContainer.innerHTML = `<!-- Start SimplePractice Appointment-Request Widget Embed Code -->
      <style>.spwidget-button-wrapper{text-align: center}.spwidget-button{display: inline-block;padding: 12px 24px;color: #fff !important;background: #de6a26;border: 0;border-radius: 4px;font-size: 16px;font-weight: 600;text-decoration: none}.spwidget-button:hover{background: #d15913}.spwidget-button:active{color: rgba(255, 255, 255, .75) !important;box-shadow: 0 1px 3px rgba(0, 0, 0, .15) inset}</style>
      <div class="spwidget-button-wrapper"><a href="https://tiffany-luke.clientsecure.me" class="spwidget-button" data-spwidget-scope-id="b429046b-2ff3-4502-9bc6-451911b33ad0" data-spwidget-scope-uri="tiffany-luke" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>Request Appointment</a></div>
      <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
      <!-- End SimplePractice Appointment-Request Widget Embed Code -->`;
    }
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
      <div ref={containerRef}>
        <h1 className="transition-text">
          PAUSE-Boutique Holistic Healing Retreats
        </h1>
        <p className="transition-text">
          PAUSE: Holistic Healing retreats for high achieving women to rest,
          restore, and reclaim their wholeness, time, and self care. We
          understand that you are a high achieving woman, constantly juggling
          the demands of family, career, and life. You may find yourself feeling
          burnt-out, with little time to pour into yourself. The daily grind can
          be overwhelming, leaving little time for self care, authenticity, and
          rejuvenation. It is time to reset, recenter, and cultivate the balance
          you have envisioned. During this retreat we will, awaken your innate
          need to care for yourself, begin to restore yourself, while surrounded
          by safe and supportive community. You are worthy of the PAUSE.
        </p>

        <div className="coming-soon-container">
          <h2 className="transition-text">
            4 Women. Intimate. Individualized. PAUSE.
          </h2>
        </div>

        <div className="container">
          <div className="text-side">
            <h3 className="transition-text">Pause Retreat is for the women</h3>
            <ul className="transition-text">
              <li className="transition-text">
                Who are high achievers with limited time for self
              </li>
              <li className="transition-text">
                Who are facing burnout and are ready to take off the mask
              </li>
              <li className="transition-text">
                Who feel pressure to appear to have it all together while
                navigating home, work, and other life demands
              </li>
            </ul>

            <h3 className="transition-text">PAUSE Includes:</h3>
            <ul className="transition-text">
              <li className="transition-text">
                Your stay in an Intimate Boutique Style Beach Property
              </li>
              <li className="transition-text">
                All onsite meals included (dietary restrictions can be
                accommodated)
              </li>
              <li className="transition-text">
                All Holistic Healing practices and activities-Trauma Conscious
                Yoga, Sound Meditation, Breath Work, Sister Circles, Fire
                Release Ceremony
              </li>
              <li className="transition-text">
                Bonuses: Pause Welcome Tool Kit, Digital Self Care Journal,
                Access to One-on-One Coaching Add-Ons, Heated Private Pool,
                Beach Accessible Property
              </li>
            </ul>
          </div>
          <div className="image-side">
            <img src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0300.jpg" />
            <a
              href="https://docs.google.com/forms/d/131VPZ5XOYhlt7gOK9dtYN-UYWBNRSUNqrdUcD3lt4tY/edit?ts=6599ccdc"
              target="_blank"
            >
              <button title="Join Retreat">Join Retreat</button>
            </a>
          </div>
        </div>

        <div>
          <h1 className="transition-text">
            Sample Retreat Schedule &quot;Schedule is Subject to Change&quot;
          </h1>
        </div>
        <div className="container">
          <div className="text-side">
            <h5 className="transition-text">
              Friday (Commune, Express, Aware)
            </h5>
            <div>
              <ul className="transition-text">
                <li className="transition-text">Arrive ~ 3 pm</li>
                <li className="transition-text">Dinner</li>
                <li className="transition-text">Sister Circle</li>
                <li className="transition-text">Sound and Meditation</li>
              </ul>
            </div>

            <h5 className="transition-text">
              Saturday (Aware, Release, Clarify)
            </h5>
            <div>
              <ul className="transition-text">
                <li className="transition-text">Breath, Movement, Reflect</li>
                <li className="transition-text">Breakfast</li>
                <li className="transition-text">Integration Pause</li>
                <li className="transition-text">Lunch</li>
                <li className="transition-text">Sister Circle</li>
                <li className="transition-text">Dinner</li>
                <li className="transition-text">Fire and Release</li>
              </ul>
            </div>

            <h5 className="transition-text">Sunday (Integrate and Empower)</h5>
            <div>
              <ul className="transition-text">
                <li className="transition-text">Closing Sister Circle</li>
                <li className="transition-text">Next Steps</li>
                <li className="transition-text">Brunch</li>
                <li className="transition-text">Departure ~ 1pm</li>
              </ul>
            </div>
          </div>
          <div className="image-side">
            <img src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-7.png" />
            <a
              href="https://docs.google.com/forms/d/131VPZ5XOYhlt7gOK9dtYN-UYWBNRSUNqrdUcD3lt4tY/edit?ts=6599ccdc"
              target="_blank"
            >
              <button title="Join Retreat">Join Retreat</button>
            </a>
          </div>
        </div>

        <div className="coming-soon-container">
          <h1 className="transition-text">Accommodations &amp; Cost</h1>

          <div>
            <p className="transition-text">
              $1700 Upstairs Balcony, King bed, Full Bathroom
              <br />
              $1500 Main Floor, Queen, Full Bath Shower Only
              <br />
              $1350 Upstairs Floor, Queen, Shared Bathroom
            </p>
            <p className="transition-text">
              <strong>* $500 Non-Refundable Deposit due upon booking</strong>
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="banner-container">
            <img
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0301.JPG"
              className="banner-img"
            />
            <img
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0496.JPG"
              className="banner-img"
            />
            <img
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0497.JPG"
              className="banner-img"
            />
            <img
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0498.JPG"
              className="banner-img"
            />
            <img
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0502.JPG"
              className="banner-img"
            />
            <img
              src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/IMG_0299.JPG"
              className="banner-img"
            />
          </div>
        </div>

        <div className="coming-soon-container">
          <h1 className="transition-text">
            Available Add on One-on-One Coaching Packages:
          </h1>
          <div>
            <p className="transition-text">
              3-50 minute virtual sessions post retreat - $500
              <br />
              3-50 minute sessions; 1-in person; 2 virtual post retreat - $600
              <br />
              4-50 minute sessions; 2-in person; 2 virtual post retreat - $775
              <br />
            </p>
            <p className="transition-text">
              <strong>
                *One-on-One Coaching Packages must be purchased within 7 days
                from start date of retreat
                <br />
                *Exception: 3-Virtual Post Retreat One-on-One Coaching Package
                available for purchase within 7 days post retreat
                <br />
                *Retreat Accommodations and Coaching Packages are
                non-refundable. The cost for Retreat Accommodations can be
                transferred to future Retreat offerings.
              </strong>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-side">
            <h4 className="transition-text">Not Included</h4>
            <ul className="transition-text">
              <li className="transition-text">Airfare</li>
              <li className="transition-text">Roundtrip airfare transport</li>
              <li className="transition-text">
                Transportation to and from location
              </li>
              <li className="transition-text">Travel Insurance</li>
              <li className="transition-text">
                Optional offsite activities of personal choice
              </li>
              <li className="transition-text">
                Optional offsite food purchases of choice
              </li>
              <li className="transition-text">
                Transportation outside of group activities
              </li>
            </ul>
          </div>
          <div className="image-side">
            <img src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/Retreat-18.png" />
            <a
              href="https://docs.google.com/forms/d/131VPZ5XOYhlt7gOK9dtYN-UYWBNRSUNqrdUcD3lt4tY/edit?ts=6599ccdc"
              target="_blank"
            >
              <button title="Join Retreat">Join Retreat</button>
            </a>
          </div>
        </div>

        <h5 className="transition-text">Frequently asked questions:</h5>
        <div>
          <p className="transition-text">
            Should I book my flight once my application is completed for
            retreat:
            <br />
            <strong>
              No, please wait until you receive confirmation from retreat host
              of ACCEPTANCE into PAUSE
            </strong>
            <br />
            <br />
            Where is closest airport to retreat property:
            <br />
            <strong>Destin-Fort Walton Beach Airport (VPS)</strong>
            <br />
            <br />
            What is the location of retreat property:{" "}
            <strong>Santa Rosa Beach, Florida</strong>
            <br />
            <br />
            What is the estimated cost of the uber ride:{" "}
            <strong>$57-$83</strong>
            <br />
            <br />
            What is the approximate length of time from Airport to Santa Rosa:{" "}
            <strong>47 min or 31.5 miles</strong>
            <br />
            <br />
            Should I obtain Trip Insurance:
            <br />
            <strong>
              Trip Insurance can be independently at your discretion. Here are a
              few sites to consider: Allianz Travel Insurance; Travel Guard;
              Travelers Insurance (These are only suggestions, PAUSE has no
              connection to any of the option insurers to consider)
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
