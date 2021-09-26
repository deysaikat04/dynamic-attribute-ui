import React from "react";
import {Provider} from 'react-redux';
import Card from "../components/Card";
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const testStoreVal = {
    id:"abcd",
    ipName: "email",
    ipId: "emailId",
    ipClass: "email-class",
    ipSize: "10",
    ipType: "email",
    ipPlaceholder:"Enter your email...",
    ipLabel:"Email",
    error: ""
};

const storeVal = {
    attributes: testStoreVal
};

const mockStoreVal = mockStore(storeVal);

const props = {
    attrs: testStoreVal
}

const rendererCreateComp = () => renderer.create(<Provider store={mockStoreVal}><Card {...props}/></Provider>);

describe("Card", () => {
  it("renders", () => {
    const component = rendererCreateComp();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


