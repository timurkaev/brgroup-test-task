import React from "react";

import { Layout } from "./layout/Layout";
import AppRouter from "./providers/router/AppRouter";

export const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};
