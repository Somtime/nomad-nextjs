import styles from './home.module.css';
import Movie from "../components/movie/movie";

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
  return <div className={styles.container}>{movies.map((movie: { id: string, title: string, poster_path: string }) => (
    <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
  ))}</div>;
}
