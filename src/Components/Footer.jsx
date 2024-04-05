import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white  shadow  dark:bg-gray-800 ">
        <div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
          <span className="text-sm   text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              MovieMadHouse™
            </Link>
            . All Rights Reserved. Developed by{" "}
            <Link
              to="https://nishantshiwakoti.com.np/"
              className="text-red-400 font-bold underline"
              target="_blank"
            >
              Nishant Siwakoti
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};
