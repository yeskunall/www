import { cacheExchange, Client, fetchExchange, gql } from "@urql/core";

export const client = new Client({
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${import.meta.env.LITERAL_CLUB_ACCESS_TOKEN}`,
    },
  },
  requestPolicy: "cache-and-network",
  url: "https://literal.club/graphql/",
});

const BookParts = gql`
  fragment BookParts on Book {
    authors {
      id
      name
    }
    cover
    slug
    title
  }
`;

const ReadingStateParts = gql`
  fragment ReadingStateParts on ReadingState {
    status
  }
`;

export const myBooksQuery = gql`
  query myReadingStates {
    myReadingStates {
      ...ReadingStateParts
      book {
        ...BookParts
      }
    }
  }

  ${BookParts}
  ${ReadingStateParts}
`;
