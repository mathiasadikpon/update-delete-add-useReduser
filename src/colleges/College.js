import React from 'react'
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
const College = (college) => {
    const {name, city, state, country, no_of_students, courses, website_url} = college;
  return (
    <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/150" alt="Card image cap" />
        <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      
    </Card>
  )
}

export default College;
