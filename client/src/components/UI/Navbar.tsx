import {Container, Button, Nav, Navbar as NavbarBs} from "react-bootstrap"; 
import {NavLink} from "react-router-dom";
import  Cart  from "../../assets/cart.svg";



const Navbar = () => {

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
         <Container>
            <Nav className="me-auto">
                <Nav.Link  to="/home" as={NavLink}>Главная</Nav.Link>
                <Nav.Link  to="/todo" as={NavLink}>Заказы</Nav.Link>
                <Nav.Link  to="/auth" as={NavLink}>Авторизация</Nav.Link>
            </Nav>

            <Button 
                style={{width: "3rem", height: "3rem", position: "relative"}} 
                variant="outline-primary"
                className="rounded-circle">
                <img src={Cart} alt="Cart" style={{width:"100%", height:"100%"}}/>
                <div 
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white", 
                        width: "1.5rem", 
                        height: "1.5rem", 
                        position: "absolute", 
                        bottom: 0, 
                        right: 0, 
                        transform: "translate(25%, 25%)",
                    }}
                >1
                </div>
            </Button>
         </Container>
        </NavbarBs>
    );
};

export default Navbar;