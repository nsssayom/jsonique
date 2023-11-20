import Image from "next/image";
import { BsTelephone, BsDownload } from "react-icons/bs";
import { BiEnvelope, BiBriefcase } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LiaDiscord } from "react-icons/lia";
import { ImCalendar } from "react-icons/im";
import { useState } from "react";

export default function Works({ data }) {
  const [selectedWork, setSelectedWork] = useState(0);

  const iconComponentMap = {
    BiBriefcase,
    BiEnvelope,
    BsTelephone,
    LiaDiscord,
    GrLocation,
    BsDownload,
  };

  const IconComponentForTitle = iconComponentMap[data?.titleIcon] || null;

  // Create an array of objects containing skill and skillIndex
  const allSkills = [
    ...data?.content?.experiences?.reduce((skills, exp, expIndex) => {
      const expSkills = (exp.associatedSkills || []).map((skill) => ({
        skill,
        skillIndex: expIndex,
      }));
      return [...skills, ...expSkills];
    }, []),
    ...(data?.content?.additionalSkills || []).map((skill) => ({
      skill,
      skillIndex: -1,
    })), // Add -1 as a placeholder index for additionalSkills
  ];

  // Create a Map to store unique skills based on the skill name, and append skillIndex for matching skills
  const uniqueSkillsMap = new Map();
  allSkills.forEach((skillObj) => {
    if (uniqueSkillsMap.has(skillObj.skill)) {
      // Append the skillIndex to the existing skill in the Map
      const existingSkill = uniqueSkillsMap.get(skillObj.skill);
      existingSkill.skillIndex.push(skillObj.skillIndex);
    } else {
      // Create a new entry in the Map for the unique skill
      uniqueSkillsMap.set(skillObj.skill, {
        skill: skillObj.skill,
        skillIndex: [skillObj.skillIndex],
      });
    }
  });

  // Convert the unique skills Map back to an array
  const uniqueSkills = Array.from(uniqueSkillsMap.values());

  return (
    <div className="lg:space-y-20 h-full flex flex-col w-full pt-16 sm:pt-0">
      <div className="grid lg:grid-cols-2 lg:gap-20 grow">
        <div className="col-span-1 flex flex-col items-start justify-center space-y-6 2xl:space-y-12">
          <div className="flex flex-col leading-none w-full items-center justify-center space-y-8">
            <span className="flex items-center space-x-2 font-bold text-xl">
              <IconComponentForTitle />
              <span>{data?.title}</span>
            </span>

            <div className="w-full flex flex-col lg:hidden">
              {data?.content?.experiences?.map((experience, index) => (
                <div key={index} className="mb-4">
                  <div
                    className={`text-base font-normal flex items-center justify-between p-3 px-8 lg:rounded-3xl cursor-pointer ${index === selectedWork ? 'bg-zinc-200 text-black rounded-t-md' : 'bg-zinc-100 text-black rounded-md'
                      }`}
                    onClick={() => setSelectedWork(selectedWork === index ? null : index)}
                  >
                    {experience?.company ? (
                      <div className="space-x-1">
                        <span>{experience?.designation},</span>
                        <span>{experience?.company?.name}</span>
                      </div>
                    ) : (
                      experience?.designation
                    )}
                    <span>{selectedWork === index ? '🔽' : '🔼'}</span>
                  </div>
                  {selectedWork === index && (
                    <div key={index} className="space-y-4 p-2 px-8 border border-zinc-200 rounded-b-md shadow-md">
                      <div className="text-base font-normal space-y-1">
                        {experience?.duration && (
                          <div className="flex items-center space-x-1">
                            <ImCalendar />
                            <span>{experience?.duration}</span>
                          </div>
                        )}
                        {experience?.location && (
                          <div className="flex items-center space-x-1">
                            <GrLocation />
                            <span>{experience?.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-base font-normal pl-5">
                        <ul className="list-disc">
                          {experience?.description?.map((line, index) => (
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
              {data?.content?.experiences?.map((experience, index) => (
                <div
                  key={index}
                  className={`text-base font-normal flex items-center justify-center p-3 w-full rounded-3xl shadow-md cursor-pointer ${index === selectedWork
                    ? "bg-zinc-200 text-black"
                    : "bg-zinc-100 text-black"
                    }`}
                  onClick={() => setSelectedWork(index)}
                >
                  {experience?.company ? (
                    <div className="space-x-1">
                      <span>{experience?.designation},</span>
                      <span>{experience?.company?.name}</span>
                    </div>
                  ) : (
                    experience?.designation
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:flex flex-col items-center justify-center space-y-12 hidden">
          {data?.content?.experiences?.map(
            (experience, index) =>
              index === selectedWork && (
                <div key={index} className="space-y-4">
                  {experience?.company ? (
                    <div className="text-xl flex flex-col items-start justify-center">
                      <span className="font-semibold">
                        {experience?.designation}
                      </span>
                      <a
                        href={experience?.company?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-lg"
                      >
                        {experience?.company?.name}
                      </a>
                    </div>
                  ) : (
                    <span>{experience?.designation}</span>
                  )}
                  <div className="text-sm 2xl:text-base font-normal space-y-1">
                    {experience?.duration && (
                      <div className="flex items-center space-x-1">
                        <ImCalendar />
                        <span>{experience?.duration}</span>
                      </div>
                    )}
                    {experience?.location && (
                      <div className="flex items-center space-x-1">
                        <GrLocation />
                        <span>{experience?.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-normal pl-5">
                    <ul className="list-disc">
                      {experience?.description?.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="lg:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 lg:gap-4 text-center hidden">
        {uniqueSkills?.map((skill, index) => (
          <span
            key={index}
            className={`p-1 lg:p-1.5 rounded-md shadow-md ${skill.skillIndex.includes(selectedWork)
              ? "bg-zinc-200 text-black"
              : "bg-zinc-100 text-black"
              }`}
          >
            {skill.skill}
          </span>
        ))}
      </div>
    </div>
  );
}
