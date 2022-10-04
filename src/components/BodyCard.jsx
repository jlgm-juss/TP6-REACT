import { Container } from "react-bootstrap";
import CardList from "./CardList";

const BodyCard = (props) => {
  return (
    <Container className="row">
      {props.arregloColor.map((color, index)=><CardList key={index} color={color} borrarColor={props.borrarColor}/>)}
   
    </Container>
  );
};

export default BodyCard;