import { Key } from "react";
import { API_URL } from "../../(home)/page";
import styles from "./movie-videos.module.css";

const getVideos = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <div className={styles.container}>
    {videos.map((video: { id: Key | null | undefined; key: string; name: string | undefined; }) =>
      <iframe
        key={video.id}
        src={`https://youtube.com/embed/${video.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        name={video.name}
      />
    )}
  </div>
}