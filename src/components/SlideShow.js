// Slideshow.js
import React, { useState, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    text: 'First Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    text: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    text: 'Third Slide'
  }
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-500 relative h-screen w-full mx-auto overflow-hidden">

{slides.map((image, id) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ${id === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img className="w-full" src={image.url} alt={`Slide ${id + 1}`} />
          <div className="text-xl text-white font-bold absolute left-5 bottom-50 top-[350px] md:top-[350px] lg:top-[450px] right-5 items-center justify-center flex flex-col ">
            {image.text}
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default SlideShow;

