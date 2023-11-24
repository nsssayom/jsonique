import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

export default function Skills({ data }) {

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
    <div className="space-y-6 pt-16 lg:pt-0">
      <span className="flex items-center justify-center space-x-2">
        <HiOutlineSquare3Stack3D className="text-xl" />
        <span className="font-bold text-lg">Skills</span>
      </span>
      <div className="flex flex-wrap gap-3">
        {uniqueSkills?.map((skill, index) => (
          <span
            key={index}
            className={`border-zinc-200 border-2 p-1.5 px-3 2xl:p-2.5 rounded-md shadow-md text-sm font-medium`}
          >
            {skill.skill}
          </span>
        ))}
      </div>
    </div>
  );
}
