import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faLinkedin, faFile } from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = ({ data, activePage, setActivePage }) => {

  const progressBarWidth = (100 / data?.nav?.navMenus?.length) * (activePage + 1); // Calculate progress

  const handleNavItemClick = (index) => {
    setActivePage(index);
  };

  return (
    <header className=" text-black bg-gradient-to-b to-white from-[#EBEBEB]">
      <div className="flex justify-between items-center h-[55px] px-20">
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <nav>
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
        <div className="space-x-6 flex items-center">
          {data?.nav?.navIcons?.map((link, index) => (
            <a key={index} href={link.url} className="text-2xl flex items-center">
              {link.name === 'github' && <FaGithub />}
              {link.name === 'linkedin' && <FaLinkedin />}
              {link.name === 'resume' && <FontAwesomeIcon icon={faFile} />}
            </a>
          ))}
        </div>
      </div>
      <div
        className="h-[10px] bg-[#e3c1e8]"
        style={{ width: `${progressBarWidth}%` }}
      />
    </header>
  );
};

export default Header;