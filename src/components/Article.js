import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




const Article = (props) => {
    
    return (
        <Card border="light" style={{ width: '18rem',margin:"10px"}}>
        
        <Card.Body>
            <Card.Img variant="top" src={props.imgurl} />
            <Card.Title style={{color:"#C51162"}}>{props.title}</Card.Title>
            <Card.Text style={{color:"#F50057"}}>
            {props.description}
            </Card.Text>
            <a href={props.url}>
            <Button variant="danger">Open News</Button>
            </a>
        </Card.Body>
        </Card>
    )
}

export default Article