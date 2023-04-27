import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { NewsItem } from "../News/NewsItem";
import { Comments } from "../Comments/Comments";
import { Loader } from "../ui/Loader/Loader";
import { fetchNewsById } from "../../providers/redux/slices/newsSlice";
import { fetchComments } from "../../providers/redux/slices/commentsSlice";

export const SingleNews: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const { newsById, isLoading, params } = useAppSelector((state) => state.news);
  const { comments } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  const getNewsById = (): void => {
    dispatch(fetchNewsById(Number(id)));
  };

  const getComments = (): void => {
    dispatch(fetchComments(Number(id)));
  };

  React.useEffect(() => {
    getNewsById();
    getComments();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <NewsItem type={"newsById"} news={newsById} />
      <Comments getComments={() => getComments()} comments={comments} news={newsById} />
    </div>
  );
};
