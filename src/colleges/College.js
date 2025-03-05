import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
const College = ({ college }) => {
  const {
    name,
    city,
    state,
    country,
    no_of_students,
    courses,
    website,
    logo_path,
  } = college;
  return (
    <Card>
      <CardImg top width="100%" src={logo_path} alt={name} />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>
          <strong>Location:</strong> {city}, {state}, {country} <br />
          <strong>Students:</strong> {no_of_students.toLocaleString()} <br />
          <strong>Courses:</strong> {courses.join(", ")} <br />
          <strong>Website:</strong>{" "}
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default College;
