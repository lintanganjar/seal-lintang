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
        <header className={`fixed w-full z-50 px-14 py-4 border-b border-slate-300 flex justify-between ${scrolled ? 'bg-blue-500' : 'bg-white'}`}>
            <div className="flex items-center">
                <Link href={'/'}><Image src={logo} alt="Logo" /></Link>
                <Link href={'/'}><p className={`font-bold text-xl ml-2 ${scrolled ? 'text-white' : 'text-black'}`}>Berita Kini</p></Link>
            </div>
            <div className={`flex gap-7 items-center ${scrolled ? 'text-white' : 'text-black'}`}>
                <Link href={'/'}>Beranda</Link>
                <Link href={'https://www.cnnindonesia.com/terbaru'}>Terbaru</Link>
                <Link href={'https://www.cnnindonesia.com/hiburan'}>Hiburan</Link>
                <Link href={'https://www.cnnindonesia.com/gaya-hidup'}>Gaya Hidup</Link>
                <Link href={'https://www.cnnindonesia.com/olahraga'}>Olahraga</Link>
                <Link href={'https://www.cnnindonesia.com/nasional'}>Nasional</Link>
                <Link href={'https://www.cnnindonesia.com/internasional'}>Internasional</Link>
            </div>
        </header>
    );
};

export default Navbar;