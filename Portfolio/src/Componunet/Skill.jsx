import Section  from "./Section";
import {Code} from 'lucide-react';
import Pill from "./Pill"; 
   const Skill =() =>{ 
  const skillTiltle =["javascript","reactjs","html" ,"css","java","Git" ,"jira"];
  
  return<Section icon={<Code /> }Sectiontitle="Skilles">
       {skillTiltle.map(skill=>
       <Pill  skill={skill}/> )}
       </Section> 
  
}
export default Skill;