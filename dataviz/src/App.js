import { useState, useEffect } from "react";
import * as d3 from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/duplebado/8996feb7aee2568e7ad2f38dbd2c7f1f/raw/cssNamedColors.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre>Loading</pre>;
  }

  return data.map((d) => (
    <div
      style={{
        backgroundColor: d["RGB hex value"],
        width: "960px",
        height: "4px",
      }}
    />
  ));
};

export default App;
