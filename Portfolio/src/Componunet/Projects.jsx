import Pill from "./Pill";

const Projects = ({ title, decs, techUsed }) => {
  return (
    <div className="mb-4  bg-blue-200 rounded-xl p-2">
      <p className="font-bold">{title}</p>
      <p>{decs}</p>
      <div className="flex flex-wrap mt-2 text-black-500 font-xl">
        {techUsed.map((tech, index) => (
          <Pill key={index} skill={tech}  />
        ))}
      </div>
    </div>
  );
};

export default Projects;
