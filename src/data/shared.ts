interface IElement {
  readonly as?: keyof HTMLElementTagNameMap;
}

interface PaginationLink {
  url: string;
  text?: string;
  srLabel?: string;
}

type ReadingState = {
  status: string;
  __typename: "ReadingState";
  book: {
    cover: string;
    gradientColors: [string];
    slug: string;
    subtitle: string;
    title: string;
    __typename: "Book";
  };
};

export type { IElement, PaginationLink, ReadingState };
