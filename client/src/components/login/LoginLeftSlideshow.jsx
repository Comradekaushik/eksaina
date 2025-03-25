import React from 'react';
import { useState, useEffect } from 'react';
import "./LoginLeftslide.css";

function LoginLeftSlideshow({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };
  // const goToPreviousSlide = () => {
  //   const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  //   setCurrentIndex(prevIndex);
  // };
  // console.log(slides); //@comradekaushik to see whether the slides are rendering

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000); //  @comradekaushik to change slide every 5 seconds

    return () => clearInterval(timer);
  }, [goToNextSlide]); /*previously [currentIndex,goToNextSlide]*/

  return (
    <>
    
    
    
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        // <div
        //   key={index}
        //   className={`slide ${index === currentIndex ? 'active' : ''}`}
        //   style={{ backgroundImage: `url(${slide})` }}
        // />

        <div 
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
            <img className="slide-image" src={slide} alt="not found"/>
        </div>

        
      ))}
      
      
    </div>
      {/* <button onClick={goToPreviousSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button> */}
    </>
  )
}

export default LoginLeftSlideshow;