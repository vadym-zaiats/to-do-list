import React from 'react';
import { Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/filterSlice';

function Filters() {
  const dispatch = useDispatch();
  return (
    <Container style={{ margin: '30px auto', maxWidth: '20%' }}>
      <Form.Select
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}>
        <option>All</option>
        <option>Done</option>
        <option>Undone</option>
      </Form.Select>
    </Container>
  );
}

export default Filters;
