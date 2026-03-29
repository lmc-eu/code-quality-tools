/* eslint-disable no-unused-vars, no-undef */

const schema = gql`
  type Query {
    user: UnknownUser
  }
`;

const fragment = graphql`
  fragment AuthorInfo on NonExistentAuthor {
    id
    name
  }
`;
