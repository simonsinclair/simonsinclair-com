/* eslint-disable react/jsx-filename-extension */
/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
// import renderer from 'react-test-renderer';

import App from '../src/pages/index';

describe('With Enzyme', () => {
  it('App shows "I\'m Simon..."', () => {
    // const location = { pathname: '/' };
    const app = shallow(<App />);

    expect(app.find('p').text()).toEqual('I\'m Simon — a Front–end Developer working for the BBC in London, UK.');
  });
});

// describe('With Snapshot Testing', () => {
//   it('App shows "I\'m Simon..."', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
