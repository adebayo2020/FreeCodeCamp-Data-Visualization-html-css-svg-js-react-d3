import { range } from "d3";

import { Face } from "./Face";
const width = 135;
const height = 135;
const array = range(6 * 3);
const App = () =>
  array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={5}
      eyeOffsetX={20 + Math.random() * 9}
      eyeOffsetY={20 + Math.random() * 9}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={5 + Math.random() * 9}
      mouthRadius={35 + Math.random() * 10}
    />
  ));

export default App;
