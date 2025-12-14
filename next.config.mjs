/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['img.shields.io', 'storage.googleapis.com','cdn.jsdelivr.net'],
		dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
