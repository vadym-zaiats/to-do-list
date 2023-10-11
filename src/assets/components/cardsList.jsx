import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import CardHolder from './card';

function CardsList() {
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const doneItems = allTasks.filter((item) => item.status === true);
  const undoneItems = allTasks.filter((item) => item.status === false);
  const filterType = useSelector((state) => state.filter.type);

  return (
    <Container>
      <Row>
        {filterType === 'All' &&
          allTasks.map(({ title, descr, status, id }) => (
            <Col
              style={{ marginBottom: '20px' }}
              key={uuidv4()}
              xs={6}
              md={4}
              xl={3}>
              <CardHolder title={title} descr={descr} status={status} id={id} />
            </Col>
          ))}
        {filterType === 'Done' &&
          doneItems.map(({ title, descr, status, id }) => (
            <Col
              style={{ marginBottom: '20px' }}
              key={uuidv4()}
              xs={6}
              md={4}
              xl={3}>
              <CardHolder title={title} descr={descr} status={status} id={id} />
            </Col>
          ))}
        {filterType === 'Undone' &&
          undoneItems.map(({ title, descr, status, id }) => (
            <Col
              style={{ marginBottom: '20px' }}
              key={uuidv4()}
              xs={6}
              md={4}
              xl={3}>
              <CardHolder title={title} descr={descr} status={status} id={id} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default CardsList;
