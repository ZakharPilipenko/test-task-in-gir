import {useContext} from "react"
import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import TodoList from "./TodoList";
import UserList from "./UserList";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Store from "../pages/Store";
import { AuthContext } from "../context/authContext";
import Loader from "./UI/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }
    return (
        <Container className="mb-4">
        {isAuth ?
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/todo" element={<TodoList/>}/>
                <Route path="/users" element={<UserList/>}/>
                <Route path="/store" element={<Store/>}/>
            </Routes>
            :
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/store" element={<Store/>}/>
            </Routes>
        }
        </Container>
    );
};

export default AppRouter;