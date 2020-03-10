import React, { FunctionComponent } from "react";
import * as GQL from "../../../core/generated-graphql";
import { MovieCard } from "../../Movies/MovieCard";

interface ISceneMoviePanelProps {
  scene: GQL.SceneDataFragment;
}

export const SceneMoviePanel: FunctionComponent<ISceneMoviePanelProps> = (props: ISceneMoviePanelProps) => {
  const cards = props.scene.movies.map((sceneMovie) => (
    <MovieCard key={sceneMovie.movie.id} movie={sceneMovie.movie} sceneIndex={sceneMovie.scene_index} />
  ));

  return (
    <>
      <div className="grid">
        {cards}
      </div>
    </>
  );
};
