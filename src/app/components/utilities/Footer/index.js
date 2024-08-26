"use client"
import Image from "next/image";
import logo from "/public/Logo-footer.svg"
import { Inter } from "next/font/google";
import yt from "/public/List.svg"
import ig from "/public/List (1).svg"
import fb from "/public/List (2).svg"

const inter = Inter({ subsets: ['latin'] })
export default function Footer (){
    return (
        <>
        
        <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
        <footer className=" bg-gray-700 flex text-white">
            <div className="mx-auto w-full px-20 md:flex md:justify-between  py-8">
                <div className="grid grid-cols-2" >
                    {/* Kolom 1 */}
                    <div className="mb-6 md:mb-0">
                        <Image src={logo}></Image>
                        <p className="font-light mt-4">© 2023 Berita Kini. All Rights Reserved.</p>
                        <h2 className="text-[22px] leading-9 mt-16">Ikuti Kami</h2>
                        <div className="flex mt-6 gap-6">
                            <a href=""><Image src={yt}></Image></a>
                            <a href=""><Image src={ig}></Image></a>
                            <a href=""><Image src={fb}></Image></a>
                        </div>
                    </div>
                    {/* Kolom 2 */}
                    <div className=" flex justify-between items-start gap-12">
                        <div className="">
                            <h2 className="mb-6 text-xl font-medium  text-white">Telusuri</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-2">
                                    <p>Beranda</p>
                                </li>
                                <li className="mb-2">
                                    <p>Kesehatan</p>
                                </li>
                                <li className="mb-2">
                                    <p>Otomotif</p>
                                </li>
                                <li className="mb-2">
                                    <p>Politik</p>
                                </li>
                                <li className="mb-2">
                                <   p>Olahraga</p>
                                </li>
                                <li className="mb-2">
                                    <p>Internasional</p>
                                </li>
                            </ul>
                        </div>
                        {/* Kolom 3 */}
                        <div className="">
                            <h2 className="mb-6 text-xl font-medium  text-white  ">Bantuan</h2>
                            <ul className="text-white  font-medium">
                                <li className="mb-2">
                                    <p>Kontak Kami</p>
                                </li>
                                <li className="mb-2">
                                    <p>Laporan Pembajakan</p>
                                </li>
                                <li className="mb-2">
                                    <p>Kebijakan</p>
                                </li>
                            </ul>
                        </div>
                        {/* Kolom 4 */}
                        <div className="">
                            <h2 className="mb-6 text-xl font-medium  text-white">Berlangganan Berita Terbaru</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4 flex items-center">
                                    <input type="text" placeholder="Masukkan email" className="w-[280px] p-2 h-14 rounded-l-md"></input>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-white w-12 h-14 pr-2 rounded-r-md"  height="44" width="40" viewBox="0 0 496 512"><path fill="#0090ff" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            
            
            </div>
        </footer>
        </>

    )
}
