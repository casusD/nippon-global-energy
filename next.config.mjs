import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com'],
	},
	experimental: {
		appDir: true,
	},
};

export default withNextIntl(nextConfig);
