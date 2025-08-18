import Section from "./Section";
import { Briefcase } from 'lucide-react';
import Projects from './Projects'; // renamed for clarity

const Project = () => {
  const projectData = [
    {
      title: "Ecommerce Platform",
      decs: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ex veritatis iure maiores placeat, quas explicabo autem nihil similique molestias assumenda deserunt, quis quos saepe reiciendis hic magni, eius sint.",
      techUsed: ["Reactjs", "HTML", "MongoDB", "CSS", "Java"]
    },
    {
      title: "Dashboard Platform",
      decs: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ex veritatis iure maiores placeat, quas explicabo autem nihil similique molestias assumenda deserunt, quis quos saepe reiciendis hic magni, eius sint.",
      techUsed: ["Reactjs", "HTML", "MongoDB", "CSS", "Java"]
    }
  ];

  return (
    <Section icon={<Briefcase />} Sectiontitle="Projects">
      {projectData.map((item, index) => (
        <Projects
          key={index}
          title={item.title}
          decs={item.decs}
          techUsed={item.techUsed}
        />
      ))}
    </Section>
  );
};

export default Project;
