import { Carousel, Image } from "react-bootstrap";

export function About() {
  return (
    <div className="text-center">
      <h1>Our Products</h1>
      <hr />

      <Carousel
        className="mx-auto"
        indicators={false}
        style={{
          width: "70vw",
          height: "70vh",
        }}
      >
        <Carousel.Item
          style={{
            objectFit: "contain",
          }}
        >
          <Image src="./blackberry.jpg" fluid />
          <Carousel.Caption className="bg-dark p-2 text-white bg-opacity-25 mb-4">
            <h3>Blackberries</h3>
            <p>Excellent source of vitamin C, vitamin K and manganese.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            objectFit: "contain",
          }}
        >
          <Image src="./blueberry.jpg" fluid />
          <Carousel.Caption className="bg-info p-2 text-white bg-opacity-25 mb-4">
            <h3>Blueberries</h3>
            <p>One of the best natural sources of antioxidants.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            objectFit: "contain",
          }}
        >
          <Image src="./cherry.jpg" fluid />
          <Carousel.Caption className="bg-danger p-2 text-white bg-opacity-25 mb-4">
            <h3>Cherries</h3>
            <p>
              Provide vitamin C, antioxidants, and anti-inflammatory compounds.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            objectFit: "contain",
          }}
        >
          <Image src="./raspberry.jpg" fluid />
          <Carousel.Caption className="bg-danger p-2 text-white bg-opacity-25 mb-4">
            <h3>Raspberries</h3>
            <p>Contain high amounts of antioxidants and phytonutrients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            objectFit: "contain",
          }}
        >
          <Image src="./strawberry.jpg" fluid />
          <Carousel.Caption className="bg-danger p-2 text-white bg-opacity-25 mb-4">
            <h3>Strawberries</h3>
            <p>
              Are a natural source of important nutrients that support heart
              health.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
