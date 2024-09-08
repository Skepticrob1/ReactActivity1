import "./App.css";
import Dashboard from './views/dashboard/dashboard.component';
import Settings from './views/settings/settings.component';
import Errorpage from "./views/404/404.component";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard />} /> //Render Dashboard if route http://localhost:3000/dashboard
      <Route exact path="/Settings" element={<Settings />} /> //Render Dashboard if route http://localhost:3000/settings
      <Route path="*" element={<Errorpage />} /> //Element to be render if path cannot be found / 404
    </Routes>
  );
}

export default App;
