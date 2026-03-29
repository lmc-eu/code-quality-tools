/* eslint-disable no-unused-vars */

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { gql } from 'apollo-client';

const UserQuery = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

export function UserProfile({ userId }: { userId: string }) {
  return <div>User: {userId}</div>;
}
