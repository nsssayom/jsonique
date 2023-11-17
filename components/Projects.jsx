import Image from "next/image";
import { BsTelephone, BsDownload, BsRocketTakeoff } from "react-icons/bs";
import { BiEnvelope, BiBriefcase, BiCodeAlt } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { ImCalendar } from "react-icons/im";
import { useState } from "react";
import { GiGraduateCap, GiWorld } from "react-icons/gi";
import { PiNotebook } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

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
    BsRocketTakeoff,
  };

  const IconComponentForTitle = iconComponentMap[data?.titleIcon] || null;

  return (
    <div className="grid lg:grid-cols-2 gap-20 grow w-full">
      <div className="col-span-1 flex flex-col items-start justify-center space-y-6 2xl:space-y-12">
        <div className="flex flex-col leading-none w-full items-center justify-center space-y-8">
          <span className="flex items-center space-x-2 font-bold text-xl">
            <IconComponentForTitle />
            <span>{data?.title}</span>
          </span>

          <div className="w-full flex flex-col lg:hidden">
            {data?.content?.projects?.map((project, index) => (
              <div key={index} className="mb-4">
              <div
                key={index}
                className={`text-base font-normal flex items-center justify-between text-center p-3 px-8 w-full cursor-pointer ${
                  index === selectedWork
                    ? "bg-zinc-200 text-black rounded-t-md"
                    : "bg-zinc-100 text-black rounded-md shadow-md"
                }`}
                onClick={() => setSelectedWork(index)}
              >
                {project?.Title && project?.Title}
                <span>{selectedWork === index ? "🔽" : "🔼"}</span>
              </div>
              {selectedWork === index && (
                
                <div key={index} className="space-y-4 p-2 px-8 border border-zinc-200 rounded-b-md shadow-md">
                {project?.Title && (
                  <div className="font-semibold">{project?.Title}</div>
                )}
                <div className="text-sm 2xl:text-base font-normal space-y-1">
                  {project?.codeRepository && (
                    <div className="flex items-center space-x-2">
                      <BiCodeAlt />
                      <a
                        href={project?.codeRepository}
                        target="_blank"
                        className="underline"
                      >
                        {project?.codeRepository}
                      </a>
                    </div>
                  )}
                  {project?.web && (
                    <div className="flex items-center space-x-2">
                      <TbWorld />
                      <a
                        href={project?.web}
                        target="_blank"
                        className="underline text-lg"
                      >
                        {project?.web}
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-justify text-xs 2xl:text-sm">{project?.description && project?.description}</div>
                {project?.image && (
                  <Image
                    src={project?.image}
                    alt="Project Image"
                    height={200}
                    width={200}
                    className="h-40"
                  />
                )}
                {project?.associatedSkills && (
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {project?.associatedSkills?.map((skill, index) => (
                      <span
                        key={index}
                        className={`p-1 2xl:p-1.5 rounded-md shadow-md bg-zinc-100 text-black text-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              )}
            </div>
            ))}
          </div>

          <div className="space-y-4 w-full lg:flex flex-col items-center justify-center text-center hidden">
            {data?.content?.projects?.map((project, index) => (
              <div
                key={index}
                className={`text-base font-normal flex items-center justify-center text-center p-3 w-full rounded-3xl shadow-md cursor-pointer ${index === selectedWork
                  ? "bg-zinc-200 text-black"
                  : "bg-zinc-100 text-black"
                  }`}
                onClick={() => setSelectedWork(index)}
              >
                {project?.Title && project?.Title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:flex flex-col items-center justify-center hidden">
        {data?.content?.projects?.map(
          (project, index) =>
            index === selectedWork && (
              <div key={index} className="space-y-4">
                {project?.Title && (
                  <div className="font-semibold">{project?.Title}</div>
                )}
                <div className="text-sm 2xl:text-base font-normal space-y-1">
                  {project?.codeRepository && (
                    <div className="flex items-center space-x-2">
                      <BiCodeAlt />
                      <a
                        href={project?.codeRepository}
                        target="_blank"
                        className="underline"
                      >
                        {project?.codeRepository}
                      </a>
                    </div>
                  )}
                  {project?.web && (
                    <div className="flex items-center space-x-2">
                      <TbWorld />
                      <a
                        href={project?.web}
                        target="_blank"
                        className="underline text-lg"
                      >
                        {project?.web}
                      </a>
                    </div>
                  )}
                </div>
                <div className="text-justify text-xs 2xl:text-sm">{project?.description && project?.description}</div>
                {project?.image && (
                  <Image
                    src={project?.image}
                    alt="Project Image"
                    height={200}
                    width={200}
                    className="h-40"
                  />
                )}
                {project?.associatedSkills && (
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {project?.associatedSkills?.map((skill, index) => (
                      <span
                        key={index}
                        className={`p-1 2xl:p-1.5 rounded-md shadow-md bg-zinc-100 text-black text-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
