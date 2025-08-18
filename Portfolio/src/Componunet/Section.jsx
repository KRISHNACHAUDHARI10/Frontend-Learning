import {User} from 'lucide-react';
import { Children } from 'react';
const Section =({icon,children,Sectiontitle})=>{ 
  return (
  <>
  <div className='   mx-5 my-5' >
      <div className='flex  my-3'>
            {icon}
        <h1 className="font-bold mx-2  text-xl">{Sectiontitle}</h1>
      </div>
      {children}
       
  </div>
  </>
  );


}
export default Section;