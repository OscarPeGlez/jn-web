import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { SchemaElement } from '../constants';

const FormElement = (initialsValues: any): JSX.Element => {
  return (
    <Formik
      validationSchema={SchemaElement}
      onSubmit={values => {
        console.log(values);
      }}
      initialValues={initialsValues}
    >
      {' '}
      {({ handleSubmit, values, errors, touched, setFieldValue }) => (
        <Form onSubmit={handleSubmit} id="formularioCliente">
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};

export default FormElement;
