export type Maybe<T> = T | null;

export interface ChangePasswordInput {
  password: string;

  token: string;
}

export interface RegisterInput {
  password: string;

  firstName: string;

  lastName: string;

  email: string;
}

// ====================================================
// Documents
// ====================================================

export type ConfirmAccountVariables = {
  token: string;
};

export type ConfirmAccountMutation = {
  __typename?: "Mutation";

  confirmAccount: boolean;
};

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: "Mutation";

  login: Maybe<LoginLogin>;
};

export type LoginLogin = {
  __typename?: "User";

  id: string;

  fullName: string;

  firstName: string;

  lastName: string;

  email: string;
};

export type RegisterVariables = {
  data: RegisterInput;
};

export type RegisterMutation = {
  __typename?: "Mutation";

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  fullName: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const ConfirmAccountDocument = gql`
  mutation ConfirmAccount($token: String!) {
    confirmAccount(token: $token)
  }
`;
export class ConfirmAccountComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ConfirmAccountMutation, ConfirmAccountVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmAccountMutation, ConfirmAccountVariables>
        mutation={ConfirmAccountDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ConfirmAccountProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmAccountMutation, ConfirmAccountVariables>
> &
  TChildProps;
export type ConfirmAccountMutationFn = ReactApollo.MutationFn<
  ConfirmAccountMutation,
  ConfirmAccountVariables
>;
export function ConfirmAccountHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmAccountMutation,
        ConfirmAccountVariables,
        ConfirmAccountProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmAccountMutation,
    ConfirmAccountVariables,
    ConfirmAccountProps<TChildProps>
  >(ConfirmAccountDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      fullName
      firstName
      lastName
      email
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      fullName
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
