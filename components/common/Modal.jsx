// components/Modal.js
import React from 'react';
import { GiCancel } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faLinkedin, faFile } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

const Modal = ({ isOpen, onClose, data, activePage, setActivePage, aboutRef, worksRef, skillsRef, academicsRef, researchRef, projectsRef, scrollToRef }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 h-full bg-white text-black p-4 w-[20rem] border-r border-gray-300 flex flex-col justify-between transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-0'}`}>
      <div className="flex flex-col space-y-10 ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{data?.title}</h1>
          {/* <GiCancel onClick={onClose} /> */}
        </div>
        <nav>
          <ul className="flex flex-col space-y-5">
            {/* {data?.nav?.navMenus?.map((item, index) => (
              <li key={index} className="text-base">
                <button
                  className={`${index === activePage ? 'font-bold' : 'font-normal'
                    }`}
                  onClick={() => {
                    onClose();
                    setActivePage(index);
                    switch (index) {
                      case 0:
                        scrollToRef(aboutRef);
                        break;
                      case 1:
                        scrollToRef(worksRef);
                        break;
                      case 2:
                        scrollToRef(academicsRef);
                        break;
                      case 3:
                        scrollToRef(researchRef);
                        break;
                      case 4:
                        scrollToRef(projectsRef);
                        break;
                      default:
                        break;
                    }
                  }
                  }
                >
                  {item.name}
                </button>
              </li>
            ))} */}
            {data?.nav?.navMenus?.map((item, index) => {
  if (index < 2) {
    return (
      <li key={index} className="text-base">
        <button
          className={`${index === activePage ? 'font-bold' : 'font-normal'}`}
          onClick={() => {
            onClose();
            setActivePage(index);
            switch (index) {
              case 0:
                scrollToRef(aboutRef);
                break;
              case 1:
                scrollToRef(worksRef);
                break;
              default:
                break;
            }
          }}
        >
          {item.name}
        </button>
      </li>
    );
  }
  return null; // Render nothing for indices other than 0 and 1
})}
      <li className="text-base lg:hidden">
        <button
          className={`${activePage === 100 ? 'font-bold' : 'font-normal'}`}
          onClick={() => {
            onClose();
            setActivePage(100);
            scrollToRef(skillsRef);
          }}
        >
          Skills
        </button>
      </li>
            {data?.nav?.navMenus?.map((item, index) => {
  if (index > 1) {
    return (
      <li key={index} className="text-base">
        <button
          className={`${index === activePage ? 'font-bold' : 'font-normal'}`}
          onClick={() => {
            onClose();
            setActivePage(index);
            switch (index) {
              case 2:
                scrollToRef(academicsRef);
                break;
              case 3:
                scrollToRef(researchRef);
                break;
              case 4:
                scrollToRef(projectsRef);
                break;
              default:
                break;
            }
          }}
        >
          {item.name}
        </button>
      </li>
    );
  }
  return null; // Render nothing for indices other than 0 and 1
})}
          </ul>
        </nav>
      </div>

      <div className="space-x-6 flex items-center justify-center">
        {data?.nav?.navIcons?.map((link, index) => (
          <a key={index} href={link.link} className="text-2xl flex items-center" target="_blank">
            {link.name === 'github' && <FaGithub />}
            {link.name === 'linkedin' && <FaLinkedin />}
            {link.name === 'scholar' && <SiGooglescholar />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Modal;
