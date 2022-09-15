import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const UserForm = (props) => {
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Required"),
    user: Yup.string().required("Required"),
    number:Yup.string().required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <div className="row">
            <div className="col-md-12">
               <FormGroup>
                <label htmlFor="id">ID</label>
            <Field name="id" type="text"
                className="form-control"/>
            <ErrorMessage
              name="id"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
            </div>

            <div className="col-md-12">
              <FormGroup>
                <label htmlFor="user">Name</label>
            <Field name="user" type="text"
                className="form-control" />
            <ErrorMessage
              name="user"
              className="d-block invalid-feedback"
              component="span"
            />
                </FormGroup>
            </div>
            <div className="col-md-12">
               <FormGroup>
                 <label htmlFor="number">Mobile No</label>
            <Field name="number" type="text"
                className="form-control" />
            <ErrorMessage
              name="number"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
            </div>
             <div className="col-md-12 text-center form-group mt-3">
                <Button variant="danger" size="lg" className="btn btn-primary"
            block="block" type="submit">
            {props.children}
          </Button>
             </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;