import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-5">
      <NavLink
        className="m-3 p-4 text-xl bg-blue-400 dark:bg-blue-700 hover:bg-blue-600 hover:dark:bg-blue-900 rounded-md font-medium text-white"
        to={"/"}
      >
        All Entries
      </NavLink>
      <NavLink
        className="m-3 p-4 text-xl bg-blue-400 dark:bg-blue-700 hover:bg-blue-600 hover:dark:bg-blue-900 rounded-md font-medium text-white"
        to={"/create"}
      >
        New Entry
      </NavLink>
    </nav>
  );
}
