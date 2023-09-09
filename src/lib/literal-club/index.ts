import { cacheExchange, Client, fetchExchange, gql } from "@urql/core";

export const client = (token: string) =>
  new Client({
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    url: "https://literal.club/graphql/",
  });

const BookParts = gql`
  fragment BookParts on Book {
    cover
    gradientColors
    slug
    subtitle
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
