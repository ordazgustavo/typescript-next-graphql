import React from 'react'
import Router from 'next/router'
import { Formik, Form, Field } from 'formik'

import Layout from '../components/Layout'
import { InputField } from '../components/fileds/InputField'
import { RegisterComponent } from '../generated/apolloComponents'

export default function Register() {
  return (
    <Layout title="Register page">
      <RegisterComponent>
        {register => (
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: ''
            }}
            onSubmit={async (values, { setErrors }) => {
              try {
                const response = await register({
                  variables: { data: values }
                })
                console.log(response)
                Router.push('/check-email')
              } catch (error) {
                const errors: { [key: string]: string } = {}
                error.graphQLErrors[0].validationErrors.forEach((err: any) => {
                  Object.values(err.constraints).forEach((message: any) => {
                    errors[err.property] = message
                  })
                })
                setErrors(errors)
              }
            }}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {() => (
              <Form>
                <Field
                  name="firstName"
                  placeholder="firstName"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  placeholder="lastName"
                  component={InputField}
                />
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  component={InputField}
                />
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  )
}
