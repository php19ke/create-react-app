import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import constants from './resources/constants';

it('Constants properties should be defined', () => {
  expect(constants.ADD).toBe('ADD');
  expect(constants.SUBTRACT).toBe('SUBTRACT');
  expect(constants.MULTIPLY).toBe('MULTIPLY');
  expect(constants.DIVIDE).toBe('DIVIDE');
  expect(constants.CALC).toBe('CALC');
  expect(constants.RESET).toBe('RESET');
  expect(constants.GET_PERCENTAGE).toBe('GET_PERCENTAGE');
  expect(constants.NEGATE).toBe('NEGATE');
});

it('Check if the number of constants is exactly 8', function () {
  expect(Object.keys(constants).length).toBe(8);
});

it('Check if the number of constants is exactly 8', function () {
  expect(Object.keys(constants).length).toEqual(8);
});


it('Check if the number of constants is no more than 8', function () {
  expect(Object.keys(constants).length).toBeGreaterThan(7);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < App / > , div);
  ReactDOM.unmountComponentAtNode(div);
});