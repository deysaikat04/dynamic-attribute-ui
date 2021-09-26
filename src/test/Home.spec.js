
import React from "react";
import {Provider} from 'react-redux';
import { mount, shallow, configure } from "enzyme";
import Home from "../components/Home";
import InputField from "../components/InputField";
import Card from "../components/Card";
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

const mockStore = configureMockStore([thunk]);

const testStoreVal = {
    id:"",
    ipName: "",
    ipId: "",
    ipClass: "",
    ipSize: "",
    ipType: "",
    ipPlaceholder:"",
    ipLabel:"",
    error: ""
};

const storeVal = {
    attributes: testStoreVal
};

const mockStoreVal = mockStore(storeVal);

const props = { handleOnChange: jest.fn().mockResolvedValueOnce(true) };

const rendererCreateComp = () => renderer.create(<Provider store={mockStoreVal}><Home {...props}></Home></Provider>);
const createComponent = () => mount(<Provider store={mockStoreVal}><Home/></Provider>);

describe("Home", () => {
  it("renders", () => {
    const component = rendererCreateComp();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


