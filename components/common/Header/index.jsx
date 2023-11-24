import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faLinkedin, faFile } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGooglescholar } from "react-icons/si";
import { useState, useEffect } from 'react';

const Header = ({ data, activePage, setActivePage, onToggleModal }) => {

  const progressBarWidth = (100 / data?.nav?.navMenus?.length) * (activePage + 1); // Calculate progress
  const [showTitle, setShowTitle] = useState(false);

  const handleNavItemClick = (index) => {
    setActivePage(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 45; // Adjust this value to change when the title appears

      if (scrollPosition > scrollThreshold) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className=" text-black bg-gradient-to-b to-white from-[#EBEBEB] fixed lg:static w-full">
      <div className="flex justify-between items-center h-[55px] px-8 sm:px-20">
        <h1 className="text-2xl sm:text-3xl font-bold lg:hidden">{showTitle && data?.title}</h1>
        <h1 className="text-2xl sm:text-3xl font-bold hidden lg:block">{data?.title}</h1>
        <nav className='hidden lg:block'>
          <ul className="flex space-x-6">
            {data?.nav?.navMenus?.map((item, index) => (
              <li key={index} className="text-base">
                <button
                  className={`${index === activePage ? 'font-bold' : 'font-normal'
                    }`}
                  onClick={() => handleNavItemClick(index)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <GiHamburgerMenu className="lg:hidden text-3xl" onClick={onToggleModal} />
        <div className="space-x-6 lg:flex items-center hidden">
          {data?.nav?.navIcons?.map((link, index) => (
            <a key={index} href={link.url} className="text-2xl flex items-center">
              {link.name === 'github' && <FaGithub />}
              {link.name === 'linkedin' && <FaLinkedin />}
              {link.name === 'scholar' && <SiGooglescholar />}
            </a>
          ))}
        </div>
      </div>
      <div
        className="h-[10px] bg-[#e3c1e8] hidden lg:block"
        style={{ width: `${progressBarWidth}%`, transition: "width 0.3s ease-in-out", }}
      />
    </header>
  );
};

export default Header;
