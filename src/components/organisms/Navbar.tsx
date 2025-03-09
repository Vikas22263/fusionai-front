import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  ChartNoAxesCombined,
  House,
  TrendingUpDown,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "../ui/Modal";
import { LoginForm } from "../auth/LoginForm";
import { Button } from "../ui/Button";
import { useAppSelector, useAppDispatch } from "../../hooks/useReduxTypes";
import { Googlepopup, userDetails } from "../../store/Reducers/stateSlice";
import { asyncpersonHander } from "@/store/Actions/userProfileAction";
import ProfileDropdown from "../molecules/profileDropdown";
import { BrandLogo } from "@/assets";

const Navbar = () => {
  // Redux state and dispatch
  const { GooglepopupState, UserDetails } = useAppSelector(
    (state) => state.stateSlice
  );
  const dispatch = useAppDispatch();

  // Router navigation
  const navigate = useNavigate();

  // Local state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handlers
  const handleCloseLoginPopUp = () => {
    dispatch(Googlepopup());
  };

  const handleLogout = () => {
    localStorage.removeItem("acessToken");
    dispatch(userDetails(null));
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeNavigation = () => {
    setIsMenuOpen(false);
  };

  // Effect for handling message events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:5173") return;

      if (event.data.type === "UPDATE_STORE") {
        localStorage.setItem("acessToken", JSON.stringify(event.data.token));
        handleCloseLoginPopUp();
        dispatch(asyncpersonHander());
        navigate("/");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [dispatch, navigate]);

  return (
    <>
      <nav>
        <header
          className={`${
            isMenuOpen && "fixed"
          } w-full z-50 backdrop-blur-lg bg-[#161514] border-b border-zinc-600 rounded-md`}
        >
          <nav className="container mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center sm:p-2 p-2 md:p-0">
                <img className="w-16 h-auto" src={BrandLogo} alt="" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  AlgoFusionAi
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-3 font-inter font-extralight">
                {[
                  { to: "/", label: "Home", icon: <House height={18} /> },
                  {
                    to: "/FusionAi",
                    label: "FusionAi",
                    icon: <TrendingUpDown height={18} />,
                  },
                  {
                    to: "/pullersdrager",
                    label: "Pullers/Dragers",
                    icon: <ChartNoAxesCombined height={18} />,
                  },
                ].map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-white hover:text-purple-300 transition-colors flex gap-1 items-center ${
                        isActive
                          ? "border px-2 py-1 border-purple-400 rounded-md text-purple-400"
                          : ""
                      }`
                    }
                  >
                    {link.icon}
                    {link.label}
                  </NavLink>
                ))}

                {UserDetails ? (
                  <>
                    <ProfileDropdown userDetails={UserDetails} />
                 
                  </>
                ) : (
                  <button
                    className="bg-[#EDF1F4] text-black px-6 h-10 my-1 rounded-lg hover:opacity-90 transition-opacity"
                    onClick={handleCloseLoginPopUp}
                  >
                    Sign In
                  </button>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center">
                <button
                  className="text-gray-600 dark:text-gray-300"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 fixed bg-[#161514] inset-0 w-full h-screen top-[33px] pb-4">
                <div className="flex flex-col space-y-4 p-4 relative">
                  <button
                    className="text-gray-600 absolute top-2 right-3 dark:text-gray-300"
                    onClick={toggleMenu}
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {[
                    { to: "/", label: "Home", icon: <House height={18} /> },
                    {
                      to: "/FusionAi",
                      label: "FusionAi",
                      icon: <TrendingUpDown height={18} />,
                    },
                    {
                      to: "/pullersdrager",
                      label: "Pullers/Dragers",
                      icon: <ChartNoAxesCombined height={18} />,
                    },
                  ].map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={closeNavigation}
                      className={({ isActive }) =>
                        `text-white hover:text-purple-300 transition-colors flex gap-1 items-center ${
                          isActive
                            ? "border px-2 py-1 border-purple-400 rounded-md"
                            : ""
                        }`
                      }
                    >
                      {link.icon}
                      {link.label}
                    </NavLink>
                  ))}

                  <button
                    onClick={() => {
                      navigate("/FusionAi");
                      closeNavigation();
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </nav>
        </header>
      </nav>

      {/* Login Modal */}
      <Modal isOpen={GooglepopupState} onClose={handleCloseLoginPopUp}>
        <LoginForm onClose={handleCloseLoginPopUp} />
      </Modal>
    </>
  );
};

export default Navbar;
