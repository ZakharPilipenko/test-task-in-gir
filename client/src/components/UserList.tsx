import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import type {} from 'redux-thunk/extend-redux';
import { useActions } from '../hooks/useActions';
import ListGroup from 'react-bootstrap/ListGroup';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(()=> {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <ListGroup variant="flush">
                {users.map(user => 
                <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>)}
        </ListGroup>
    );
};

export default UserList;