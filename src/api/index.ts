import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

function sleep(ms = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchAllCharacters() {
  const response = await axios.get(`${BASE_URL}/character`);
  return response.data;
}

export async function fetchAllCharactersPaginated(page: number) {
  await sleep(300 * page);
  const response = await axios.get(`${BASE_URL}/character?page=${page}`);
  return response.data;
}

export async function fetchAllCharactersInfiniteScroll({ pageParam = 0 }) {
  return fetchAllCharactersPaginated(pageParam);
}
