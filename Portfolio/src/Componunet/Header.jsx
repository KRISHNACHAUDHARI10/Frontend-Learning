import krishna from '../assets/krishna.jpg';
const  Header =()=>{
     return (
      <> 
     
<header className="bg-blue-500   max-w-4xl mx-auto  rounded-t-xl p-5 flex justify-between item-center">
     <div>
           <div className="text-rose-600 text-white font-bold  text-3xl">Krishna</div>
           <div className="text-rose-600 text-white font-2xl ">Full stack Devloper</div> 
           </div>
             <img src={krishna} className='rounded-full w-20 h-20 '></img>
          </header>
      </>
     )
} 

export default Header;