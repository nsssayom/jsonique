import Image from "next/image";
import { BsTelephone, BsDownload, BsBook } from "react-icons/bs";
import { BiEnvelope, BiBriefcase, BiCodeAlt } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { ImCalendar } from "react-icons/im";
import { useState } from "react";
import { GiGraduateCap, GiArchiveResearch, GiOpenBook } from "react-icons/gi";
import { PiNotebook } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";

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
    GiArchiveResearch,
    RiTeamLine,
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
              {data?.content?.research?.map((research, index) => (
                <div
                  key={index}
                  className={`text-base font-normal flex items-center justify-center text-center p-3 w-full rounded-3xl shadow-md cursor-pointer ${index === selectedWork
                    ? "bg-zinc-200 text-black"
                    : "bg-zinc-100 text-black"
                    }`}
                  onClick={() => setSelectedWork(index)}
                >
                  {research?.Title && research?.Title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center space-y-12">
          {data?.content?.research?.map(
            (research, index) =>
              index === selectedWork && (
                <div key={index} className="space-y-4">
                  {research?.Title && (
                    <div className="font-semibold">{research?.Title}</div>
                  )}
                  <div className="text-sm 2xl:text-base font-normal space-y-1">
                    {research?.Authors && (
                      <div className="flex items-center space-x-2">
                        <RiTeamLine />
                        {research.Authors.map((author, index) => (
                          <span key={index} className={`${author?.self && "font-semibold"}`}>
                            {author.name}
                            {index < research.Authors.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div>
                    )}
                    {research?.codeRepository && (
                      <div className="flex items-center space-x-2">
                        <BiCodeAlt />
                        <a
                          href={research?.codeRepository}
                          target="_blank"
                          className="underline text-lg"
                        >{research?.codeRepository}</a>
                      </div>
                    )}
                    {research?.doi && (
                      <div className="flex items-center space-x-2">
                        <GiOpenBook />
                        <a
                          href={research?.doi}
                          target="_blank"
                          className="underline"
                        >{research?.doi}</a>
                      </div>
                    )}
                  </div>
                  {research?.onGoing ? <h2 className="text-base font-semibold">[ Ongoing Work ]</h2> : <>
                    <div>
                      <h2 className="text-sm 2xl:text-base font-semibold">Abstract</h2>
                      <div className="text-justify text-xs 2xl:text-sm">{research?.abstract}</div>
                    </div>
                    <div>
                      <h2 className="text-sm 2xl:text-base font-semibold">To Cite</h2>
                      <div className="text-justify text-xs 2xl:text-sm">{research?.citation}</div>
                    </div>
                  </>}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
