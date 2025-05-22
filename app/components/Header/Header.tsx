'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.scss';
export default function Header() {
	const { t, language, setLanguage } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<section className={styles.section}>
			<header className={styles.header}>
				<div className={styles.container}>
					<Link
						href='#hero'
						// onClick={e => handleScroll(e, 'hero')}
						className={styles.logo}
					>
						<Image
							src='/logo.png'
							alt='Nippon Global Energy'
							width={150}
							height={100}
						/>
					</Link>

					<nav className={styles.nav}>
						<Link
							href='#hero'
							// onClick={e => handleScroll(e, 'hero')}
							className={styles.navLink}
						>
							{t('header.home')}
						</Link>
						<Link
							href='#services'
							// onClick={e => handleScroll(e, 'services')}
							className={styles.navLink}
						>
							{t('header.services')}
						</Link>
						<Link
							href='#about'
							// onClick={e => handleScroll(e, 'about')}
							className={styles.navLink}
						>
							{t('header.about')}
						</Link>
						<Link
							href='#contact'
							// onClick={e => handleScroll(e, 'contact')}
							className={styles.navLink}
						>
							{t('header.contact')}
						</Link>
					</nav>

					<Menu
						className={styles.menu}
						onClick={toggleMenu}
						style={{ color: 'var(--text-color)' }}
					/>

					<div className={styles.actions}>
						<LanguageSwitcher />
						<ThemeSwitcher />
					</div>
				</div>

				{isMenuOpen && (
					<div className={styles.mobileMenu}>
						<div className={styles.mobileNav}>
							<Link
								href='#hero'
								className={styles.navLink}
								onClick={toggleMenu}
							>
								{t('header.home')}
							</Link>
							<Link
								href='#services'
								className={styles.navLink}
								onClick={toggleMenu}
							>
								{t('header.services')}
							</Link>
							<Link
								href='#about'
								className={styles.navLink}
								onClick={toggleMenu}
							>
								{t('header.about')}
							</Link>
							<Link
								href='#contact'
								className={styles.navLink}
								onClick={toggleMenu}
							>
								{t('header.contact')}
							</Link>
							<div>
								<LanguageSwitcher />

								<ThemeSwitcher />
							</div>
						</div>
					</div>
				)}
			</header>
		</section>
	);
}
