import React, { useState } from "react";
import CollegeList from "../colleges/CollegeList";
import COLLEGESDATA from "../components/COLLEGESDATA";

const HomePage = () => {
  const [colleges, setColleges] = useState(COLLEGESDATA);
  console.log(colleges && colleges[0]);
  return <div><CollegeList colleges={colleges} /> </div>;
};

export default HomePage;
