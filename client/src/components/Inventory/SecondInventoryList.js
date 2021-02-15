import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class SecondInventoryList extends Component{
    state = {
        items: [
            { id: uuid(), name: 'Bread'}, 
            { id: uuid(), name: 'Soup'},
            { id: uuid(), name: 'Kale'},
            { id: uuid(), name: 'Orange'},
        ]
    }
render () {
    const { items } = this.state;
    return(
        <Container>
            <Button
            color="dark"
            style={{marginBottom: '2 rem'}}
            onClick={() => {
                const name = prompt('Add Something to the fridge');
                if(name) {
                    this.setState(state => ({
                        items: [...state.items, { id: uuid(), name}]
                    }));
                }
            }}
            >Add Item</Button>
        </Container>
        );
    }
}

export default SecondInventoryList
