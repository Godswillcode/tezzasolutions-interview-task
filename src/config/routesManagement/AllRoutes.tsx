import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { routePath } from "./routePath";
import Login from "features/authentication/pages/Login";
import Workspace from "features/workspace/Workspace";
import Clients from "features/clients/pages/Clients";
import ClientProfile from "features/clients/pages/ClientProfile";
import { FallbackRoute } from "./FallbackRoute";

export const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routePath.login} element={<Login />} />
        <Route path={routePath.workspace} element={<Workspace />} />
        <Route path={routePath.clients} element={<Clients />} />
        <Route
          path={routePath.clientProfile().format}
          element={<ClientProfile />}
        />
        <Route path={routePath.fallbackRoute} element={<FallbackRoute />} />
        <Route
          path={routePath.home}
          element={<Navigate to={routePath.login} />}
        />
      </Routes>
    </Router>
  );
};
