
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">

          {/* LPU Logo and Name */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-all"
          >
            <img
              src="/lpu-logo.png"
              alt="LPU Logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="text-xl font-bold text-primary">
              LPU
            </h1>
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">

            <Link
              to="/settings"
              className="btn btn-sm gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to="/profile" className="btn btn-sm gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="btn btn-sm gap-2"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
