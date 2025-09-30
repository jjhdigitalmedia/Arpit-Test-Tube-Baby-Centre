import { useLocation, Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import BackCover1 from '../assets/BackCover1.png'
const CurrentRoute = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean); // removes empty string from split
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="text-sm bg- text-white pt-20 pb-10 md:pb-20 md:pt-40 px-8 md:px-40  mx-auto bg-cover bg-center h-64 w-full"
    style={{ backgroundImage: `url(${BackCover1})` }}>
      <nav className="flex flex-wrap items-center space-x-1">
        <IoMdHome className="md:text-2xl text-white" />
        <Link to="/" className="text-white md:text-2xl hover:underline font-medium">
         Home
        </Link>

        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const name = segment.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

          return (
            <span key={path} className="flex items-center md:text-2xl space-x-1">
              <span>/</span>
              {isLast ? (
                <span className="font-semibold">{name}</span>

              ) : (
                <Link to={path} className="text-blue-600 hover:underline font-medium">
                  {name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default CurrentRoute;
