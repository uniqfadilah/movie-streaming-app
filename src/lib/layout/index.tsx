import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import useAuth from 'src/lib/hooks/useAuth';

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
  const { isLoggedIn: isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className=" bg-stone-900">
        <nav className=" container mx-auto text-white p-4 flex items-center justify-between">
          <button className="font-bold text-red-600 text-3xl">
            <Link to="/"> MYFLIX</Link>
          </button>
          {isAuthenticated && (
            <ul className="flex text-white items-center space-x-4 whitespace-nowrap ">
              {routes?.map((route: any, index: any) => (
                <li key={index} className="hidden md:inline">
                  <Link to={route?.url}>{route?.name}</Link>
                </li>
              ))}
              <li>
                <Popover className="relative">
                  <PopoverButton className="outline-none">
                    <RiAccountPinCircleFill size={25} />
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    anchor="bottom"
                    className="divide-y -translate-x-4 mt-8 divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                  >
                    <nav className="p-3 bg-stone-900 text-white">
                      <ul className="flex flex-col">
                        <li className="whitespace-nowrap border-b-transparent border-b hover:border-white transition-all">
                          <Link to="/favorites"> Favorites list</Link>
                        </li>
                        {routes?.map((route: any, index: any) => (
                          <li
                            key={index}
                            className="whitespace-nowrap border-b-transparent border-b hover:border-white transition-all inline md:hidden"
                          >
                            <Link to={route?.url}>{route?.name}</Link>
                          </li>
                        ))}
                        <li className="whitespace-nowrap border-b-transparent border-b hover:border-white transition-all">
                          <button onClick={handleLogout}>Logout</button>
                        </li>
                      </ul>
                    </nav>
                  </PopoverPanel>
                </Popover>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className="flex-1 container mx-auto p-4"> {children}</div>
    </div>
  );
};

export default Layout;
