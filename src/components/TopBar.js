import {Navbar,Nav,Container} from 'react-bootstrap'


const TopBar = () => {
    return (
        <Navbar style={{background:"#C51162"}}>
        <Container>
        <Navbar.Brand href="">NewsX</Navbar.Brand>
        <Nav className="me-auto">
        
        </Nav>
        </Container>
        </Navbar>
    )
}

export default TopBar