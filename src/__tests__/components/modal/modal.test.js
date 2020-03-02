import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import renderer from "react-test-renderer";
import Modal from '../../../components/modal/index';
Enzyme.configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('is alive on start', () => {
    let app = shallow(<Modal/>);

    expect(app.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Modal/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});