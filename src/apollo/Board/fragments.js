import { gql } from "apollo-boost";

export const BOARD_FRAGMENT = gql`
  fragment BoardFragment on Board {
    _id,
    title,
    createdBy{
      _id,
      firstName,
      lastName,
      email
    },
    columns{
      _id,
      tasks{
        _id,
        title
      }
    }
  }
`