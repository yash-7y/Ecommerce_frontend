import type { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;// to check whether logged in or not
  adminRoute?: boolean; // for checking whethe a route is admin accessible(AA) or not, other words: if route is AA, then can normaluser can't access it
  isAdmin?: boolean; // for checking whether user is admin or not
  redirect?: string;
}

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/",
}: Props) => {
    if(!isAuthenticated) return <Navigate to={redirect}/>
    if(adminRoute && !isAdmin) return <Navigate to={redirect}/>
  return children?children:<Outlet/>;
};

export default ProtectedRoute;
