import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  JsonScalar: any;
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<Scalars['JsonScalar']>;
  content_string: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items: Maybe<Array<Maybe<ContentItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id: Maybe<Scalars['Int']>;
  isFolder: Maybe<Scalars['Boolean']>;
  isStartpage: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['Int']>;
  position: Maybe<Scalars['Int']>;
  published: Maybe<Scalars['Boolean']>;
  slug: Maybe<Scalars['String']>;
  uuid: Maybe<Scalars['String']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  component: Maybe<Scalars['String']>;
  content: Maybe<Scalars['BlockScalar']>;
  hero: Maybe<Scalars['BlockScalar']>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<PageComponent>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items: Maybe<Array<Maybe<PageItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode: Maybe<ContentItem>;
  ContentNodes: Maybe<ContentItems>;
  DatasourceEntries: Maybe<DatasourceEntries>;
  Datasources: Maybe<Datasources>;
  Links: Maybe<LinkEntries>;
  PageItem: Maybe<PageItem>;
  PageItems: Maybe<PageItems>;
  Space: Maybe<Space>;
  Tags: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs: Maybe<Scalars['String']>;
  by_uuids: Maybe<Scalars['String']>;
  by_uuids_ordered: Maybe<Scalars['String']>;
  excluding_fields: Maybe<Scalars['String']>;
  excluding_ids: Maybe<Scalars['String']>;
  excluding_slugs: Maybe<Scalars['String']>;
  fallback_lang: Maybe<Scalars['String']>;
  filter_query: Maybe<Scalars['JsonScalar']>;
  first_published_at_gt: Maybe<Scalars['String']>;
  first_published_at_lt: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['String']>;
  is_startpage: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  published_at_gt: Maybe<Scalars['String']>;
  published_at_lt: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  search_term: Maybe<Scalars['String']>;
  sort_by: Maybe<Scalars['String']>;
  starts_with: Maybe<Scalars['String']>;
  with_tag: Maybe<Scalars['String']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource: Maybe<Scalars['String']>;
  dimension: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids: Maybe<Array<Maybe<Scalars['String']>>>;
  search: Maybe<Scalars['String']>;
};


export type QueryTypeLinksArgs = {
  paginated: Maybe<Scalars['Boolean']>;
  starts_with: Maybe<Scalars['String']>;
};


export type QueryTypePageItemArgs = {
  find_by: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs: Maybe<Scalars['String']>;
  by_uuids: Maybe<Scalars['String']>;
  by_uuids_ordered: Maybe<Scalars['String']>;
  excluding_fields: Maybe<Scalars['String']>;
  excluding_ids: Maybe<Scalars['String']>;
  excluding_slugs: Maybe<Scalars['String']>;
  fallback_lang: Maybe<Scalars['String']>;
  filter_query: Maybe<Scalars['JsonScalar']>;
  first_published_at_gt: Maybe<Scalars['String']>;
  first_published_at_lt: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['String']>;
  is_startpage: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  published_at_gt: Maybe<Scalars['String']>;
  published_at_lt: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  search_term: Maybe<Scalars['String']>;
  sort_by: Maybe<Scalars['String']>;
  starts_with: Maybe<Scalars['String']>;
  with_tag: Maybe<Scalars['String']>;
};


export type QueryTypeTagsArgs = {
  starts_with: Maybe<Scalars['String']>;
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type PageItemQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type PageItemQuery = { __typename?: 'QueryType', PageItem: Maybe<{ __typename?: 'PageItem', uuid: Maybe<string>, content: Maybe<{ __typename?: 'PageComponent', hero: Maybe<any>, _editable: Maybe<string> }> }> };

export type PageItemsQueryVariables = Exact<{
  perPage: Maybe<Scalars['Int']>;
}>;


export type PageItemsQuery = { __typename?: 'QueryType', PageItems: Maybe<{ __typename?: 'PageItems', total: Maybe<number>, items: Maybe<Array<Maybe<{ __typename?: 'PageItem', uuid: Maybe<string>, full_slug: Maybe<string>, slug: Maybe<string> }>>> }> };


export const PageItemDocument = gql`
    query pageItem($slug: ID!) {
  PageItem(id: $slug) {
    content {
      hero
      _editable
    }
    uuid
  }
}
    `;
export const PageItemsDocument = gql`
    query pageItems($perPage: Int) {
  PageItems(per_page: $perPage) {
    items {
      uuid
      full_slug
      slug
    }
    total
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageItem(variables: PageItemQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageItemQuery>(PageItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageItem');
    },
    pageItems(variables?: PageItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageItemsQuery>(PageItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageItems');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;