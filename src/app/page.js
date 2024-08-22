import Populer from "./components/Populer";
import Teknologi from "./components/Teknologi";

async function fetchNews() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/populer`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('Data:', data);
      return data.posts || [];
    } else {
      const text = await response.text();
      console.error('Expected JSON but got:', text);
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default async function Home() {
  const posts = await fetchNews();
  
  return (
    <div>
      <p className="text-gray-600">Headline</p>
      <div className="grid grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Populer key={index} title={post.title} image={post.image} />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <Teknologi />
    </div>
  );
}
