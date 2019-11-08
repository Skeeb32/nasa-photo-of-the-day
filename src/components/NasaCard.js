import React from "react";
import styled from "styled-components";


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col
} from 'reactstrap';

// import NasaList from "./NasaList";

const Body = styled.div `

overflow-x: hidden;
background-color: grey;
background-image: url(./images/redmoon.jpg);
background-size: stretch;
background-repeat: repeat;
padding: 0;
margin: 0;

`;

const NasaCard2 = styled.div `
    background: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NasaCard = (props) => {
  return (
    <Body>
    <NasaCard2> 
<Col xs="12" s="6" md="4">
      <Card>
        <CardImg
          top
          width="100%"
          src= {props.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.explanation}</CardText>
          {/* <img src = {props.url} /> */}
          <Button>{props.date}</Button>
        </CardBody>
      </Card>
      </Col>
      </NasaCard2>
      </Body>
     
  );
};

export default NasaCard;

// const NasaCard = props => {
//   return (
//     <div className="potd">
//       <h2>Photo title: {props.title}</h2>
//       <p>{props.explanation}</p>
//       <p>{props.date}</p>
//       <img src = {props.url} />
//       </div>
//   );
// };
// export default NasaCard;

