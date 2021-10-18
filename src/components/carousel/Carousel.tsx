import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Carousel.css";
import CarouselIndicators from "./CarouselIndicators";

export type CarouselProps = {
  children: React.ReactNode;
  auto?: boolean;
  height?: number;
  speed?: number;
};

function Carousel({ children, auto=true, height=450, speed=3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(auto);
  const ref = useRef<HTMLDivElement>(null);
  const carouselSize = useMemo(() => React.Children.count(children), [children]);

  const getHeight = {
    height: height,
  }

  // set auto play
  useEffect(() => {
    let autoPlay: any;
    if (isAuto) {
      autoPlay = setInterval(() => {
        if (currentIndex >= carouselSize - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1)
        }
      }, speed)
    }
    return () => clearInterval(autoPlay);
  }, [isAuto, currentIndex, carouselSize, speed])

  // animation
  const animation = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = `translate3d(-${currentIndex}00%, 0, 0)`;
      ref.current.style.transition = `transform ${speed}ms ease`;
    }
  }, [currentIndex, speed])

  useEffect(() => {
    animation();
  }, [currentIndex, animation])
 
  // handle button
  const handleNextClick = () => {
    if (currentIndex >= carouselSize - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(carouselSize - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className="container">
      <section className="carousel" style={getHeight}>
        <article className="carousel_content" ref={ref} onMouseEnter={() => setIsAuto(false)} onMouseLeave={() => setIsAuto(true)}>
          {React.Children.count(children) > 0 && React.Children.map(children, (child) => {
            return <div className="carousel_content_item">{child}</div>
          })}
        </article>

        <button className="prev_button" onClick={handlePrevClick}>
          <img className="icon" src="icons/arrow_back.png" alt="arrow" />
        </button>
        <button className="next_button" onClick={handleNextClick}>
          <img className="icon" src="icons/arrow_forward.png" alt="arrow" />
        </button>
      </section>
      <CarouselIndicators
        carouselSize={carouselSize}
        currentIndex={currentIndex}
      />
    </main>
  );
}

export default Carousel;
