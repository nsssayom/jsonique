
import React, { useEffect, useState, useRef } from 'react';
import About from '@/components/about';
import Works from '@/components/Works';
import Skills from '@/components/skills';
import Academics from '@/components/academics';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Modal from '../Modal';

const Layout = ({ children, data, activePage, setActivePage }) => {

  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const skillsRef = useRef(null);
  const academicsRef = useRef(null);
  const researchRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

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

    const addWheelListener = () => {
      if (window.innerWidth >= 1024) {
        window.addEventListener('wheel', handleWheel);
      }
    };

    addWheelListener();

    // Remove the wheel event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activePage]); // Make sure to include activePage in the dependency array

  useEffect(() => {
    AOS.init({
      duration: 350, // Animation duration in milliseconds
      once: true, // Whether animations should only happen once while scrolling down
    });
  }, []);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col h-screen font-mono select-none w-screen">
      <Header data={data} activePage={activePage} setActivePage={setActivePage} onToggleModal={handleToggleModal} />
      <div className="flex-grow lg:flex items-center justify-center px-5 sm:px-20 lg:px-30 xl:px-40 bg-white hidden">
        {activePage === 0 && <About data={data?.pages[activePage]} />}
        {activePage === 1 && <Works data={data?.pages[activePage]} />}
        {activePage === 2 && <Academics data={data?.pages[activePage]} />}
        {activePage === 3 && <Research data={data?.pages[activePage]} />}
        {activePage === 4 && <Projects data={data?.pages[activePage]} />}
      </div>
      <div className="flex flex-col items-center justify-center px-10 sm:px-20 lg:px-30 xl:px-40 bg-white lg:hidden text-black">
        <div ref={aboutRef}>
          <About data={data.pages[0]} />
        </div>
        <div ref={worksRef}>
          <Works data={data.pages[1]} />
        </div>
        <div ref={skillsRef} className="lg:hidden">
          <Skills data={data.pages[1]} />
        </div>
        <div ref={academicsRef}>
          <Academics data={data.pages[2]} />
        </div>
        <div ref={researchRef}>
          <Research data={data.pages[3]} />
        </div>
        <div ref={projectsRef}>
          <Projects data={data.pages[4]} />
        </div>
      </div>
      <div className="hidden lg:block"><Footer data={data} activePage={activePage} setActivePage={setActivePage} /></div>
      <div className='lg:hidden'>    <Modal isOpen={isModalOpen} onClose={handleToggleModal} data={data} activePage={activePage} setActivePage={setActivePage} aboutRef={aboutRef} worksRef={worksRef} skillsRef={skillsRef} academicsRef={academicsRef} researchRef={researchRef} projectsRef={projectsRef} scrollToRef={scrollToRef} />
</div>
    </div>
  );
};

export default Layout;