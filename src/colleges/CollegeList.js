import React from "react";
import { Container } from "reactstrap";
import College from "./College";

const CollegeList = ({ colleges }) => {
  return (
    <Container>
      {colleges.map((college, indx) => {
        return <College key={indx} college={college} />;
      })}
    </Container>
  );
};

export default CollegeList;
