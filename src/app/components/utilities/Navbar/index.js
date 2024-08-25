"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 600) {
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
        <header className={`fixed w-full p-6 border-b border-slate-300 flex justify-between ${scrolled ? 'bg-blue-500' : 'bg-white'}`}>
            <div className="flex items-center">
                <Image src={logo} width={30} height={10} alt="Logo" />
                <p className={`font-bold text-xl ml-2 ${scrolled ? 'text-white' : 'text-black'}`}>Berita Kini</p>
            </div>
            <div className={`flex gap-3 ${scrolled ? 'text-white' : 'text-black'}`}>
                <p>Beranda</p>
                <p>Terbaru</p>
                <p>Hiburan</p>
                <p>Gaya Hidup</p>
                <p>Olahraga</p>
                <p>Nasional</p>
                <p>Internasional</p>
            </div>
        </header>
    );
};

export default Navbar;
