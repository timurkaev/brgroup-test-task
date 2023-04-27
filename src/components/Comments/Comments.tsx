import React from "react";
import styles from "./Comments.module.css";
import { NewsInterface } from "../../interfaces/news.interface";
import { CommentsItem } from "./CommentsItem";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Button } from "../ui/Button/Button";
import { Loader } from "../ui/Loader/Loader";

interface NewsCommentsProps {
  news: NewsInterface;
  comments: NewsInterface[];
  getComments: () => void;
}

export const Comments: React.FC<NewsCommentsProps> = ({
  news,
  comments,
  getComments,
}): JSX.Element | null => {
  const { commentsLoading } = useAppSelector((state) => state.comments);

  return news.descendants !== 0 ? (
    <div className={styles.comments}>
      <h2 className={styles.title}>{news.descendants} Comments</h2>
      <Button size="medium" color="primary" onClick={getComments}>
        Upload comments
      </Button>
      {commentsLoading ? (
        <Loader />
      ) : (
        <div className={styles.commentsList}>
          {comments.map((comment) => (
            <CommentsItem level={1} key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  ) : null;
};
