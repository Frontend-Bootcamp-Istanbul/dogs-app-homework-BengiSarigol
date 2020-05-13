import React from 'react';
import dogs from "../dogsdata";
import "./styles.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  
const DetailDog = (props) => {
    const secilenid = props.match.params.dogid;
    const filteredDogs = dogs.filter((dog) => dog.id === secilenid);
    return (
        <div>
           
        {
        filteredDogs.map((dog) => {
            return <Card className="card" key={dog.id}>
       
        
        <CardTitle className="cardtitle">{dog.name}</CardTitle>
       <CardImg className="img" top width="100%" src={dog.image} alt="Dog image" />
        <CardBody>
          
          <CardText>{dog.description}</CardText>
        <CardText>Age: {dog.age}</CardText>  
          
        </CardBody>

       
        </Card>
        })
        }
 
    </div>
    );
};

export default DetailDog;