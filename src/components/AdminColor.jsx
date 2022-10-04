import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BodyCard from "./BodyCard";
import { useEffect, useState } from "react";

const AdminColor = () => {
  const localStorageColor = JSON.parse(localStorage.getItem("arregloColor"))||[];
  const [color, setColor] = useState("");
  const [arregloColor, setArregloColor] = useState(localStorageColor);

useEffect(()=>{
localStorage.setItem("arregloColor", JSON.stringify(arregloColor));
},[arregloColor]);

  const hundleSubmit = (e) => {
    e.preventDefault();
    setArregloColor([...arregloColor, color]);
    setColor("");
  };

  const borrarColor= (nombre)=>{
    let arregloModificado = arregloColor.filter((itemColor)=>(itemColor !== nombre));
    setArregloColor(arregloModificado);
  }
  return (
    <Container className="my-5">
      <Form onSubmit={hundleSubmit}>
        <Form.Group className="m-3">
          <Form.Label>Seleccione su paleta de colores en ingles </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="primary" type="submit" className="my-3">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <hr />
      <BodyCard arregloColor={arregloColor} borrarColor={borrarColor}/>
    </Container>
  );
};

export default AdminColor;