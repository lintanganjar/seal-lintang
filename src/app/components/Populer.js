import Image from "next/image"
import Link from "next/link"
const Populer = ({ thumbnail, title, pubDate, link}) => {
    return (
        <>
         <div className=" flex"> 
            <Link href={link} className="flex gap-5 border-r border-slate-300 cursor-pointer">
                <Image className="rounded-xl  w-full" src={thumbnail} width ={100} height ={100} />
                <div className="inline-block text-justify mr-5">
                    <p className="text-base font-bold mb-10">{title}</p>
                    <p>{pubDate}</p>
                </div>
            </Link>
    
        </div>
    
        </>
    )
       
}
export default Populer