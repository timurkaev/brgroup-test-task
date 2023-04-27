import React from "react";
import styles from "./News.module.css";
import { NewsItem } from "./NewsItem";
import { NewsInterface } from "../../interfaces/news.interface";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Button } from "../ui/Button/Button";
import { Loader } from "../ui/Loader/Loader";

interface NewsProps {
  getNews: () => void;
}

export const News: React.FC<NewsProps> = ({ getNews }): JSX.Element => {
  const { news, isLoading } = useAppSelector((state) => state.news);

  const sortedNewsByDate: NewsInterface[] = [...news]?.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
  );

  return (
    <div className={styles.news}>
      <Button disabled={isLoading} size="medium" color="primary" onClick={getNews}>
        Update news
      </Button>
      {isLoading ? (
        <Loader />
      ) : (
        sortedNewsByDate.map((n: NewsInterface) => (
          <NewsItem key={n?.id} type={"newsItem"} news={n} />
        ))
      )}
    </div>
  );
};
