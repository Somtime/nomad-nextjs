import MovieInfo from "@/app/components/movie-info";
import MovieVideos from "@/app/components/movie-videos";
import { Suspense } from "react";

export const metadata = {
  title: 'Movie Detail',
}

export default async function MovieDetail({ params }: { params: Promise<{ id: number }> }): Promise<JSX.Element> {
  const { id } = await params;

  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback="영화 정보 로딩중...">
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback="영화 영상 정보 로딩중...">
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
