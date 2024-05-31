export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ANIME: { input: any; output: any; }
  COMPLETED: { input: any; output: any; }
  CURRENT: { input: any; output: any; }
  DROPPED: { input: any; output: any; }
  IS_READING: { input: any; output: any; }
  MANGA: { input: any; output: any; }
  PAUSED: { input: any; output: any; }
  PLANNING: { input: any; output: any; }
  REPEATING: { input: any; output: any; }
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  authors: Array<Maybe<Author>>;
  cover: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Media = {
  __typename?: 'Media';
  title: Title;
};

export type MediaList = {
  __typename?: 'MediaList';
  id: Scalars['ID']['output'];
  media: Media;
  mediaId: Scalars['Int']['output'];
};

export type MediaListCollection = {
  __typename?: 'MediaListCollection';
  lists?: Maybe<Array<Maybe<MediaListGroup>>>;
};

export type MediaListGroup = {
  __typename?: 'MediaListGroup';
  entries?: Maybe<Array<Maybe<MediaList>>>;
};

export enum MediaListStatus {
  Completed = 'COMPLETED',
  Current = 'CURRENT',
  Dropped = 'DROPPED',
  Paused = 'PAUSED',
  Planning = 'PLANNING',
  Repeating = 'REPEATING'
}

export enum MediaType {
  Anime = 'ANIME',
  Manga = 'MANGA'
}

export type Query = {
  __typename?: 'Query';
  MediaListCollection: MediaListCollection;
  booksByReadingStateAndProfile?: Maybe<Array<Maybe<Book>>>;
};


export type QueryMediaListCollectionArgs = {
  status_in: Array<InputMaybe<MediaListStatus>>;
  type: MediaType;
  userId: Scalars['Int']['input'];
  userName: Scalars['String']['input'];
};


export type QueryBooksByReadingStateAndProfileArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  profileId: Scalars['String']['input'];
  readingStatus?: InputMaybe<Scalars['IS_READING']['input']>;
};

export type Title = {
  __typename?: 'Title';
  english: Scalars['String']['output'];
};
