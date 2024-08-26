// components/Pagination.js
"use client";
import Link from 'next/link';
import { useEffect } from 'react';
const Pagination = ({ currentPage, totalPages }) => {
    useEffect(() => {
        window.scrollTo({ bottom: 0, behavior: 'smooth' }); // Atur scroll ke atas dengan animasi yang halus
    }, [currentPage]);
    return (
        <>
        <div className='flex mt-16 justify-between text-gray-500'>
            <div className='flex items-center '>
                <p> Showing {`${currentPage}`} of {`${totalPages}`} Result</p>
            </div>
            <div className="flex  items-center ">
                <Link 
                    href={`?page=${currentPage - 1}`} 
                    className={`px-4 py-2 flex  items-center ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : ''}`} 
                    aria-disabled={currentPage === 1}
                    scroll={false} 
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 448 512"><path fill="#a7a5a5" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                Previous
                </Link>
                <span className="px-4 py-2">{`Page ${currentPage} ... ${totalPages}`}</span>
                <Link 
                    href={`?page=${currentPage + 1}`} 
                    className={`px-4 py-2 flex  items-center ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : ''}`} 
                    aria-disabled={currentPage === totalPages}
                    scroll={false}
                >
                    Next <svg xmlns="http://www.w3.org/2000/svg" height="20" width="35" viewBox="0 0 448 512"><path fill="#a7a5a5" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </Link>
            </div>
        </div>
        
        </>
    );
};

export default Pagination;