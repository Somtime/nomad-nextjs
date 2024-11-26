import { API_URL } from "../../(home)/page";
import styles from "./movie-info.module.css";

export const getMovie = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <div className={styles.container}>
    <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
    <div className={styles.info}>
      <h2 className={styles.title}>{movie.title}</h2>
      <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
    </div>
  </div>
}