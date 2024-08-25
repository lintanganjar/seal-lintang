import Populer from "./components/Populer";
import Teknologi from "./components/Teknologi";
import Pagination from "./components/Pagination";

const Home = async ({ searchParams }) => {
    const currentPage = parseInt(searchParams.page) || 1;
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/terbaru`);
    const techResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/teknologi?page=${currentPage}&limit=8`);

    if (!response.ok || !techResponse.ok) {
        throw new Error('Network response was not ok');
    }

    const berita = await response.json();
    const rekomendasi = await techResponse.json();

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', options);
    };

    // Ensure `totalPages` is correctly set
    const totalPages = rekomendasi.data.totalPages;

    return (
        <div className="mx-[72px] pt-48">
            <p className="text-gray-600">Headline</p>

            <div className="flex gap-3 my-10">
                <div className="bg-blue-500 rounded w-2"></div>
                <h1 className="text-2xl font-bold">Berita Populer</h1>
            </div>
            <div className="grid grid-cols-3 gap-12">
                {berita.data.posts.slice(0, 3).map((post, index) => (
                    <Populer key={index} title={post.title} thumbnail={post.thumbnail} pubDate={formatDate(post.pubDate)} link={post.link} />
                ))}
            </div>

            <div className="flex gap-3 my-10">
                <div className="bg-blue-500 rounded w-2"></div>
                <h1 className="text-2xl font-bold">Rekomendasi Untuk Anda</h1>
            </div>
            <div className="grid grid-cols-3 gap-12">
                {rekomendasi.data.posts.slice(0, 3).map((post, index) => (
                    <Teknologi key={index} title={post.title} thumbnail={post.thumbnail} pubDate={formatDate(post.pubDate)} link={post.link} />
                ))}
            </div>

            {/* Pagination Controls for Recommendations */}
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
            />
        </div>
    );
};

export default Home;
