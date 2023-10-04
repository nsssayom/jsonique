
import React, { useEffect } from 'react';
import About from '@/components/about';
import Works from '@/components/Works';
import Academics from '@/components/academics';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const Layout = ({ children, data, activePage, setActivePage }) => {
  const totalNavbarItems = data?.nav?.navMenus?.length;

  // Define the handleWheel function to be used as the wheel event listener
  const handleWheel = (event) => {
    console.log('handleWheel called with activePage:', activePage);

    const delta = Math.sign(event.deltaY); // Positive for scroll down, negative for scroll up
    const nextPage = activePage + delta;
    console.log('nextPage:', nextPage, 'totalNavbarItems:', totalNavbarItems, delta);
    if (nextPage >= 0 && nextPage < totalNavbarItems) {
      setActivePage(nextPage);
    }
  };

  // Attach the wheel event listener when the component mounts
  useEffect(() => {
    console.log('useEffect called with activePage:', activePage);

    window.addEventListener('wheel', handleWheel);

    // Remove the wheel event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activePage]); // Make sure to include activePage in the dependency array


  return (
    <div className="flex flex-col h-screen font-mono select-none w-screen">
      <Header data={data} activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-grow flex items-center justify-center px-40 bg-white">
        {activePage === 0 && <About data={data?.pages[activePage]} />}
        {activePage === 1 && <Works data={data?.pages[activePage]} />}
        {activePage === 2 && <Academics data={data?.pages[activePage]} />}
        {activePage === 3 && <Research data={data?.pages[activePage]} />}
        {activePage === 4 && <Projects data={data?.pages[activePage]} />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;