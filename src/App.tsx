import { Route, Routes } from "react-router-dom";

import SignInPage from "./pages/public/auth/SignInPage.tsx";
import SignUpPage from "./pages/public/auth/SignUpPage.tsx";
import AuthLayout from "./pages/public/auth/AuthLayout.tsx";
import HomePage from "./pages/private/HomePage.tsx";
import RootLayout from "./pages/private/RootLayout.tsx";

export default function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path={"/sign-in"} element={<SignInPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  );
}
