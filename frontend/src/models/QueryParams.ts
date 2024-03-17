export interface IQueryParams {
  categoryId?: number;
  offset?: number;
  searchTerm?: string;
}

export const getQueryParamsString = ({
  categoryId,
  offset,
  searchTerm,
}: IQueryParams) => {
  const endpoint = [
    categoryId || offset || searchTerm ? '?' : '',
    categoryId ? `&category=${categoryId}` : '',
    offset ? `&offset=${offset}` : '',
    searchTerm ? '&q=' + encodeURIComponent(searchTerm) : '',
  ]
    .join('')
    .replace('?&', '?');

  return endpoint;
};
