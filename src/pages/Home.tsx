import { Container, Row, Col, Image, Button, Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Fresh & Tasty Berries All Year Round</h1>
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image src="./about.jpg" fluid rounded />
          </Col>
          <Col sm={5}>
            <h2 className="font-weight-light">Why eating berries?</h2>
            <p className="mt-4">
              Besides the fact that berries are delicious, they are good for
              your body and brain. Berries are one of the best sources of fiber,
              antioxidants, vitamins and phytonutrients.
            </p>
            <Nav.Link to="/store" as={NavLink}>
              <Button variant="dark">Shop now</Button>
            </Nav.Link>
          </Col>
        </Row>
        <Row>
          <Card className="text-center my-5 py-4">
            <Card.Body>
              <Button variant="outline-dark">
                <Nav.Link to="/store" as={NavLink}>
                  &#x2197;&#xfe0e;
                </Nav.Link>
              </Button>
              <h3>Get 15% Off Your First Order </h3>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
