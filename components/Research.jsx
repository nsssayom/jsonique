import Image from "next/image";
import { BsTelephone, BsDownload, BsBook } from "react-icons/bs";
import { BiEnvelope, BiBriefcase, BiCodeAlt } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { GoBook } from "react-icons/go";
import { useState } from "react";
import { GiGraduateCap, GiArchiveResearch, GiOpenBook } from "react-icons/gi";
import { PiNotebook } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
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
    GiArchiveResearch,
    RiTeamLine,
  };

  const IconComponentForTitle = iconComponentMap[data?.titleIcon] || null;

  return (
    <div className="space-y-20 h-full flex flex-col w-full pt-16 sm:pt-0">
      <div className="grid lg:grid-cols-2 lg:gap-20 grow">
        <div className="col-span-1 flex flex-col items-start justify-center space-y-6 2xl:space-y-12">
          <div className="flex flex-col leading-none w-full items-center justify-center space-y-8">
            <span className="flex items-center space-x-2">
              <IconComponentForTitle className="text-xl" />
              <span className="text-lg font-bold lg:text-xl">{data?.title}</span>
            </span>

            <div className="w-full flex flex-col lg:hidden">
              {data?.content?.research?.map((research, index) => (
                <div key={index} className="mb-4">
                  <div
                    key={index}
                    className={`text-base font-normal flex items-center justify-between text-center p-3 px-8 w-full cursor-pointer space-x-2  ${
                      index === selectedWork
                        ? "bg-zinc-200 text-black rounded-t-md"
                        : "bg-zinc-100 text-black rounded-md shadow-md"
                    }`}
                    onClick={() => setSelectedWork(index)}
                  >
                    <span className="line-clamp-2">
                      {research?.Title && research?.Title}
                    </span>
                    <span className="text-xl">
                      {selectedWork === index ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowUp />
                      )}
                    </span>
                  </div>
                  {selectedWork === index && (
                    <div
                      key={index}
                      className="space-y-4 p-8 border border-zinc-200 rounded-b-md shadow-md"
                    >
                                          {research?.Title && (
                      <div className="font-semibold">{research?.Title}</div>
                    )}
                      <div className="text-sm 2xl:text-base font-normal space-y-1">
                        {research?.Authors && (
                          <div className="flex space-x-2">
                            <RiTeamLine className="text-lg" />
                            <span className="">
                              {research.Authors.map((author, index) => (
                                <span
                                  key={index}
                                  className={`${
                                    author?.self && "font-semibold"
                                  } text-xs lg:text-lg`}
                                >
                                  {author.name}
                                  {index < research.Authors.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </span>
                          </div>
                        )}
                        {research?.codeRepository && (
                          <div className="flex items-center space-x-1">
                            <BiCodeAlt className="text-lg" />
                            <a
                              href={research?.codeRepository}
                              target="_blank"
                              className="underline text-xs lg:text-lg"
                            >
                              {/* {research?.codeRepository} */}
                              Github
                            </a>
                          </div>
                        )}
                        {research?.doi && (
                          <div className="flex items-center space-x-2">
                            <GoBook className="text-base" />
                            <a
                              href={research?.doi}
                              target="_blank"
                              className="underline text-xs lg:text-lg"
                            >
                              {/* {research?.doi} */}
                              DOI
                            </a>
                          </div>
                        )}
                      </div>
                      {research?.onGoing ? (
                        <h2 className="text-base font-semibold">
                          [ Ongoing Work ]
                        </h2>
                      ) : (
                        <>
                          <div>
                            <h2 className="text-sm 2xl:text-base font-semibold">
                              Abstract
                            </h2>
                            <div className="text-xs 2xl:text-sm line-clamp-[10]">
                              {research?.abstract}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-sm 2xl:text-base font-semibold">
                              To Cite
                            </h2>
                            <div className="text-xs 2xl:text-sm">
                              {research?.citation}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4 w-full lg:flex flex-col items-center justify-center hidden">
              {data?.content?.research?.map((research, index) => (
                <div
                  key={index}
                  className={`text-base font-normal flex items-center justify-center text-center p-3 w-full rounded-3xl shadow-md cursor-pointer ${
                    index === selectedWork
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
        <div className="col-span-1 lg:flex flex-col items-center justify-center space-y-12 hidden">
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
                          <span
                            key={index}
                            className={`${author?.self && "font-semibold"}`}
                          >
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
                        >
                          {research?.codeRepository}
                        </a>
                      </div>
                    )}
                    {research?.doi && (
                      <div className="flex items-center space-x-2">
                        <GiOpenBook />
                        <a
                          href={research?.doi}
                          target="_blank"
                          className="underline"
                        >
                          {research?.doi}
                        </a>
                      </div>
                    )}
                  </div>
                  {research?.onGoing ? (
                    <h2 className="text-base font-semibold">
                      [ Ongoing Work ]
                    </h2>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-sm 2xl:text-base font-semibold">
                          Abstract
                        </h2>
                        <div className=" text-xs 2xl:text-sm">
                          {research?.abstract}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm 2xl:text-base font-semibold">
                          To Cite
                        </h2>
                        <div className=" text-xs 2xl:text-sm">
                          {research?.citation}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
