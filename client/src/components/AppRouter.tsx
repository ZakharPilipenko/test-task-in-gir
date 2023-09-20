import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import TodoList from "./TodoList";
import UserList from "./UserList";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const AppRouter = () => {
    return (
        <Container className="mb-4">
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/todo" element={<TodoList/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/users" element={<UserList/>}/>
        </Routes>
        </Container>
    );
};

export default AppRouter;