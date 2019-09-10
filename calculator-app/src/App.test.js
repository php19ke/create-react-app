import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import constants from './resources/constants';

describe('Check if constants is properly defined', function () {
  it('Constants properties should be defined', () => {
    expect(constants.ADD).toBe('ADD');
    expect(constants.SUBTRACT).toBe('SUBTRACT');
    expect(constants.MULTIPLY).toBe('MULTIPLY');
    expect(constants.DIVIDE).toBe('DIVIDE');
    expect(constants.CALC).toBe('CALC');
    expect(constants.RESET).toBe('RESET');
    expect(constants.GET_PERCENTAGE).toBe('%');
    expect(constants.NEGATE).toBe('NEGATE');
  });

  it('Check if the number of constants is exactly 9', function () {
    expect(Object.keys(constants).length).toBe(9);
  });

  it('Check if the number of constants is exactly 9', function () {
    expect(Object.keys(constants).length).toEqual(9);
  });


  it('Check if the number of constants is no more than 8', function () {
    expect(Object.keys(constants).length).toBeGreaterThan(7);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Check if the text property of constants contain the word unsalted', function () {
    const _sampleText = constants.text;

    expect(_sampleText).toMatch(/peanut/);
    expect(_sampleText).toContain('butter');
    expect(_sampleText).not.toMatch(/unsalted/);
  });

  const sampleKeys = ['ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE'];
  const nonAcceptingKeys = ['exception'];

  it('Make sure that the constants contains at least the basic calculation', function () {
    expect(Object.keys(constants)).toEqual(expect.arrayContaining(sampleKeys));
    expect(Object.keys(constants)).not.toEqual(expect.arrayContaining(nonAcceptingKeys));
  });

  it('Check if constants has the property of GET_PERCENTAGE', function () {
    expect(constants).toHaveProperty('GET_PERCENTAGE');
    expect(constants).toHaveProperty('GET_PERCENTAGE', '%');
  });

  it('Check if constants has the property of GET_ABSOLUTE', function () {
    expect(constants).not.toHaveProperty('GET_ABSOLUTE');
  });
});

describe('Check if something else is properly defined', function () {
  it('Check if true is true', function () {
    expect(true).toBe(true);
  });
  it('Check if false is false', function () {
    expect(false).toBe(false);
  });

});