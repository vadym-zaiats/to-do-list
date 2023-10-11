import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from './cardsList';

function Content() {
  return <CardsList />;
}

export default Content;
