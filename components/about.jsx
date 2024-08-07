import Image from "next/image";
import { BsTelephone, BsDownload } from "react-icons/bs";
import { BiEnvelope, BiBriefcase } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

export default function About({ data }) {

  const iconComponentMap = {
    BiBriefcase,
    BiEnvelope,
    BsTelephone,
    LiaDiscord,
    GrLocation,
    BsDownload
  };

  const IconComponentForResume = iconComponentMap[data?.content?.actionButton?.actionButtonIcon] || null;

  return (
    <div className="grid grid-cols-7 lg:gap-20 w-full pt-16 lg:pt-0">
      <div data-aos="fade-right" className="col-span-7 lg:col-span-4 flex flex-col items-start justify-center space-y-6 2xl:space-y-12">
        <div className="flex flex-col">
          <span className="text-[28px] font-bold">{data?.content?.name}</span>
          <span className="text-[20px] font-normal ">
            {data?.content?.designation}
          </span>
        </div>
        <div className="flex flex-col leading-none">
          {data?.content?.info?.map((infoItem, index) => {
            const IconComponent = iconComponentMap[infoItem.infoIcon] || null;
            return (
              <div key={index} className="text-sm sm:text-lg font-normal flex items-center space-x-2">
                {IconComponent && <IconComponent />}
                <div className="flex">
                  {infoItem?.infoText?.map((item, index) => (
                    <div key={index}>
                      {index > 0 && ", "}
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className={`text-sm sm:text-base font-normal ${data?.content?.description?.length > 1 ? 'space-y-2 2x:space-y-4' : ''}`}>
          {data?.content?.description.map((line, index) => (
            <div key={index}>
              {line}
            </div>
          ))}
        </div>
        <div className="flex flex-col leading-none">
          <a href={data?.content?.actionButton?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-lg font-semibold flex items-center justify-center space-x-2 border-gray-200 border-2 shadow-md hover:bg-gray-300 hover:scale-95 transition duration-700 ease-in-out rounded-md px-5 py-1.5"
            onClick={() => window.open(data?.content?.actionButton?.link, '_blank').focus()}>
            <span>{IconComponentForResume && <IconComponentForResume />}</span>
            <span>{data?.content?.actionButton?.text}</span>
          </a>
        </div>

      </div>
      <div data-aos="fade-left" className="lg:col-span-3 lg:flex items-center justify-center hidden">
        <Image src="/banner/banner1.png" alt="about" width={500} height={200} />
      </div>
    </div>
  );
}
