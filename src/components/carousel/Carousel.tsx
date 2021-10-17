import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import CarouselIndicators from "./CarouselIndicators";

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
    if (currentIndex >= carouselLeng - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((index) => index + 1);
      console.log(currentIndex);
    }
    console.log("here", currentIndex);
    if (ref.current) {
      ref.current.style.transform = `translateX(-${currentIndex}00%)`;
      ref.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(carouselLeng - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    if (ref.current) {
      ref.current.style.transform = `translateX(-${currentIndex}00%)`;
      ref.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  return (
    <main className="container">
      <section className="carousel">
        <article className="carousel_content" ref={ref}>
          {React.Children.map(children, (child) => (
            <div className="carousel_content_item">{child}</div>
          ))}
        </article>

        <button className="prev_button" onClick={prev}>
          <img className="icon" src="icons/arrow_back.png" alt="arrow" />
        </button>
        <button className="next_button" onClick={next}>
          <img className="icon" src="icons/arrow_forward.png" alt="arrow" />
        </button>
      </section>
      <CarouselIndicators
        carouselLeng={carouselLeng}
        currentIndex={currentIndex}
      />
    </main>
  );
}

export default Carousel;
