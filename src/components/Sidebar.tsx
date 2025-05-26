import { useState } from 'react';
import clsx from 'clsx';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

type Props = {
  menus: Array<{ title: string; url: string }>;
}

export default function Sidebar({ menus }: Props){
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);
  const closeSession = ()=>{
    toast.success("Login terminado!");
    navigate("/");
  }

  return (
    <div className='lg:basis-1/5'>
      {/* Toggle button on mobile */}
      <div className="md:hidden p-4 bg-white shadow flex justify-end">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 font-semibold"
        >
          {isOpen ? 'X' : 'Menu'}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/25 bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-200 ease-in-out',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen,
            'md:translate-x-0 md:static md:block': true,
          },
        )}
      >
        <div className='h-full flex flex-col'>
          <div className="p-4 text-2xl font-bold border-b border-gray-700">
            Master Web
          </div>
          <nav className="flex flex-col p-4 gap-y-2">
            {menus.map((props, index)=>(
              <NavLink 
                className={clsx("hover:bg-white/20 px-3 py-1 font-medium text-md rounded", { 
                  "bg-white/20": location.pathname === props.url  
                })} 
                key={index} 
                to={props.url}
              >
                {props.title}
              </NavLink>
            ))}
          </nav>
          <div className='grow'>{" "}</div>
          <div className="flex flex-col p-4 gap-y-2">
            <button 
              onClick={closeSession} 
              className="hover:bg-red-500 bg-red-500/70 px-3 py-1 font-medium text-md rounded text-start"
            >
              Sair
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

