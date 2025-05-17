'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import styles from './Services.module.scss';

export default function Services() {
	const { t } = useLanguage();

	return (
		<section id='services' className={styles.services}>
			<div className={styles.container}>
				<h2 className={styles.title}>{t('services.title')}</h2>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>
							{t('services.renewable.title')}
						</h3>
						<p className={styles.cardDescription}>
							{t('services.renewable.description')}
						</p>
					</div>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>
							{t('services.smartGrid.title')}
						</h3>
						<p className={styles.cardDescription}>
							{t('services.smartGrid.description')}
						</p>
					</div>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.storage.title')}</h3>
						<p className={styles.cardDescription}>
							{t('services.storage.description')}
						</p>
					</div>

					<Image
						className='rounded-xl'
						src='/Renewable-Energy.webp'
						alt='Solar'
						width={500}
						height={500}
					/>
					<Image
						className='rounded-xl'
						src='/smartGrid.webp'
						alt='Solar'
						width={500}
						height={500}
					/>
					<Image
						className='rounded-xl'
						src='/storage.jpg'
						alt='Solar'
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
