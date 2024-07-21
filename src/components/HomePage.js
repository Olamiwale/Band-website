// Slideshow.js
import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image from '../assets/image.png'

const slides = [
  {
    url: image1,
    location: 'America',
    text: 'The sky turned Blue'
  },
  {
    url: image2,
    location: 'London',
    text: 'London bridge was in awe'
  },
  {
    url: image3,
    location: 'Nigeria',
    text: 'Great people great Nation'
  },
  {
    url: image,
    location: 'Israel',
    text: 'The land of the Lord'
  },
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen">

{slides.map((image, id) => (
        <div key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ${id === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img className="w-full h-screen  " src={image.url} alt={`Slide ${id + 1}`} />

          <div className="text-xl text-white font-bold absolute left-5 bottom-50 top-[500px] md:top-[500px] lg:top-[500px] right-5 items-center justify-center flex flex-col ">
            <p className='text-black'> {image.location}</p>
            <p className='text-black'>{image.text}</p>
          </div>
         
        </div>
      ))}
     
    </div>
  );
};

export default SlideShow;

