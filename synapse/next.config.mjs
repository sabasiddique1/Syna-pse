// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;


export const basePath = '';
export async function rewrites() {
    return [
        {
            source: '/api/:path*',
            destination: 'http://localhost:3000/api/:path*',
        },
    ];
}