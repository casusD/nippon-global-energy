import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header/Header';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<ThemeProvider>
					<LanguageProvider>
						<div className='min-h-screen flex flex-col'>
							<Header />
							<main className='flex-grow pt-20'>{children}</main>
						</div>
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
