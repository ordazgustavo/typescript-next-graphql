import React from 'react'
import Router from 'next/router'
import { Formik, Form, Field } from 'formik'

import Layout from '../components/Layout'
import { InputField } from '../components/fileds/InputField'
import { LoginComponent } from '../generated/apolloComponents'

export default function Login() {
  return (
    <Layout title="Login page">
      <LoginComponent>
        {login => (
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await login({
                variables: values
              })
              console.log(response)
              if (response && response.data && !response.data.login) {
                setErrors({
                  email: 'Invalid login'
                })
                return
              }

              Router.push('/')
            }}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {() => (
              <Form>
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
      </LoginComponent>
    </Layout>
  )
}
