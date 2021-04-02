import { useState } from "react";
import * as d3 from "d3";
// const { csv } = d3;
// import { range } from "d3";

// import { Face } from "./Face";
// const width = 135;
// const height = 135;
// const array = range(6 * 3);

// array.map(() => (
//   <Face
//     width={width}
//     height={height}
//     centerX={width / 2}
//     centerY={height / 2}
//     strokeWidth={5}
//     eyeOffsetX={20 + Math.random() * 9}
//     eyeOffsetY={20 + Math.random() * 9}
//     eyeRadius={5 + Math.random() * 10}
//     mouthWidth={5 + Math.random() * 9}
//     mouthRadius={35 + Math.random() * 10}
//   />
// )

// const width = 1340;
// const height = 600;

// const circleRadius = 30;
// const initialMousePosition = {
//   x: width / 2,
//   y: height / 2,
// };
const csvUrl =
  "https://gist.githubusercontent.com/duplebado/8996feb7aee2568e7ad2f38dbd2c7f1f/raw/cssNamedColors.csv";

const message = (data) => {
  let message = "";
  message = message + Math.round(d3.csvFormat(data).length / 1024) + " kb\n";
  message = message + data.length + " rows\n";
  message = message + data.columns.length + " columns\n";

  return message;
};
const App = () => {
  // const [mousePosition, setMousePosition] = useState(initialMousePosition);
  const [data, setData] = useState(null);

  // const handleMouseMove = useCallback(
  //   (e) => {
  //     const { clientX, clientY } = e;
  //     setMousePosition({ x: clientX, y: clientY });
  //   },
  //   [setMousePosition]
  // );

  d3.csv(csvUrl).then((data) => {
    setData(data);
  });
  return (
    // <svg width={width} height={height} >
    //   <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
    // </svg>
    <pre>Data is: {data ? message(data) : "loading"}</pre>
  );
};

export default App;
