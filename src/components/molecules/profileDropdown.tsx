import { userDetails } from "@/store/Reducers/stateSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = (userdetils) => {
  const { name, email, profileimage } = userdetils.userDetails ||userdetils;
  const btnRef = useRef(null);
  const openDropDown = () => {
    if (btnRef.current) {
      btnRef.current.classList.toggle("hidden");
    }
  };
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout = () => {
    localStorage.removeItem("acessToken");
    dispatch(userDetails(null));
    navigate("/");
  };
  return (
    <div>
      <div className="relative" onClick={openDropDown}>
        <button
          data-dropdown-toggle="dropdownAvatar"
          className="flex  text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src={profileimage}
            alt="user photo"
          />
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownAvatar"
          ref={btnRef}
          className="z-10 hidden absolute rig right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <div><span className="text-black">{name}</span></div>
            <div className="font-medium truncate">{email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                FusionAi
              </a>
            </li>
     
          </ul>
          <div className="py-2">
            <span
              onClick={handleLogout}
              className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
