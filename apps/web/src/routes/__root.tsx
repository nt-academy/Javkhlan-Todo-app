import { createRootRoute, Navigate, Outlet, useLocation } from "@tanstack/react-router";
import { Suspense } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";

function RootComponent() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  if (location.pathname === "/login") {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen bg-cyan-50/30 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<div className="p-8 text-center text-cyan-600">Loading...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
