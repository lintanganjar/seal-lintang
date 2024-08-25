// components/Pagination.js
"use client";
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages }) => {
    return (
        <div className="flex justify-center items-center mt-6">
            <Link 
                href={`?page=${currentPage - 1}`} 
                className={`px-4 py-2 border ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : ''}`} 
                aria-disabled={currentPage === 1}
            >
                Previous
            </Link>
            <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
            <Link 
                href={`?page=${currentPage + 1}`} 
                className={`px-4 py-2 border ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : ''}`} 
                aria-disabled={currentPage === totalPages}
            >
                Next
            </Link>
        </div>
    );
};

export default Pagination;
