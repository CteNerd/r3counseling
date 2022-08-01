import React from "react";
import "./offerings.css";
import Posters from "./posters.json"

interface Props {
  isMobile: boolean;
}

export default function Offerings(props: Props) {
  var slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n: number) {
    var i;
    var slides = document.getElementsByClassName(
      "mySlides"
    ) as HTMLCollectionOf<HTMLElement>;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3500); // Change image every 3.5 seconds
  }

  function CarouselImages() {
    let content: JSX.Element[] = [];

    Posters.forEach((poster, index) => {
      content.push(
        <div className="mySlides fade session-img">
          {/* <div className="numbertext">{index} / {Posters.length}</div> */}
          <img src={poster.url} className="slide-img" />
          {/* <div className="text">{poster.caption}</div> */}
        </div>
      );
    });

    return <div>{content}</div>;
  }

  return (
    <div>
      <h1>Offerings</h1>
      <div className={"session-img-container"}>
        <CarouselImages />
      </div>
      <div>
        <h2>Individual Therapy</h2>
        <p>
          Let’s talk one-on-one in a safe, non-judgmental, relaxed, and
          supportive environment. Allow me to gain an understanding of your past
          and present experiences through your lens. Let’s explore the impact of
          your emotions and thoughts on present behaviors. Let’s align to
          RELEASE, RESTORE and REDEFINE the next phase of your journey!
        </p>
        <div className="highlight-vid-container">
          <h3>EMDR at a Glance</h3>
          <iframe
            className="highlight-vid"
            src="https://www.youtube.com/embed/Pkfln-ZtWeY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div>
        <h2>Consultation &amp; Training</h2>
        <p>
          R3 is eager to serve the community by providing consulting and
          training to enhance mental health awareness and education. Contact us
          to discuss ways we can help your organization.
        </p>
      </div>
      <div className="coming-soon-container">
        <h3>
          Clinical Supervision and Trauma Conscious Movement Groups: <br />{" "}
          Coming soon!! Winter 2022
        </h3>
      </div>
    </div>
  );
}
