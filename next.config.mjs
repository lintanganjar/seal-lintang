/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cnn.images"
            }
        ]
    }
};

export default nextConfig;
