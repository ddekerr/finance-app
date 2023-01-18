import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { lazy } from 'react';

const LoginPage = lazy(() => import('pages/Login/Login'));
const RegistrationPage = lazy(() => import('pages/Registration/Registration'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="registration" element={<RegistrationPage />}></Route>
    </Routes>
  );
};
