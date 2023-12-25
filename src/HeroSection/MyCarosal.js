import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <>
  
  
  <div   style={{ display: "flex", justifyContent: "space-between" }}>
<div class="ratio ratio-16x9 pl-2"  style={{width:"49%", maxHeight:"300px"}} >
        <iframe
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
 
    <Carousel style={{ width: "50%", margin: "auto" }}>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          alt="Wild Landscape"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
          alt="Wild Landscape"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          alt="Camera"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          alt="Exotic Fruits"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Add a fourth item here */}
    </Carousel>
    </div>
    </>
  );
};

export default MyCarousel;
