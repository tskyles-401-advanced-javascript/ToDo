import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import renderer from "react-test-renderer";
import Todo from '../../../components/todo/todo';
Enzyme.configure({ adapter: new Adapter() });

describe('<Todo />', () => {
  xit('is alive on start', () => {
    let app = shallow(<Todo/>);

    expect(app.find('header').exists()).toBeTruthy();
    expect(app.find('.todo').exists()).toBeTruthy();
  });

  xit('renders correctly', () => {
    const tree = renderer.create(<Todo/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});