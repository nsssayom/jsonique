import Image from "next/image";
import { BsTelephone, BsDownload } from "react-icons/bs";
import { BiEnvelope, BiBriefcase } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { ImCalendar } from "react-icons/im";
import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { PiNotebook } from "react-icons/pi";

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
    PiNotebook
  };

  const IconComponentForTitle = iconComponentMap[data?.titleIcon] || null;

  return (
    <div className="space-y-20 h-full flex flex-col">
      <div className="grid grid-cols-2 gap-20 grow">
        <div className="col-span-1 flex flex-col items-start justify-center space-y-6 2xl:space-y-12">
          <div className="flex flex-col leading-none w-full items-center justify-center space-y-8">
            <span className="flex items-center space-x-2 font-bold text-xl">
              <IconComponentForTitle />
              <span>{data?.title}</span>
            </span>
            <div className="space-y-4 w-full flex flex-col items-center justify-center text-center">
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
        <div className="col-span-1 flex flex-col items-center justify-center space-y-12">
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
