'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';
export default function Hero() {
	const { t } = useLanguage();

	return (
		<section id='hero' className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>{t('hero.title')}</h1>
					<p className={styles.subtitle}>{t('hero.subtitle')}</p>
					<div className={styles.cta}>
						<Link href='#services' className={styles.primaryButton}>
							{t('hero.cta.primary')}
						</Link>
						<Link href='#contact' className={styles.secondaryButton}>
							{t('hero.cta.secondary')}
						</Link>
					</div>
				</div>
				<div className={styles.imagesContainer}>
					<Image
						className='rounded-xl'
						src='/sunBatary.webp'
						alt='Hero Image'
						width={500}
						height={500}
					/>
					<Image
						className='rounded-xl'
						src='/energy-translation-in-vietnam.jpg'
						alt='Hero Image'
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
