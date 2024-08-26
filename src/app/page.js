
import Populer from "./components/Populer";
import Teknologi from "./components/Teknologi";
import Pagination from "./components/Pagination";
import HeadlineSliderComponent from "./components/HeadlineSlider";
import Banner from "./components/Banner";
import Footer from "./components/utilities/Footer";


const Home = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page) || 1;
  const headlineResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/olahraga`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/terbaru`);
  const techResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/teknologi?page=${currentPage}&limit=8`);

  if (!response.ok || !techResponse.ok) {
    throw new Error('Network response was not ok');
  }

  const berita = await response.json();
  const rekomendasi = await techResponse.json();
  const headline = await headlineResponse.json();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  const postsPerPage = 8;
  const totalPosts = rekomendasi.data.posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Hitung indeks awal dan akhir
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return (
    <div className="mx-[72px] pt-28">
      
      <HeadlineSliderComponent headline={headline} />

      {/* BERITA POPULER */}
      <div className="flex gap-3 my-10 mt-36">
        <div className="bg-blue-500 rounded w-2"></div>
        <h1 className="text-2xl font-bold">Berita Populer</h1>
      </div>
      <div className="grid grid-cols-3 gap-12 ">
        {berita.data.posts.slice(0, 3).map((post, index) => (
          <Populer 
            key={index} 
            title={post.title} 
            thumbnail={post.thumbnail} 
            pubDate={formatDate(post.pubDate)} 
            link={post.link} 
          />
        ))}
      </div>
      
      {/* REKOMENDASI */}
      <div className="flex gap-3 my-10 mt-36">
        <div className="bg-blue-500 rounded w-2"></div>
        <div className="flex gap-[640px]">
          <h1 className="text-2xl font-bold">Rekomendasi Untuk Anda</h1>
          <div className="flex items-center">
            <input type="text" placeholder="Cari disini..." className="p-6 w-[360px] border-y border-l border-gray-200 rounded-l-md h-11"></input>
            <svg xmlns="http://www.w3.org/2000/svg" className=" border-y border-r border-gray-200 rounded-r-md pr-1  h-[50px]" height="25" width="25" viewBox="0 0 512 512"><path fill="#4c4c4d" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </div>
          
        </div>
        
      </div>
      <div className="grid grid-cols-4 gap-16">
        {rekomendasi.data.posts.slice(startIndex, endIndex).map((post, index) => (
          <Teknologi 
            key={index} 
            title={post.title} 
            thumbnail={post.thumbnail} 
            pubDate={formatDate(post.pubDate)} 
            link={post.link} 
          />
        ))}
      </div>
      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
      />
      <div className=" justify-center">
        <Banner/>
      </div>
    </div>

  );
};

export default Home;
