'use client';

import { useEffect } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/ServicesTsx/Services';
import SolarSystem from './components/SolarSystem/SolarSystem';

export default function Home() {
	useEffect(() => {
		// Set initial scroll position to top
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='min-h-screen bg-black text-white'>
			<Header />
			<Hero />
			<SolarSystem />
			<Services />
			<About />
			<Contact />
			<Footer />
		</main>
	);
}
