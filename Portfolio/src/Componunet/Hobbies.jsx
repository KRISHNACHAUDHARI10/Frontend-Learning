import Section  from "./Section";
import List from "./List";
import {HeartCrack } from 'lucide-react';
const Hobbies =() =>{ 
  const   hobbies=["photogarphy","Hiking","playingguitar","football"];
  return<Section icon={<HeartCrack />}Sectiontitle="Hobbies & Interst">
       <List items={hobbies} />  
       </Section> 
  


}
export default Hobbies;