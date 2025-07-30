import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import award1 from '../../images/award1.jpg';
import award2 from '../../images/award2.jpg';
import award3 from '../../images/award3.jpg';
import award4 from '../../images/award4.jpg';

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
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        onClick={() => onClick()}
        className={`mx-1 w-3 h-3 rounded-full transition-all duration-300 ${active ? 'bg-black w-6' : 'bg-gray-300'}`}
        aria-label={`Go to slide`}
      />
    );
  };
const spacingX = "mb-16";
  return (
  <section id="awards" className="pt-12 bg-white"> {/* 1) Top spacing */}
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Heading section */}
      <div className="text-center mb-12"> {/* 2) Space below heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Awards & Recognitions
        </h2>
      </div>
      
      {/* Carousel section */}
{/* Carousel section */}
<div className="relative">
  <Carousel
    responsive={responsive}
    arrows={false}
    showDots={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="transform 500ms ease-in-out"
    transitionDuration={500}
    containerClass="pb-24" // Push bottom space for dots
    itemClass="px-4"
    centerMode={false}
    shouldResetAutoplay
    rewind={false}
    slidesToSlide={1}
    swipeable={true}
    draggable={true}
    customDot={<CustomDot />}
    dotListClass="absolute bottom-0 w-full flex justify-center mt-4 mb-10" 
  >
    {awardsData.map((award, index) => (
      <div
        key={index}
        // className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row h-auto md:h-80 transition-all duration-300 hover:shadow-lg mx-2"
          className="rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-80 transition-all duration-300 mx-2"

      >
        <div className="md:w-2/5 p-6 flex items-center justify-center">
          <img
            src={award.image}
            alt={award.title}
            className="h-48 md:h-64 w-auto object-contain rounded-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-3/5 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {award.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{award.description}</p>
        </div>
      </div>
    ))}
  </Carousel>
</div>


    </div>
    
    <div className={`${spacingX}`}></div>
  </section>
);

};

export default AwardsSection;