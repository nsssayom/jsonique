// components/Modal.js
import React from 'react';
import { GiCancel } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faLinkedin, faFile } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

const Modal = ({ isOpen, onClose, data, activePage, setActivePage }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 h-full bg-white p-4 w-[20rem] border-r border-gray-300 flex flex-col justify-between transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-0'}`}>
      <div className="flex flex-col space-y-10 ">
      <div  className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{data?.title}</h1>
        {/* <GiCancel onClick={onClose} /> */}
      </div>
        <nav>
          <ul className="flex flex-col space-y-5">
            {data?.nav?.navMenus?.map((item, index) => (
              <li key={index} className="text-base">
                <button
                  className={`${index === activePage ? 'font-bold' : 'font-normal'
                    }`}
                  onClick={() => setActivePage(index)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

        <div className="space-x-6 flex items-center justify-center">
          {data?.nav?.navIcons?.map((link, index) => (
            <a key={index} href={link.url} className="text-2xl flex items-center">
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
