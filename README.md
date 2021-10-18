# Carousel

## Setting Props

|   name   |  type   | default | unit 
| :------: | :-----: | :-----: | :-:  
|  `auto`  | boolean |  true   |     
| `height` | number  |   450   |     
| `speed`  | number  |  3000   | ms  
| `indicators` | boolean  |   true   |     

## Usage

```js
import Carousel from "Carousel";

const settings = {
  auto: true,
  height: 350,
  speed: 3000,
};

<Carousel {...settings}>
  <img src="images/test_img1.jpg" alt="img" />
  <img src="images/test_img2.jpg" alt="img" />
  <img src="images/test_img3.jpg" alt="img" />
  <img src="images/test_img4.jpg" alt="img" />
</Carousel>
```
