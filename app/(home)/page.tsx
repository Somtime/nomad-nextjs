import Link from "next/link";

export const metadata = {
  title: 'Home',
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function Home() {
  const movies = await getMovies();
  return <div>{movies.map((movie: {id: number, title: string}) => (
    <li key={movie.id}>
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ))}</div>;
}
