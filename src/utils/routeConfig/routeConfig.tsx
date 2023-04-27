import { RouteProps } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { NewsPage } from "../../pages/NewsPage";
import { PageNotFound } from "../../pages/404";

export enum AppRoutes {
  MAIN = "main",
  NEWS = "news",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.NEWS]: "/news/:id",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NEWS]: {
    path: RoutePath.news,
    element: <NewsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <PageNotFound />,
  },
};
