import * as d3 from "d3";
// import countries from "./country.csv";
//  {csv} = d3;
// const csvUrl =
//   "https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv";
// const csvUrl =
// "https://gist.githubusercontent.com/dralmadani/c04f95746e2f36b040d3d764ab7b9c62/raw/bd76f59e51e758d69fb1641c734aa9dc903702e8/LargestCitiesPopulation2020USA.csv";
const csvUrl =
  "https://gist.githubusercontent.com/dralmadani/c04f95746e2f36b040d3d764ab7b9c62/raw/0ac9460c0bce221efb38a8a75beeb00d6c315023/LargestCitiesPopulation2020USwithLongitude_Latitude.csv";
export const getData = async () => {
  const data = await d3.csv(csvUrl);

  // //Have a look at the attributes available in the console
  console.log(data[0]);

  return data;
};
