import React, { useEffect, useRef } from "react";
import "./retreat.css";

export default function StillAwayRetreat() {
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

  return (
    <div id="r3">
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/still-away-banner.jpeg)`,
        }}
      >
        <div className="hero-text">Rest. Restore. Reclaim.</div>
      </div>
      <div ref={containerRef}>
        <h1 className="transition-text">
          Still Away Holistic Healing Day Retreat
        </h1>
        <p className="transition-text">
          Still Away Holistic Healing retreat is for women to
          rest, restore, and reclaim their wholeness, time, and self care. We
          understand that you are a high achieving woman, constantly juggling
          the demands of family, career, and life. You may find yourself feeling
          burnt-out, with little time to pour into yourself. The daily grind can
          be overwhelming, leaving little time for self care, authenticity, and
          rejuvenation. It is time to reset, recenter, and cultivate the balance
          you have envisioned. During this day retreat we will, awaken your
          innate need to care for yourself, begin to restore yourself, while
          surrounded by safe and supportive community. It is okay to give
          yourself permission to Still Away.
        </p>
        {/* <div className="container"> */}
        <div className="coming-soon-container">
          <h2 className="transition-text">
            Still Away Day Retreat is for the women
          </h2>
        </div>
        <div className="container">
          <div className="text-side">
            <ul className="transition-text">
              <li className="transition-text">
                Who are with limited time for self
              </li>
              <li className="transition-text">
                Who are facing burnout and are ready to take off the mask
              </li>
              <li className="transition-text">
                Who feel pressure to appear to have it all together while
                navigating home, work, and other life demands
              </li>
              <li className="transition-text">
                Who have difficulty taking time to pause to cultivate
                relaxation, self-care, and community
              </li>
              <li className="transition-text">
                Who are ready to take time to come back to themselves
              </li>
            </ul>
            <div className="container">
              <div className="text-side">
                <h3 className="transition-text">Still Away Includes:</h3>
                <ul className="transition-text">
                  <li className="transition-text">
                    Day accommodations on 18 acres of serene property, including
                    indoor/outdoor living space, jacuzzi, fire pit, walking
                    paths, pond, and lake access
                  </li>
                  <li className="transition-text">
                    Onsite breakfast, lunch, and snacks included
                  </li>
                  <li className="transition-text">
                    All Holistic Healing practices and activities-Trauma
                    Conscious Yoga, Sound Meditation, Breath Work, Sister
                    Circles, Still Away Goodie Bag
                  </li>
                  <li className="transition-text">Bonuses: Express Facials and</li>
                </ul>

                <h3 className="transition-text">Sample Retreat Schedule:</h3>
                <ul className="transition-text">
                  <li className="transition-text">
                    8:00 AM - Arrival and Welcome
                  </li>
                  <li className="transition-text">
                    9:00 AM - Yoga
                  </li>
                  <li className="transition-text">
                    10:30 AM - Sound Meditation
                  </li>
                  <li className="transition-text">12:00 PM - Lunch</li>
                  <li className="transition-text">1:00 PM - Breath Work</li>
                  <li className="transition-text">2:30 PM - Sister Circles</li>
                  <li className="transition-text">4:00 PM - Free Time</li>
                  <li className="transition-text">5:00 PM - Closing Circle</li>
                </ul>
              </div>
              <div className="image-side" style={{ height: "60vh" }}>
                <img
                  src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/still-away-porch.jpeg"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="container">
              <div className="image-side" style={{ height: "40vh" }}>
                <img
                  src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/still-away-flower.jpeg"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="text-side">
                <h3 className="transition-text">Cost:</h3>
                <p className="transition-text">$347 per person</p>
                <h3 className="transition-text">Payment:</h3>
                <p className="transition-text">
                  Payment can be made via credit card or Stripe.
                </p>
              </div>
              <div className="image-side" style={{ height: "40vh" }}>
                <img
                  src="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/retreat/still-away-stripe-qr.png"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <h3 className="transition-text">Frequently Asked Questions:</h3>
            <ul className="transition-text">
              <li className="transition-text">
                <strong>What is the location of the retreat?</strong> Appling,
                GA 30802. Address will be provided to the email address used at
                booking.
              </li>
              <li className="transition-text">
                <strong>Is parking available?</strong> Yes, parking is available
                on-site. No cost.
              </li>
              <li className="transition-text">
                <strong>Can I bring swimwear for the jacuzzi?</strong> Of
                course!! You will have access to private bedrooms and bathrooms,
                if needed to change your clothing.
              </li>
              <li className="transition-text">
                <strong>What should I bring?</strong> Yoga mat, swim wear (if
                you desire), comfy shoes, a cozy blanket.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
