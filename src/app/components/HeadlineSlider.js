"use client"
import { useState, useEffect } from 'react';
import "../globals.css"

const HeadlineSliderComponent = ({ headlines }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        console.log('Headlines data:', headlines); // Log the headlines data
    }, [headlines]);

    const nextSlide = () => {
        if (headlines.length > 0) {
            setCurrentSlide((prev) => (prev + 1) % headlines.length);
        }
    };

    const prevSlide = () => {
        if (headlines.length > 0) {
            setCurrentSlide((prev) => (prev - 1 + headlines.length) % headlines.length);
        }
    };

    // Format the date to display only the day, month, and year
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', options);
    };

    // Check if headlines is an array and has elements
    if (!Array.isArray(headlines) || headlines.length === 0) {
        return <p>No headlines available.</p>;
    }

    return (
        <div className="headline-slider">
            <div className="flex gap-40 mt-4">
                <div className="flex-col w-[600px]">
                    <p className="text-gray-600 pb-1">Headline</p>
                    <h2 className="font-bold text-4xl mt-4 leading-[48px]">{headlines[currentSlide]?.title}</h2>
                    <h2 className="mt-8 text-[#4F4F4F]">{headlines[currentSlide]?.description}</h2> 
                    <div className='flex items-center gap-3 mt-4'>
                      <svg xmlns="http://www.w3.org/2000/svg"  height="22" width="17.5" viewBox="0 0 448 512"><path fill="#808080" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>
                      <p className=" text-[#4F4F4F]">{formatDate(headlines[currentSlide]?.pubDate)}</p>
                    </div>
                    <div className="flex mt-6 items-center gap-2 text-blue-500">
                        <a href={headlines[currentSlide]?.link}>Baca Selengkapnya</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <img src={headlines[currentSlide]?.thumbnail} width={700} height={300} className="rounded-3xl" alt="Headline" />
                </div>
            </div>
            <div className="flex justify-center mt-12 items-center">
                <button 
                    onClick={prevSlide} 
                    className={`px-4 py-2 ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : ''}`} 
                    disabled={currentSlide === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512"><path fill="#c4c4c4" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                </button>
                <span className="mx-6 text-gray-500">
                    {currentSlide + 1} dari {headlines.length}
                </span>
                <button 
                    onClick={nextSlide} 
                    className={`px-4 py-2 ${currentSlide === headlines.length - 1 ? 'text-gray-400 cursor-not-allowed' : ''}`} 
                    disabled={currentSlide === headlines.length - 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512"><path fill="#c4c4c4" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </button>
            </div>
        </div>
    );
};

export default HeadlineSliderComponent;
