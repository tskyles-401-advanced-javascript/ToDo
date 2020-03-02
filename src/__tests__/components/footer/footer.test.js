import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import renderer from "react-test-renderer";
import Footer from '../../../components/footer/footer';
Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('is alive on start', () => {
    let app = shallow(<Footer/>);

    expect(app.find('footer').exists()).toBeTruthy();
    expect(app.find('p').exists()).toBeTruthy();

  });

  it('renders correctly', () => {
    const tree = renderer.create(<Footer/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});