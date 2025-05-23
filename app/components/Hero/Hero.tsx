'use client';

import { useLanguage } from '@/context/LanguageContext';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
	const { t } = useLanguage();

	return (
		<AnimatePresence>
			<section id='hero' className={styles.hero}>
				<div className={styles.container}>
					<div className={styles.content}>
						<h1 className={styles.title}>{t('hero.title')}</h1>
						<p className={styles.subtitle}>{t('hero.subtitle')}</p>
					</div>

					<div className={styles.description}>
						<Image
							className='rounded-xl'
							src='/globalEnergy.png'
							alt='Hero Image'
							width={400}
							height={100}
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
							src='/unnamed.png'
							alt='Hero Image'
							width={400}
							height={200}
						/>
					</div>

					<div className={styles.more}>
						<p>{t('hero.more')}</p>

						<h3>{t('hero.slogan')}</h3>
					</div>
				</div>
			</section>
		</AnimatePresence>
	);
}
