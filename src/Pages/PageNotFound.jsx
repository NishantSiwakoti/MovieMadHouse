import { Link } from "react-router-dom";

import PagenotFound from "../assets/images/pagenot.jpg";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / MovieMadHouse`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl tetx-gray-7000 font-bold my-10 dark:text-white">
            404, Oops! Page Not Found
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PagenotFound}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Back to MovieMadHouse
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
