import "./App.css";
import Carousel from "./components/carousel/Carousel";

function App() {
  const settings = {
    auto: true,
    height: 400,
    speed: 3000,
    indicators: true,
  }
  return (
    <Carousel {...settings}>
      <img src="images/test_img1.jpg" alt="img" />
      <img src="images/test_img2.jpg" alt="img" />
      <img src="images/test_img3.jpg" alt="img" />
      <img src="images/test_img4.jpg" alt="img" />
      <img src="images/test_img1.jpg" alt="img" />
      <img src="images/test_img2.jpg" alt="img" />
      <img src="images/test_img3.jpg" alt="img" />
      <img src="images/test_img4.jpg" alt="img" />
    </Carousel>
  );
}

export default App;
