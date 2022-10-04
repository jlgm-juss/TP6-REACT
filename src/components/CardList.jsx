import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"


const CardList = (props) => {
    return (
      <Card style={{ width: '18rem' }} className="m-1">
      <Card.Body>
        <Card.Title className='text-center'>{props.color}</Card.Title>
        
        <Card.Text style={{backgroundColor: props.color}} className='cardColor text-center'>
        
        </Card.Text>
        <div className='d-grid gap-2'>
        <Button variant="danger " onClick={()=>props.borrarColor(props.color)}  >Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
    );
};

export default CardList;