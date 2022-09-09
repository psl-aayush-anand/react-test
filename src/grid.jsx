import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MobileListing, { MyCard } from "./Cards/Card";

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>
          <MobileListing />
        </Col>
        </Row>
    </Container>
  );
}

export default ContainerExample;
