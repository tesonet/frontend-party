import React from "react";
import * as Enzyme from "enzyme";
import { Form, Formik } from "formik";
import { FormInput } from "./FormInput";

describe("FormInput", () => {
  const setup = (_props) => {
    const props = Object.assign({}, {
      classNames: {},
    }, _props);
    const wrapper = Enzyme.mount((
      <Formik
        initialValues={{}}
        onSubmit={jest.fn()}
      >
        <Form>
          <FormInput {...props} />
        </Form>
      </Formik>
    ));

    return {
      wrapper,
      props
    };
  };

  it("should display leading icon if it is passed", () => {
    const { wrapper } = setup({
      leadingIcon: <div data-testid="leading-icon">leading icon</div>
    });
    expect(wrapper.find('[data-testid="form-input-leading-icon"]').length).toBe(1);
    expect(wrapper.find('[data-testid="leading-icon"]').length).toBe(1);
  });

  it("should display error text if there is error passed", () => {
    const { wrapper, props } = setup({
      error: "ERROR"
    });
    const errorWrapper = wrapper.find('[data-testid="form-input-error"]');
    expect(errorWrapper.text()).toBe(props.error);
  });
});