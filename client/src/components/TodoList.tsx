import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Pagination from 'react-bootstrap/Pagination';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import {Row} from "react-bootstrap"


const TodoList: React.FC = () => {
    const {page, error, limit, loading, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(()=> {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Row>
             <ListGroup as="ol" numbered className='mb-4'>
                {todos.map(todo => (
                <ListGroup.Item
                    key={todo.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">ID заказа {todo.id}</div>
                    {todo.title}
                </div>
                <Badge bg="primary" pill>
                {todo.id}
                </Badge>
                </ListGroup.Item>
                ))}
            </ListGroup>
            <Pagination>
                {pages.map( p => 
                <Pagination.Item  
                key={p}
                onClick={() => setTodoPage(p)}
                style={{backgroundColor: "#ABCCBB"}} 
                active={p === page}>
                {p}
                </Pagination.Item>
                 )}
            </Pagination>    
        </Row>
    );
};

export default TodoList;