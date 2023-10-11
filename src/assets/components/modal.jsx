import React, { useState } from 'react';
import { Button, Container, Modal, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { statusModal, typeModal } from '../redux/selectors';
import { closeModal } from '../redux/slices/modalSlice';
import { addToDo, editItem } from '../redux/slices/tasksSlice';

function ModalWindow() {
  const dispatch = useDispatch();
  const modalStatus = useSelector(statusModal);
  const itemTitle = useSelector((state) => state.modal.title);
  const itemDescr = useSelector((state) => state.modal.descr);
  const itemId = useSelector((state) => state.modal.id);
  const type = useSelector(typeModal);

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [status, setStatus] = useState(false);
  const [isTitleValid, setIsTitleValid] = useState(true);

  const handleAddToDo = () => {
    if (title.trim() === '') {
      setIsTitleValid(false);
      return;
    }

    dispatch(addToDo({ title, descr, status }));
    dispatch(closeModal());
    setTitle('');
    setDescr('');
    setStatus(false);
  };

  const handleEditItem = () => {
    if (title.trim() === '') {
      setIsTitleValid(false);
      return;
    }

    dispatch(editItem({ title, descr, status, itemId }));
    dispatch(closeModal());
    setTitle('');
    setDescr('');
    setStatus(false);
  };

  return (
    <Container>
      <div
        className="modal show"
        style={{ display: modalStatus, position: 'initial' }}>
        <Modal show={modalStatus}>
          <Modal.Header
            closeButton
            onClick={() => {
              dispatch(closeModal());
              setTitle('');
              setDescr('');
              setStatus(false);
            }}>
            <Modal.Title>
              {type === 'add' ? 'Додай завдання' : 'Відредагуй завдання'}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <Form.Label>Назва завдання</Form.Label>
              <Form.Control
                type="text"
                placeholder={type === 'edit' ? itemTitle : 'Додай завдання'}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setIsTitleValid(true);
                }}
                isInvalid={!isTitleValid}
              />
              <Form.Control.Feedback type="invalid">
                {!isTitleValid && 'Назва не може бути порожньою.'}
              </Form.Control.Feedback>
              <Form.Label>Опис</Form.Label>
              <Form.Control
                type="text"
                placeholder={type === 'edit' ? itemDescr : 'Опис завдання'}
                value={descr}
                onChange={(e) => {
                  setDescr(e.target.value);
                }}
              />
              {type === 'add' && (
                <Row style={{ marginTop: '15px' }}>
                  <Col>
                    <Form.Check
                      type="checkbox"
                      label="Check this box if you have already completed the task"
                      onChange={(e) => {
                        setStatus(e.target.checked);
                      }}
                    />
                  </Col>
                </Row>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                dispatch(closeModal());
                setTitle('');
                setDescr('');
                setStatus(false);
              }}>
              {type === 'add' ? 'Не створювати' : 'Не редагувати'}
            </Button>
            {type === 'add' && (
              <Button variant="primary" onClick={handleAddToDo}>
                Додати
              </Button>
            )}
            {type === 'edit' && (
              <Button variant="primary" onClick={handleEditItem}>
                Змінити
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
}

export default ModalWindow;
