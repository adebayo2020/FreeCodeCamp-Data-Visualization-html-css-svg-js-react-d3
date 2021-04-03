import { useState, useEffect } from "react";
import * as d3 from "d3";
import { message } from "./message";

const csvUrl =
  "https://gist.githubusercontent.com/duplebado/8996feb7aee2568e7ad2f38dbd2c7f1f/raw/cssNamedColors.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);

    // d3.csv(csvUrl).then((data) => {
    //   setData(data);
    // });
  }, []);
  return <pre>{data ? message(data) : "Loading..."}</pre>;
};

export default App;
