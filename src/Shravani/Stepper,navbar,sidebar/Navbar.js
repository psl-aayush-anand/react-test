import { margin, maxWidth, width } from '@mui/system';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
    return (
        <>
        <Navbar expand style={{backgroundColor: "#138049"}}>
            <Container>
                <Navbar.Brand style={{color: "white" }}>
                    Name of the Brand
                </Navbar.Brand>
            </Container>
        </Navbar>
        </>
        



    );
}
  
export default Navibar;