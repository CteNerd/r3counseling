import { useState } from "react";
import ValentinesDaySelfLove2025 from "../../assets/images/2025/Valentines_SelfLove.png";
import parkFreeWellnessBooster from "../../assets/images/Park Free Wellness Booster.png";
import bookClub from "../../assets/images/Book Club Thema Bryant.png";
import NatureAndNurture from "../../assets/images/2025/NatureAndNurture.png";
import ColumbiaCountyAmphitheatre from "../../assets/images/2025/ColumbiaCountyAmphitheatre.png";
import "./events.css";

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="events-row">
        <div
          className="events-col"
          onClick={() => openModal(ColumbiaCountyAmphitheatre)}
        >
          <img
            src={ColumbiaCountyAmphitheatre}
            alt="Columbia County Amphitheatre mental health awareness event and counseling services"
          />
        </div>
        <div
          className="events-col"
          onClick={() => openModal(NatureAndNurture)}
        >
          <img
            src={NatureAndNurture}
            alt="Nature and Nurture 2025 wellness retreat and counseling event"
          />
        </div>
        <div
          className="events-col"
          onClick={() => openModal(ValentinesDaySelfLove2025)}
        >
          <img
            src={ValentinesDaySelfLove2025}
            alt="Valentine's Day Self Love 2025 therapy and wellness workshop"
          />
        </div>
        <div
          className="events-col"
          onClick={() => openModal(parkFreeWellnessBooster)}
        >
          <img src={parkFreeWellnessBooster} alt="Park Free Wellness Booster community mental health event" />
        </div>
        <div className="events-col" onClick={() => openModal(bookClub)}>
          <img src={bookClub} alt="Book Club Thema Bryant therapy and healing book discussion group" />
        </div>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage!} alt="Selected Event" />
          </div>
        </div>
      )}
    </div>
  );
}
