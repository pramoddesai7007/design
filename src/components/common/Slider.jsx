const skills = [
    "Graphic Design",
    "UIUX Designing",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "Web Designing",
    "Software Development",
  ];
  
  const SkillScroller = () => {
    const repeatedSkills = [...skills, ...skills]; 
  
    return (
      <div className="overflow-hidden whitespace-nowrap bg-orange-500 py-4">
        <div className="inline-block animate-scroll">
          {repeatedSkills.map((skill, index) => (
            <span
              key={index}
              className="mx-6 inline-flex items-center text-white font-medium"
            >
              ✦ <span className="mx-2">{skill}</span>
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkillScroller;
  