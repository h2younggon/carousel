import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export type CarouselProps = {
  children: React.ReactNode;
};

function Carousel({ children }: CarouselProps) {
  const [carouselLeng, setCarouselLeng] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCarouselLeng(React.Children.count(children));
  }, [children]);

  const next = () => {
    if (!ref.current) return;
    if (currentIndex >= carouselLeng - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    ref.current.style.transform = `translateX(-${currentIndex}00%)`;
  };

  const prev = () => {
    if (!ref.current) return;
    if (currentIndex === 0) {
      setCurrentIndex(carouselLeng - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    ref.current.style.transform = `translateX(-${currentIndex}00%)`;
  };

  return (
    <>
      <section className="carousel_wrapper">
        <div className="carousel_container" ref={ref}>
          {React.Children.map(children, (child) => (
            <div className="carousel_item">{child}</div>
          ))}
        </div>

        <button className="prev_button" onClick={prev}>
          <img className="icon" src="icons/arrow_back.png" alt="arrow" />
        </button>
        <button className="next_button" onClick={next}>
          <img className="icon" src="icons/arrow_forward.png" alt="arrow" />
        </button>

        <div className="carousel_indicators_container">
          <div className="carousel_indicators">
            {React.Children.map(children, () => (
              <span className="bullet"></span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
