import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { AuthProvider } from "../lib/AuthContext";
import "../tailwind.css";

export const Route = createRootRoute({
  component: RootLayout,
});

function Navigation() {
  return (
    <nav className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="text-slate-400 font-medium hover:text-white transition-colors"
          activeProps={{
            className: "!text-blue-500 font-semibold border-b-2 border-blue-500 pb-0.5",
          }}
        >
          Home
        </Link>
        <span className="text-slate-700">|</span>
        <Link
          to="/settings"
          className="text-slate-400 font-medium hover:text-white transition-colors"
          activeProps={{
            className: "!text-blue-500 font-semibold border-b-2 border-blue-500 pb-0.5",
          }}
        >
          Settings
        </Link>
      </div>
    </nav>
  );
}

function RootLayout() {
  return (
    <AuthProvider>
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <Outlet />
      </div>
    </AuthProvider>
  );
}
