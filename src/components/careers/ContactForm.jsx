import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    message: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    department: Yup.string().required('Required'),
    message: Yup.string().required('Required')
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission here
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Drop Us a Line</h1>
        <p className="text-gray-600">
          Reach out to us from our contact form and we will get back to you shortly.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                    errors.firstName && touched.firstName
                      ? 'border-red-500'
                      : 'border-gray-200'
                  } focus:outline-none focus:border-blue-500`}
                />
                {errors.firstName && touched.firstName && (
                  <div className="text-red-500 text-sm  ">{errors.firstName}</div>
                )}
              </div>

              <div>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name *"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                    errors.lastName && touched.lastName
                      ? 'border-red-500'
                      : 'border-gray-200'
                  } focus:outline-none focus:border-blue-500`}
                />
                {errors.lastName && touched.lastName && (
                  <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email *"
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                  errors.email && touched.email ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-blue-500`}
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <Field
                as="select"
                name="department"
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                  errors.department && touched.department
                    ? 'border-red-500'
                    : 'border-gray-200'
                } focus:outline-none focus:border-blue-500`}
              >
                <option disabled value="">Select a department</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                
                <option value="other">Other</option>
              </Field>
              {errors.department && touched.department && (
                <div className="text-red-500 text-sm mt-1">{errors.department}</div>
              )}
            </div>
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Message *"
                rows="6"
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                  errors.message && touched.message ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-blue-500`}
              />
              {errors.message && touched.message && (
                <div className="text-red-500 text-sm mt-1">{errors.message}</div>
              )}
            </div>

            <div className='w-full flex justify-center'>
              <button
                type="submit"
                disabled={isSubmitting}
                className=" bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;