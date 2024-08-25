import Image from "next/image"
import Link from "next/link"

const Rekomendasi = ({ thumbnail, title, pubDate, link}) => {
    return (
        <>
         <div className=""> 
            <Link href={link} className="inline-block gap-5 border-r border-slate-300 cursor-pointer">
                <Image className="rounded-xl  w-full" src={thumbnail} width ={250} height ={250} />
                <p className="text-base font-bold mb-10">{title}</p>
                <p>{pubDate}</p>
                
            </Link>
    
        </div>
    
        </>
    )
       
}
export default Rekomendasi