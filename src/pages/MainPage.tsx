import React from "react";
import { News } from "../components/News/News";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchNews } from "../providers/redux/slices/newsSlice";

export const MainPage: React.FC = (): JSX.Element => {
  const { news } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const getNews = (): void => {
    dispatch(fetchNews());
  };

  React.useEffect(() => {
    if (news.length === 0) {
      getNews();
    }
    const interval = setInterval(() => {
      getNews();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <News getNews={getNews} />;
};
