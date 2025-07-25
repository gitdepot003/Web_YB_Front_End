import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import award1 from '../../images/award1.jpg';
import award2 from '../../images/award2.jpg';
import award3 from '../../images/award3.jpg';
import award4 from '../../images/award4.jpg';
import '../../css/Awards.css'
const AwardsSection = () => {
  const awardsData = [
    {
      image: award1,
      title: "Gold Medal XR Hackathon",
      description: "Gold medal winners in XR - National level WAVES XR Creator Hackathon under Create in India challenge organized by Ministry of Information and Broadcasting, GOI."
    },
    {
      image: award2,
      title: "Innovation in Product Award",
      description: "Winner - Innovation in Product by e-Uttar Pradesh Summit 2024, received from Shri Sunil Kumar Sharma, Hon'ble Minister, IT & Electronics, Uttar Pradesh."
    },
    {
      image: award3,
      title: "1st Prize Open Challenge Program",
      description: "1st Prize Winner - Open Challenge Program in AR and VR #OCPARVR 3.0 by IIT Bhubaneshwar, STPI, the Odisha Government, Startup Odisha, and the Ministry of Electronics and Information Technology."
    },
    {
      image: award4,
      title: "Runner up Game Jam IIT Jodhpur",
      description: "Runner up - Game Jam at IIT Jodhpur for year 2024 and 2025."
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <section id="awards" className="awards-area">
      <div className="container">
        <div className="section-title">
          <h2>Awards & Recognitions</h2>
          <p>Celebrating our achievements and excellence in innovation and technology.</p>
        </div>
        
        <div className="awards-slider-container">
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="awards-carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="awards-carousel-item"
            centerMode={false}
            minimumTouchDrag={80}
            shouldResetAutoplay
            rewind={false}
            rewindWithAnimation={false}
            sliderClass="awards-slider"
            slidesToSlide={2}
            swipeable={false}
          >
            {awardsData.map((award, index) => (
              <div className="award-item" key={index}>
                <div className="award-img-container">
                  <img src={award.image} alt={award.title} />
                </div>
                <p>{award.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;