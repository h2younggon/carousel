import "./CarouselIndicators.css";

export type CarouselIndicatorsProps = {
  carouselLeng: number;
  currentIndex: number;
};

function CarouselIndicators({
  carouselLeng,
  currentIndex,
}: CarouselIndicatorsProps) {
  // console.log(currentIndex, carouselLeng);
  return (
    <nav className="carousel_indicators_container">
      <ul className="carousel_indicators">
        {Array.from(Array(carouselLeng)).map((e, i) => {
          let className = "bullet";
          if (currentIndex === i) {
            className += " active";
            return <li className={className} key={i}></li>;
          }
          return <li className={className} key={i}></li>;
        })}
      </ul>
    </nav>
  );
}

export default CarouselIndicators;
