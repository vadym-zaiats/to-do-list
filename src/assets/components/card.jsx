import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, deleteToDo } from '../redux/slices/tasksSlice';
import { openModal } from '../redux/slices/modalSlice';

// eslint-disable-next-line react/prop-types
function CardHolder({ title, descr, status, id }) {
  const dispatch = useDispatch();

  return (
    <Card style={{ height: '100%' }}>
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Card.Title style={{}}>{title}</Card.Title>
        <Card.Text>{descr}</Card.Text>
        <Form>
          <Form.Check
            type="checkbox"
            label={status ? 'Done' : 'Undone'}
            checked={status}
            onChange={() => {
              dispatch(changeStatus(id));
            }}
          />
        </Form>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            dispatch(openModal({ type: 'edit', title, descr, status, id }));
          }}>
          Edit
        </Button>
        <Button
          style={{ marginTop: '5px' }}
          variant="warning"
          size="sm"
          onClick={() => {
            dispatch(deleteToDo({ id }));
          }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardHolder;
