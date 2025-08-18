const Socialmedia =({icon,title,url})=>{
  return(
    <>
        <a href={url} className="flex text-blue-500" >{icon}{title}</a>
    </>
  )
}
export default Socialmedia;