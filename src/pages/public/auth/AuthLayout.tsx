import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <Navigate to={"/home"} />
  ) : (
    <section>
      <Outlet />
    </section>
  );
}
