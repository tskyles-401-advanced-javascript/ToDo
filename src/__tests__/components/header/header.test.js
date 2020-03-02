import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import renderer from "react-test-renderer";
import Header from '../../../components/header/header';
Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('is alive on start', () => {
    let app = shallow(<Header/>);

    expect(app.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});