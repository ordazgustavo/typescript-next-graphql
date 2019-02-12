import { gql } from 'apollo-boost'

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      fullName
      firstName
      lastName
      email
    }
  }
`
