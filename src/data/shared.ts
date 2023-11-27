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
  book: {
    authors: {
      id: string;
      name: string;
    }[];
    cover: string;
    slug: string;
    subtitle: string;
    title: string;
  };
};

export type { IElement, PaginationLink, ReadingState };
