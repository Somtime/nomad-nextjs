import { API_URL } from "../(home)/page";

const getVideos = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
}

export default async function MovieVideos({ id }: { id: number }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}