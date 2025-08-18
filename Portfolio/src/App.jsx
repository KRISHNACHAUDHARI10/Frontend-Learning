import Header from "./Componunet/Header";
import About from "./Componunet/About";
import Project from "./Componunet/Project";
import Skill from "./Componunet/Skill";
import Education from "./Componunet/Education";
import Hobbies from "./Componunet/Hobbies";
import ContactSocialMedia from "./Componunet/ContactSocialMedia";
function App() {
  

  return (
     <div  className="bg-slate-100 px-3 py-8 ">
      <div className="bg-white max-w-4xl  mx-auto rounded-xl shdow-lg">
         <Header />
          <About />
          <Project/>
          <Skill/>
          <Education/>
          <Hobbies />
          <ContactSocialMedia />
         </div>
    </div>
  )
}

export default App;
