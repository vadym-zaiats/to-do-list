import React from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

import { openModal } from '../redux/slices/modalSlice';

function Header() {
  const dispatch = useDispatch();
  return (
    <Container style={{ margin: '30px auto', textAlign: 'center' }}>
      <Button
        onClick={() => {
          dispatch(openModal({ type: 'add' }));
        }}>
        Додати завдання
      </Button>
    </Container>
  );
}

export default Header;
