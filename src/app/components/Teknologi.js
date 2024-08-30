import Image from "next/image"
import Link from "next/link"

const Teknologi = ({ thumbnail, title, pubDate, link}) => {
    return (
        <>
         <div className=""> 
            <Link href={link} className="inline-block gap-5  cursor-pointer">
                <Image className="rounded-xl  w-full mb-5 h-[200px] " src={thumbnail} width ={250} height ={250} />
                <p className="text-lg font-bold mb-5 text-[#333333]">{title}</p>
                <div className="flex justify-start gap-2 items-center">
                    <p className="text-blue-500 text-sm font-semibold ">Teknologi  </p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="6" width="14" viewBox="0 0 512 512"><path fill="#d1d1d1" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                    <p className="text-[#526071] text-sm">{pubDate}</p>
                </div>
               
            </Link>
    
        </div>
    
        </>
    )
       
}
export default Teknologi