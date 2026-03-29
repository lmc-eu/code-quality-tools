/* eslint-disable no-unused-vars, no-undef */

const query = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

const mutation = graphql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
    }
  }
`;
