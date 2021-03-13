import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 15;
const mouthRadius = 140;

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle
          radius={centerY - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />

        <Eyes
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
        />

        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </g>
    </svg>
  );
}

export default App;
