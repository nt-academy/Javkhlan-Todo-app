import {
  CalendarIcon,
  GearIcon,
  ListChecksIcon,
  SignOutIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "@tanstack/react-router";
import type React from "react";
import { useAuth } from "../context/AuthContext";

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/login" });
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col justify-between p-5 h-screen sticky top-0 shrink-0">
      <div>
        <div className="flex items-center gap-3 p-3 bg-cyan-50/50 dark:bg-cyan-950/20 rounded-2xl mb-6">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400 shadow-sm"
          />
          <div className="overflow-hidden">
            <h2 className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
              {user?.name}
            </h2>
            <p className="text-xs text-cyan-600 dark:text-cyan-400 truncate">{user?.role}</p>
          </div>
        </div>

        <nav className="space-y-1">
          <Link
            to="/dashboard"
            activeProps={{
              className:
                "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400 font-bold",
            }}
            inactiveProps={{
              className: "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition"
          >
            <SquaresFourIcon size={20} /> Dashboard
          </Link>
          <Link
            to="/schedule"
            activeProps={{
              className:
                "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400 font-bold",
            }}
            inactiveProps={{
              className: "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition"
          >
            <CalendarIcon size={20} /> Schedule
          </Link>
          <Link
            to="/tasks"
            activeProps={{
              className:
                "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400 font-bold",
            }}
            inactiveProps={{
              className: "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition"
          >
            <ListChecksIcon size={20} /> Tasks
          </Link>
          <Link
            to="/settings"
            activeProps={{
              className:
                "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400 font-bold",
            }}
            inactiveProps={{
              className: "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition"
          >
            <GearIcon size={20} /> Settings
          </Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition font-medium w-full"
      >
        <SignOutIcon size={20} /> Logout
      </button>
    </aside>
  );
};
