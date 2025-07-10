
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react'; 

const FooterNav = () => {
const pages = [
  { id: 1, name: 'Welcome', path: '/' },
  { id: 2, name: 'Login', path: '/login' },
  { id: 3, name: 'Register', path: '/register' },
  { id: 4, name: 'Account Settings', path: '/settings' },
];
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = pages.findIndex((p) => p.path === location.pathname);
  const currentPage = pages[currentIndex];

  const goToPrevious = () => {
    if (currentIndex > 0) navigate(pages[currentIndex - 1].path);
  };

  const goToNext = () => {
    if (currentIndex < pages.length - 1) navigate(pages[currentIndex + 1].path);
  };

  return (
    <footer className=" w-full bg-white  py-2 flex items-center justify-between px-6 ">
      <button onClick={() => navigate('/')} className="text-gray-700">
        <Home size={24} />
      </button>
      <div className="flex items-center gap-4">
        <button onClick={goToPrevious} disabled={currentIndex === 0} className="text-gray-700 disabled:opacity-40">
          <ArrowLeft size={24} />
        </button>
        <span className="text-sm text-gray-600">
           {currentPage?.id} of 4
        </span>
        <button onClick={goToNext} disabled={currentIndex === pages.length - 1} className="text-gray-700 disabled:opacity-40">
          <ArrowRight size={24} />
        </button>
      </div>
    </footer>
  );
};

export default FooterNav;
