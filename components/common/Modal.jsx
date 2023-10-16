// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, data, activePage, setActivePage }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 left-0 h-full bg-white p-4 w-[22rem] transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-0'}`}>
      <button onClick={onClose} className="mt-4 p-2 bg-gray-300 rounded">
        Close
      </button>
      <h1 className="text-3xl font-bold">{data?.title}</h1>
        <nav>
          <ul className="flex flex-col space-y-6">
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
  );
};

export default Modal;
