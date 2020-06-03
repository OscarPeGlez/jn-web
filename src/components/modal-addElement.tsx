import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';

const AddElement: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Elemento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ nombre: '', cantidad: 0 }}
            validate={values => {
              const errors: any = {};
              if (!values.nombre) errors.nombre = 'Required';
              return errors;
            }}
            onSubmit={values => console.log(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl
                  type="nombre"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                />
                {errors.nombre && touched.nombre && errors.nombre}
                <FormControl
                  type="cantidad"
                  name="cantidad"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cantidad}
                />
                {errors.cantidad && touched.cantidad && errors.cantidad}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type="submit">Save Changes</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddElement;
