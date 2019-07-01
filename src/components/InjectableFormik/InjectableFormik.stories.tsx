import React from "react";
import { storiesOf } from "@storybook/react";
import { InjectableFormik } from "./InjectableFormik";

storiesOf("Injectable Formik", module).add("Simple example", () => (
  <InjectableFormik>Hello Button</InjectableFormik>
));
