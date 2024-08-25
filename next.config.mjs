/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats:['image/webp'],
        remotePatterns: [
            {
                hostname: "akcdn.detik.net.id"
            }
        ]
    }
};

export default nextConfig;
