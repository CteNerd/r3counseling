import { useEffect, useState } from "react";
import SelfLoveExperience2026 from "../../assets/images/2026/IMG_0201.jpeg";
import HolidaySeasonSupportSpace from "../../assets/images/2025/HolidaySeasonSupportSpace.png";
import PoliticalClimateSupportSpace from "../../assets/images/2025/PoliticalClimateSupportSpace.png";
import ValentinesDaySelfLove2025 from "../../assets/images/2025/Valentines_SelfLove.png";
import parkFreeWellnessBooster from "../../assets/images/Park Free Wellness Booster.png";
import bookClub from "../../assets/images/Book Club Thema Bryant.png";
import NatureAndNurture from "../../assets/images/2025/NatureAndNurture.png";
import ColumbiaCountyAmphitheatre from "../../assets/images/2025/ColumbiaCountyAmphitheatre.png";
import "./events.css";

const QTBIPOC_ADHD_IMAGE_URL =
  "https://github.com/user-attachments/assets/c6cf9222-94b7-4157-aa3b-8b0860d5549a";

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  const openModal = (image: string, alt: string) => {
    setSelectedImage(image);
    setSelectedAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    setSelectedAlt("");
  };

  useEffect(() => {
    // Bi-weekly Wednesday sessions 6:30–7:45 pm EDT (UTC-4) from April 1 to June 10
    const sessionDates = [
      ["2026-04-01T18:30:00-04:00", "2026-04-01T19:45:00-04:00"],
      ["2026-04-15T18:30:00-04:00", "2026-04-15T19:45:00-04:00"],
      ["2026-04-29T18:30:00-04:00", "2026-04-29T19:45:00-04:00"],
      ["2026-05-13T18:30:00-04:00", "2026-05-13T19:45:00-04:00"],
      ["2026-05-27T18:30:00-04:00", "2026-05-27T19:45:00-04:00"],
      ["2026-06-10T18:30:00-04:00", "2026-06-10T19:45:00-04:00"],
    ];

    const sharedProps = {
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        url: "https://r3counseling.com/events",
      },
      organizer: {
        "@type": "Organization",
        name: "Release Restore Redefine Counseling",
        url: "https://r3counseling.com",
      },
      performer: {
        "@type": "Person",
        name: "Nicole Thoms Fuentes",
        jobTitle: "Associate Licensed Therapist",
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "25",
        highPrice: "75",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://r3counseling.com/events",
        validFrom: "2026-03-01",
      },
    };

    const eventSchema = {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      name: "QTBIPOC ADHD Support Group",
      description:
        "A virtual support group for QTBIPOC adults with ADHD. Join a supportive community led by Nicole Thoms Fuentes, Associate Licensed Therapist. Bi-weekly group meets Wednesdays 6:30–7:45pm EDT, April 1st to June 10th. Pay-what-you-can ($25–$75/meeting). Open to all states.",
      image: QTBIPOC_ADHD_IMAGE_URL,
      startDate: sessionDates[0][0],
      endDate: sessionDates[sessionDates.length - 1][1],
      audience: {
        "@type": "Audience",
        audienceType:
          "QTBIPOC adults 18+ with ADHD, queer and trans people of color",
      },
      keywords:
        "QTBIPOC ADHD support group, virtual ADHD support, Nicole Thoms Fuentes therapist, queer bipoc support group, trans BIPOC mental health, ADHD therapy virtual, QTBIPOC wellness",
      subEvent: sessionDates.map(([start, end]) => ({
        "@type": "Event",
        name: "QTBIPOC ADHD Support Group",
        startDate: start,
        endDate: end,
        ...sharedProps,
      })),
      ...sharedProps,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "qtbipoc-adhd-event-schema";
    script.text = JSON.stringify(eventSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("qtbipoc-adhd-event-schema");
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="events-row">
        <article
          className="events-col"
          onClick={() =>
            openModal(
              QTBIPOC_ADHD_IMAGE_URL,
              "QTBIPOC ADHD Support Group virtual event flyer – facilitated by Nicole Thoms Fuentes, Associate Licensed Therapist. Wednesdays 6:30–7:45pm ET, bi-weekly, April 1 to June 10. $25–$75 pay-what-you-can. Open to queer/trans + BIPOC adults 18+, all states welcome."
            )
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openModal(
                QTBIPOC_ADHD_IMAGE_URL,
                "QTBIPOC ADHD Support Group virtual event flyer – facilitated by Nicole Thoms Fuentes, Associate Licensed Therapist. Wednesdays 6:30–7:45pm ET, bi-weekly, April 1 to June 10. $25–$75 pay-what-you-can. Open to queer/trans + BIPOC adults 18+, all states welcome."
              );
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="QTBIPOC ADHD Support Group – virtual event, Wednesdays 6:30–7:45pm ET, April 1 to June 10, facilitated by Nicole Thoms Fuentes. Press Enter or Space to view full flyer."
          itemScope
          itemType="https://schema.org/Event"
        >
          <meta itemProp="name" content="QTBIPOC ADHD Support Group" />
          <meta
            itemProp="startDate"
            content="2026-04-01T18:30:00-04:00"
          />
          <meta
            itemProp="endDate"
            content="2026-06-10T19:45:00-04:00"
          />
          <img
            src={QTBIPOC_ADHD_IMAGE_URL}
            alt="QTBIPOC ADHD Support Group virtual event flyer – facilitated by Nicole Thoms Fuentes, Associate Licensed Therapist. Wednesdays 6:30–7:45pm ET, bi-weekly, April 1 to June 10. $25–$75 pay-what-you-can. Open to queer/trans + BIPOC adults 18+, all states welcome."
            itemProp="image"
          />
        </article>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              SelfLoveExperience2026,
              "The Self Love Experience 2026 - women's wellness event with gentle movement, sound, and reflection at A Better Today Wellness Studio"
            )
          }
        >
          <img
            src={SelfLoveExperience2026}
            alt="The Self Love Experience 2026 - women's wellness event with gentle movement, sound, and reflection at A Better Today Wellness Studio"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              HolidaySeasonSupportSpace,
              "Holiday Season Support Space - mental health counseling and wellness support during the holidays"
            )
          }
        >
          <img
            src={HolidaySeasonSupportSpace}
            alt="Holiday Season Support Space - mental health counseling and wellness support during the holidays"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              PoliticalClimateSupportSpace,
              "Political Climate Support Space - counseling and support for navigating political stress"
            )
          }
        >
          <img
            src={PoliticalClimateSupportSpace}
            alt="Political Climate Support Space - counseling and support for navigating political stress"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              ColumbiaCountyAmphitheatre,
              "Columbia County Amphitheatre mental health awareness event and counseling services"
            )
          }
        >
          <img
            src={ColumbiaCountyAmphitheatre}
            alt="Columbia County Amphitheatre mental health awareness event and counseling services"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              NatureAndNurture,
              "Nature and Nurture 2025 wellness retreat and counseling event"
            )
          }
        >
          <img
            src={NatureAndNurture}
            alt="Nature and Nurture 2025 wellness retreat and counseling event"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              ValentinesDaySelfLove2025,
              "Valentine's Day Self Love 2025 therapy and wellness workshop"
            )
          }
        >
          <img
            src={ValentinesDaySelfLove2025}
            alt="Valentine's Day Self Love 2025 therapy and wellness workshop"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              parkFreeWellnessBooster,
              "Park Free Wellness Booster community mental health event"
            )
          }
        >
          <img
            src={parkFreeWellnessBooster}
            alt="Park Free Wellness Booster community mental health event"
          />
        </div>
        <div
          className="events-col"
          onClick={() =>
            openModal(
              bookClub,
              "Book Club Thema Bryant therapy and healing book discussion group"
            )
          }
        >
          <img
            src={bookClub}
            alt="Book Club Thema Bryant therapy and healing book discussion group"
          />
        </div>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal} role="dialog" aria-modal="true" aria-label={selectedAlt}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="close" onClick={closeModal} aria-label="Close">
              &times;
            </button>
            <img src={selectedImage!} alt={selectedAlt} />
          </div>
        </div>
      )}
    </div>
  );
}
