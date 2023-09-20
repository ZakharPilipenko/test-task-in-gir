import {useContext} from "react"
import {Container, Button, Nav, Navbar as NavbarBs} from "react-bootstrap"; 
import {NavLink} from "react-router-dom";
import  Cart  from "../../assets/cart.svg";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart()
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logOut = () => {
        setIsAuth(false)
    }

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
         <Container>
            
                {isAuth 
                ?
                <Nav className="me-auto"> 
                <Nav.Link  to="/home" as={NavLink}>Главная</Nav.Link>
                <Nav.Link  to="/store" as={NavLink}>Магазин</Nav.Link>
                <Nav.Link  to="/todo" as={NavLink}>Заказы</Nav.Link>
                <Button onClick={logOut}>Выйти</Button>
                </Nav>
                :
                <Nav className="me-auto"> 
                <Nav.Link  to="/auth" as={NavLink}>Авторизация</Nav.Link>
                </Nav>
                }
            
            {cartQuantity > 0 && (
            <Button 
                onClick={openCart}
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
                >
                    {cartQuantity}
                </div>
            </Button>
            )}
         </Container>
        </NavbarBs>
    );
};

export default Navbar;