import React from "react";
import {Provider} from 'react-redux';
import { mount, shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import App from "../App";
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

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

const rendererCreateComp = () => renderer.create(<Provider store={mockStoreVal}><App/></Provider>);

describe("App", () => {
  it("renders", () => {
    const component = rendererCreateComp();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


