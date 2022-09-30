import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';

function AppForm() {
  return (
    <Formik
      initialValues={{ texto: 'Hola te contacto por....' }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = 'Este campo es requerido';
        } else if (!values.email) {
          errors.email = 'Este campo es requerido';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'El correo no es valido';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre:</label>
            {/* es un input con control de html */}
            <Field type="text" name="name"></Field>
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <label htmlFor="email">Correo Electronico</label>
            <Field type="email" name="email"></Field>
            <ErrorMessage name="email" component="p" />
          </div>
          <div>
            <label htmlFor="texto">Mensaje: </label>
            <Field
              component="textarea"
              value={values.texto}
              name="texto"
            ></Field>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {' '}
            {isSubmitting ? 'Enviandoo..' : 'Enviar Mensaje'}{' '}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AppForm;
