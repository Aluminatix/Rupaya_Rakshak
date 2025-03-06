/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "random.me",
            }
        ]
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        }
    },
};

export default nextConfig;
