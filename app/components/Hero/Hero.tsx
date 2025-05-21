'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import styles from './Hero.module.scss';
export default function Hero() {
	const { t } = useLanguage();

	return (
		<section id='hero' className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>{t('hero.title')}</h1>
					<p className={styles.subtitle}>{t('hero.subtitle')}</p>
				</div>

				<div className={styles.description}>
					<Image
						className='rounded-xl'
						src='/sunBatary.webp'
						alt='Hero Image'
						width={500}
						height={500}
					/>
					<p>{t('hero.description')}</p>
				</div>

				<div className={styles.list}>
					<div>
						<h2>{t('hero.list.title')}</h2>
						<ul>
							<li>{t('hero.list.first')}</li>
							<li>{t('hero.list.second')}</li>
							<li>{t('hero.list.third')}</li>
						</ul>
					</div>
					<Image
						className='rounded-xl'
						src='/energy-translation-in-vietnam.jpg'
						alt='Hero Image'
						width={500}
						height={500}
					/>
				</div>

				<div className={styles.more}>
					<p>{t('hero.more')}</p>

					<h3>{t('hero.slogan')}</h3>
				</div>
			</div>
		</section>
	);
}
