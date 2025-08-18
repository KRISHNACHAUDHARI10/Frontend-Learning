import Collage from "./Collages";
import Section  from "./Section";
import {GraduationCap } from 'lucide-react';
const Education = () =>{
  
 
    return<Section icon={<GraduationCap /> }Sectiontitle="Education">
      <Collage title="Bachlor computer aplication" school="Gujrat Univercity" year="2022-24" />
      <Collage title="Master computer aplication" school="Maharastra Education Trust(Imcc)" year="2024-26" />
      </Section> 
  

}
export default Education;