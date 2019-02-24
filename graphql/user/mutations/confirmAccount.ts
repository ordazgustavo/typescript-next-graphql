import { gql } from 'apollo-boost'

export const confirmAccountMutation = gql`
  mutation ConfirmAccount($token: String!) {
    confirmAccount(token: $token)
  }
`
