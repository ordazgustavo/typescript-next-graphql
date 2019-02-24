import React from 'react'
import { FieldProps, ErrorMessage } from 'formik'

export function InputField({ field, form, ...props }: FieldProps) {
  return (
    <div>
      <input {...field} {...props} />
      <ErrorMessage name={field.name}>
        {error => <div style={{ color: 'red' }}>{error}</div>}
      </ErrorMessage>
    </div>
  )
}
