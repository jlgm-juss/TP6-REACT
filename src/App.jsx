import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormPaletaColor from "./components/AdminColor";
import "./Style.css"

function App() {
  return (
    <Container className="bgColor">
      <h1 className="text-center sz-1 my-5">Admin de Colores</h1>
      <hr />
      <FormPaletaColor />
    </Container>
  );
}

export default App;
