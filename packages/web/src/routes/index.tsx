import { Route, Routes } from 'react-router-dom';
import Articles from '../screens/Articles';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/artigos" element={<Articles />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
