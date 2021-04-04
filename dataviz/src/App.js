import { useState, useEffect } from "react";
import * as d3 from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/duplebado/8996feb7aee2568e7ad2f38dbd2c7f1f/raw/cssNamedColors.csv";

const width = 960;
const height = 580;

const centerX = width / 2;
const centerY = height / 2;

const pieArc = d3.arc().innerRadius(0).outerRadius(width);

const colorPie = d3.pie().value(1);
const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading</pre>;
  }
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {colorPie(data).map((d) => (
          <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
};
// {data.map((d, i) => (
//   <path
//     fill={d["RGB hex value"]}
//     d={pieArc({
//       startAngle: (i / data.length) * 2 * Math.PI,
//       endAngle: ((i + 1) / data.length) * 2 * Math.PI,
//     })}
//   />
// ))}
export default App;
