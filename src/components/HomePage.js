import React from 'react';
import './HomePage.css';
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the Carousel CSS

function HomePage() {
  return (
    <div className="home-page">
      <div className="intro">
        <h1>Welcome to Gujju Market</h1>
        <p>---  Hot Selling Product  ---</p>
        <p>---  Free Delivery in India  ---</p>
      </div>
      <div className="slider-container">
      <Carousel autoPlay={true} infiniteLoop={true} interval={4000}>
          <div>
            <img src="./images/foot_masager/img1.jpg" alt="Slide 1" />
            <p className="legend">Foot Massager</p>
          </div>
          <div>
            <img src="./images/image2.jpg" alt="Slide 2" />
            <p className="legend">Lunch Box</p>
          </div>
        </Carousel>

      </div>
    </div>
  );
}

export default HomePage;
