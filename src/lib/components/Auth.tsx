import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const Auth = ({ children, redirectTo = '/login' }: PrivateRouteProps) => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default Auth;
