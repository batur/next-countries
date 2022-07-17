/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
	pwa: {
		dest: "public",
		runtimeCaching,
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
