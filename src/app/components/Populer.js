"use client"
import Image from "next/image"
import Link from "next/link"
const Populer = ({ thumbnail, title, pubDate, link}) => {
    return (
        <>
         <div className=" flex border-r border-gray-200"> 
            <Link href={link} className="flex gap-5  cursor-pointer">
                <Image className="rounded-xl w-48 h-40" src={thumbnail} width ={100} height ={100} />
                <div className="inline-block text-justify mr-5">
                    <h2 className=" font-bold mb-10">{title}</h2>
                    <p>{pubDate}</p>
                </div>
            </Link>
    
        </div>
    
        </>
    )
       
}
export default Populer