import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { RiAccountPinCircleFill } from 'react-icons/ri';
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const routes = [
    {
      name: 'Popular Movies',
      url: '/popular',
    },
    {
      name: 'Now Playing',
      url: '/now-playing',
    },
    {
      name: 'Upcoming Movies',
      url: '/upcoming',
    },
    {
      name: 'Top Rated Movies',
      url: '/top-rated',
    },
  ];
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className=" bg-stone-900">
        <nav className=" container mx-auto text-white p-4 flex items-center justify-between">
          <button className="font-bold text-red-600 text-3xl">
            <Link to="/"> MYFLIX</Link>
          </button>
          <ul className="flex text-white items-center space-x-4 whitespace-nowrap ">
            {routes?.map((route: any, index: any) => (
              <li key={index} className="hidden md:inline">
                <Link to={route?.url}>{route?.name}</Link>
              </li>
            ))}
            <li>
              <RiAccountPinCircleFill size={25} />
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 container mx-auto p-4"> {children}</div>
    </div>
  );
};

export default Layout;
