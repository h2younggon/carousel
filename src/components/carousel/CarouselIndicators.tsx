import "./CarouselIndicators.css";

export type CarouselIndicatorsProps = {
  carouselSize: number;
  currentIndex: number;
};

function CarouselIndicators({
  carouselSize,
  currentIndex,
}: CarouselIndicatorsProps) {
  return (
    <nav className="carousel_indicators_container">
      <ul className="carousel_indicators">
        {/* carousel size 만큼 indicator 생성 */}
        {Array.from(Array(carouselSize)).map((_, i) => {
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
