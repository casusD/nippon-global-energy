import type { Metadata } from 'next';
import { Montserrat, Poppins, Space_Grotesk } from 'next/font/google';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import './globals.scss';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-montserrat',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-space-grotesk',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Nippon Global Energy',
	description: 'Leading the way in sustainable energy solutions.',
	icons: {
		icon: '/logo.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${montserrat.variable} ${spaceGrotesk.variable} ${poppins.variable}`}
			>
				<ThemeProvider>
					<LanguageProvider>
						<div className='min-h-screen flex flex-col'>
							{/* <Header /> */}
							<main className='flex-grow pt-20'>{children}</main>
						</div>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
