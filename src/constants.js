// eslint-disable-next-line import/prefer-default-export
export const { BASE_URL } = process.env;
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
