import React, { useEffect } from "react";
import "./about.css";

interface Props {
  isMobile: boolean;
}

export default function AboutMe(props: Props) {

  return (
    <div>
      <h1>About Me</h1>
      <h4>
        Meet the Tiffany Luke, Licensed Professional Counselor, EMDR trained
        provider{" "}
      </h4>
      <p>Hey, hey! I’m Tiffany.</p>
      <p>
        I am a Licensed Professional Counselor with over 15 years of clinical
        experience. I am trauma informed, EMDR trained provider and I’m also
        known as The Cookie Counselor. Yep, I bake to release stress, ground
        myself and enrich my creative sweets passion.
      </p>
      <div>
        <a href="https://www.thecookierelease.com">
          <img
            className="body-img-right"
            src="https://img1.wsimg.com/isteam/ip/0b3c87cc-17d5-411c-a183-f13fcfb11802/TCR%20Logo%20Horizontal.jpg/:/rs=h:208/qt=q:95"
          />
        </a>
        <p>
          My hobby turned small business,{" "}
          {<a href="https://thecookierelease.com">The Cookie Release</a>},
          allows me the opportunity to sow seeds and enhance my community’s
          optimal health. How? I dedicate a portion of all of my sales proceeds
          towards resources for my clients here – grounding tools and workshops.
        </p>
      </div>
      <p>
        I am here to empower, support and align, while being trustworthy,
        relatable, consistent and professional. I have had the privilege of
        serving in multiple clinical capacities throughout my career. I am
        passionate and committed to helping individuals heal from individual
        sexual trauma, explore traumatic experiences, anxiety, self-esteem,
        depression and grief.
      </p>
      <p>
        While being culturally humble, I incorporate Cognitive Behavior Therapy,
        Somatic Therapy, Mindfulness Cognitive Therapy, in a person-centered
        environment. During your journey, you deserve to be supported as you
        release, restore and redefine!
      </p>
      <div style={{display: props.isMobile ? "block" : "flex"}}>
        <div className="journey-container-img-container" style={{textAlign: props.isMobile ? "center" : "inherit"}}>
          <img
            className="journey-container-img"
            src="https://wellcall-app-cdk.s3.amazonaws.com/tiff-profile.jpeg"
          />
        </div>
        <div className={ props.isMobile ? "col-100" : "col-66"}>
          <h4>Professional Journey at a Glance</h4>
          <div className="professional-accolades-list">
            <ul>
              <li>
                Licensed Professional Counselor: Georgia Composite Board of
                Professional Counselors, Social Workers, and Marriage &amp;
                Family Therapist
              </li>
              <li>
                EMDR Institute trained provider (EMDRIA certification in
                progress)
              </li>
              <li>
                Master of Science concentration Community Counseling: Columbus
                State University
              </li>
              <li>
                Bachelor of Science concentration Psychology-Wesleyan College
              </li>
              <li>
                Over 15 years of clinical experience:
                <ul>
                  <li>
                    Management of an Acute Psychiatric Intake Team located in
                    the ER
                  </li>
                  <li>Outpatient trauma counselor </li>
                  <li>Acute psychiatric unit counselor</li>
                  <li>Grief &amp; loss counselor</li>
                  <li>Residential unit counselor </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
