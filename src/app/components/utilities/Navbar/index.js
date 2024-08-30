"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-full z-50 px-14 py-4 border-b  border-slate-300 flex justify-between ${scrolled ? 'bg-blue-500' : 'bg-white'}`}>
            <div className="flex items-center">
                <Link href={'/'}><Image src={logo} alt="Logo" className='w-10'/></Link>
                <Link href={'/'}><p className={`font-bold text-xl ml-2 ${scrolled ? 'text-white' : 'text-black'}`}>Berita Kini</p></Link>
            </div>
                <ul className={`flex  gap-7 items-center ${scrolled ? 'text-white' : 'text-black'}`}>
                    <li className='hover:text-blue-500'><Link href={'/'}>Beranda</Link></li>
                    <li className='hover:text-blue-500'><Link href={'https://www.cnnindonesia.com/terbaru'}>Terbaru</Link></li>
                    <li className='hover:text-blue-500'><Link href={'https://www.cnnindonesia.com/hiburan'}>Hiburan</Link></li>
                    <li className='hover:text-blue-500'><Link href={'https://www.cnnindonesia.com/gaya-hidup'}>Gaya Hidup</Link></li>
                    <li className='hover:text-blue-500'><Link href={'https://www.cnnindonesia.com/olahraga'}>Olahraga</Link></li>
                    <li className='hover:text-blue-500'><Link href={'https://www.cnnindonesia.com/nasional'}>Nasional</Link></li>
                    <li className='hover:text-blue-500'><Link href={'https://www.cnnindonesia.com/internasional'}>Internasional</Link></li>

                </ul>
        </header>
    );
};

export default Navbar;