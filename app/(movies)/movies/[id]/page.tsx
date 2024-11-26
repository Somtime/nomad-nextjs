import MovieInfo, { getMovie } from "@/app/components/movie/movie-info";
import MovieVideos from "@/app/components/movie/movie-videos";
import { Suspense } from "react";

interface IParams {
  params: { id: string }
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback="영화 정보 로딩중...">
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback="영화 영상 정보 로딩중...">
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
