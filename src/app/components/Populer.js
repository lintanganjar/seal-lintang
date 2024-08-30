"use client"
import Image from "next/image"
import Link from "next/link"
const Populer = ({ thumbnail, title, pubDate, link}) => {
    return (
        <>
         <div className=" flex border-r border-gray-200"> 
            <Link href={link} className="flex gap-5  cursor-pointer">
                <Image className="rounded-xl w-40 h-32" src={thumbnail} width ={100} height ={100} />
                <div className="inline-block text-justify mr-5">
                    <h2 className="text-base nunito_sans text-[#333333] font-bold mb-10">{title}</h2>
                    <div className=" flex justify-between items-center">
                        <p className="text-blue-500 text-sm font-semibold">Nasional  </p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="6" width="14" viewBox="0 0 512 512"><path fill="#d1d1d1" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <p className="text-sm text-[#526071]">{pubDate}</p>
                    </div>
                </div>
            </Link>
    
        </div>
    
        </>
    )
       
}
export default Populer