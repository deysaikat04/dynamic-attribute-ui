import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { postAttribute, gettAttribute } from "../actions/action-creators";
import Card from "./Card";
import InputField from "./InputField";

const Home = () => {
  const { attrs } = useSelector((state) => ({
    attrs: state.attributes,
  }));

  const state = {
    id: uuidv4(),
    ipLabel: "",
    ipName: "",
    ipId: "",
    ipClass: "",
    ipSize: 0,
    ipType: "",
    ipPlaceholder: "",
  };

  const [form, setForm] = useState(state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (attrs.id !== "") {
      gettAttribute(attrs.id);
    }
  }, [attrs.id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    name === "ipSize"
      ? setForm({
          ...form,
          [name]: Number(value),
        })
      : setForm({
          ...form,
          [name]: value,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(postAttribute(form));
      setForm(state);
    }
  };

  const validate = () => {
    const { ipName, ipId, ipClass, ipSize, ipType, ipLabel } =
      form;
    if (
      ipName &&
      ipId &&
      ipClass &&
      ipSize &&
      ipType &&      
      ipLabel
    )
      return true;
    return false;
  };

  const { ipName, ipId, ipClass, ipSize, ipType, ipPlaceholder, ipLabel } =
    form;

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <div className="col-6">
          <h4>Form</h4>
          <p>Fill the form and submit to generate dynamic Input Field</p>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipLabel" className="col-form-label">
                  Label
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="ipLabel"
                  className="form-control"
                  aria-describedby="ipLabel"
                  name="ipLabel"
                  value={ipLabel}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipName" className="col-form-label">
                  Name
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="ipName"
                  className="form-control"
                  aria-describedby="ipName"
                  name="ipName"
                  value={ipName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipType" className="col-form-label">
                  Type
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="ipType"
                  className="form-control"
                  aria-describedby="ipType"
                  name="ipType"
                  value={ipType}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipClass" className="col-form-label">
                  Class
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="ipClass"
                  className="form-control"
                  aria-describedby="ipClass"
                  name="ipClass"
                  value={ipClass}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipId" className="col-form-label">
                  ID
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="ipId"
                  className="form-control"
                  aria-describedby="ipId"
                  name="ipId"
                  value={ipId}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipSize" className="col-form-label">
                  Size
                </label>
              </div>
              <div className="col-6">
                <input
                  type="number"
                  id="ipSize"
                  className="form-control"
                  aria-describedby="ip-size"
                  name="ipSize"
                  value={ipSize}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="ipSize" className="col-form-label">
                  Placeholder
                </label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  id="ipPlaceholder"
                  className="form-control"
                  aria-describedby="input-placeholder"
                  name="ipPlaceholder"
                  value={ipPlaceholder}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-dark mt-5">
              Submit
            </button>
          </form>
        </div>
        <div className="col-6">
          <h4>Dynamic Input Field</h4>
          <p>Based on the form values, the <code>input</code> field will appear below.</p>
          {attrs.id && (
            <>
              <InputField attrs={attrs} />
              <Card attrs={attrs} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
