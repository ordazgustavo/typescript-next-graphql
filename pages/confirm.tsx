import React from 'react'

import { MyNextContext } from '../interfaces/MyNextContext'
import {
  ConfirmAccountMutation,
  ConfirmAccountVariables
} from '../generated/apolloComponents'
import { confirmAccountMutation } from '../graphql/user/mutations/confirmAccount'
import redirect from '../lib/redirect'

export default class Confirm extends React.PureComponent {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: MyNextContext) {
    if (!token) {
      return {}
    }
    await apolloClient.mutate<ConfirmAccountMutation, ConfirmAccountVariables>({
      mutation: confirmAccountMutation,
      variables: { token: token as string }
    })

    redirect(ctx, '/login')

    return {}
  }

  render() {
    return <div>Something went wrong ☹️</div>
  }
}
