import { API_URL } from "../(home)/page";

const getMovie = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
}

export default async function MovieInfo({ id }: { id: number }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>
}