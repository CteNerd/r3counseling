import { Col, Image, Row } from "antd";
import parkFreeWellnessBooster from "../../assets/images/Park Free Wellness Booster.png";
import bookClub from "../../assets/images/Book Club Thema Bryant.png";

export default function Events() {
  return (
    <div>
      <h1>Events</h1>
      <Row justify="center">
        <Col xs={24} md={12}>
          <Image src={parkFreeWellnessBooster} />
        </Col>
        <Col xs={24} md={12}>
          <Image src={bookClub} />
        </Col>
      </Row>
    </div>
  );
}
