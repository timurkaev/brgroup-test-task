import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../utils/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={<div>{element}</div>} />
      ))}
    </Routes>
  );
};

export default AppRouter;
