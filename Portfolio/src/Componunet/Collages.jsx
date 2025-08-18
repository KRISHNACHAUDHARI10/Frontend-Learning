const Collage = ({title,school,year})=>{
   return <p> 
<h1 className="font-bold">{title}</h1>
    <p className="text-sm text-gray-700 mb-4"> {school}{year}</p>
   </p>
} 
export default  Collage;