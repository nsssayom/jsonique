import Image from "next/image";
import { BsTelephone, BsDownload } from "react-icons/bs";
import { BiEnvelope, BiBriefcase } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { ImCalendar } from "react-icons/im";
import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { PiNotebook } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function Academics({ data }) {
  const [selectedWork, setSelectedWork] = useState(0);

  const iconComponentMap = {
    BiBriefcase,
    BiEnvelope,
    BsTelephone,
    LiaDiscord,
    GrLocation,
    BsDownload,
    GiGraduateCap,
    PiNotebook,
  };

  const IconComponentForTitle = iconComponentMap[data?.titleIcon] || null;

  return (
    <div className="space-y-20 h-full flex flex-col w-full pt-16 sm:pt-0">
      <div className="grid lg:grid-cols-2 lg:gap-20 grow">
        <div className="col-span-1 flex flex-col items-start justify-center space-y-6 2xl:space-y-12">
          <div className="flex flex-col leading-none w-full items-center justify-center space-y-8">
            <span className="flex items-center space-x-2 font-bold text-xl">
              <IconComponentForTitle />
              <span>{data?.title}</span>
            </span>

            <div className="w-full flex flex-col lg:hidden">
              {data?.content?.educations?.map((education, index) => (
                <div key={index} className="mb-4">
                  <div
                    key={index}
                    className={`text-base font-normal flex items-center justify-between text-center p-3 px-8 w-full cursor-pointer ${index === selectedWork
                        ? "bg-zinc-200 text-black rounded-t-md"
                        : "bg-zinc-100 text-black rounded-md shadow-md"
                      }`}
                    onClick={() => setSelectedWork(index)}
                  >
                    {education?.institute ? (
                      <div className="space-x-1">
                        <span>{education?.degree},</span>
                        <span>{education?.institute?.name}</span>
                      </div>
                    ) : (
                      education?.degree
                    )}
                    <span className=" text-xl">{selectedWork === index ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                  </div>
                  {selectedWork === index && (
                    <div
                      key={index}
                      className="space-y-4 p-8 border border-zinc-200 rounded-b-md shadow-md"
                    >
                      <div className="text-sm 2xl:text-base font-normal space-y-1">
                        {education?.duration && (
                          <div className="flex items-center space-x-1">
                            <ImCalendar />
                            <span>{education?.duration}</span>
                          </div>
                        )}
                        {education?.result && (
                          <div className="flex items-center space-x-1">
                            <PiNotebook />
                            <span>{education?.result}</span>
                          </div>
                        )}
                        {education?.location && (
                          <div className="flex items-center space-x-1">
                            <GrLocation />
                            <span>{education?.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm font-normal pl-5">
                        <ul className="list-disc">
                          {education?.description?.map((line, index) => (
                            <li key={index}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4 w-full lg:flex flex-col items-center justify-center hidden">
              {data?.content?.educations?.map((education, index) => (
                <div
                  key={index}
                  className={`text-base font-normal flex items-center justify-center text-center p-3 w-full rounded-3xl shadow-md cursor-pointer ${index === selectedWork
                      ? "bg-zinc-200 text-black"
                      : "bg-zinc-100 text-black"
                    }`}
                  onClick={() => setSelectedWork(index)}
                >
                  {education?.institute ? (
                    <div className="space-x-1">
                      <span>{education?.degree},</span>
                      <span>{education?.institute?.name}</span>
                    </div>
                  ) : (
                    education?.degree
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:flex flex-col items-center justify-center space-y-12 hidden">
          {data?.content?.educations?.map(
            (education, index) =>
              index === selectedWork && (
                <div key={index} className="space-y-4">
                  {education?.institute ? (
                    <div className="text-xl flex flex-col items-start justify-center">
                      <span className="font-semibold">{education?.degree}</span>
                      <a
                        href={education?.institute?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-lg"
                      >
                        {education?.institute?.name}
                      </a>
                    </div>
                  ) : (
                    <span>{education?.degree}</span>
                  )}
                  <div className="text-sm 2xl:text-base font-normal space-y-1">
                    {education?.duration && (
                      <div className="flex items-center space-x-1">
                        <ImCalendar />
                        <span>{education?.duration}</span>
                      </div>
                    )}
                    {education?.result && (
                      <div className="flex items-center space-x-1">
                        <PiNotebook />
                        <span>{education?.result}</span>
                      </div>
                    )}
                    {education?.location && (
                      <div className="flex items-center space-x-1">
                        <GrLocation />
                        <span>{education?.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-normal pl-5">
                    <ul className="list-disc">
                      {education?.description?.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
