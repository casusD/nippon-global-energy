'use client';

import { useEffect } from 'react';
import About from './components/About/About';
import WhyChooseUs from './components/ConsultingSection/WhyChooseUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import PartnersBrands from './components/PartnersBrands/PartnersBrands';
import Services from './components/ServicesTsx/Services';
import SolarSystem from './components/SolarSystem/SolarSystem';

export default function Home() {
	useEffect(() => {
		// Set initial scroll position to top
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='min-h-screen bg-black text-white max-w-full mr-auto ml-auto mt-0 mb-0'>
			<Header />
			<Hero />
			<SolarSystem />
			<Services />
			<About />
			<WhyChooseUs />
			<PartnersBrands />
			<Contact />
			<Footer />
		</main>
	);
}
