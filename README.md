# Carousel

## Setting Props

### auto

#### type: boolean

#### default: true

### height

#### type: number

#### default 400

### speed

#### type: number

#### default: 3000ms

## Example

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
</Carousel>;
```
