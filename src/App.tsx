import "./App.css";
import Carousel from "./components/carousel/Carousel";

/**
 * carousel setting props
 * auto?: boolean;
 * height?: number;
 * speed?: number;
 * 
 * default 
 * auto: true
 * height: 450
 * speed: 3000ms
 */

function App() {
  const settings = {
    auto: true,
    height: 400,
    speed: 3000,
  }
  return (
    <Carousel {...settings}>
      <img src="images/test_img1.jpg" alt="img" />
      <img src="images/test_img2.jpg" alt="img" />
      <img src="images/test_img3.jpg" alt="img" />
      <img src="images/test_img4.jpg" alt="img" />
    </Carousel>
  );
}

export default App;
