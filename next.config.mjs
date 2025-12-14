/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	  },
	images: {
		domains: ['img.shields.io', 'storage.googleapis.com','cdn.jsdelivr.net'],
		dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
