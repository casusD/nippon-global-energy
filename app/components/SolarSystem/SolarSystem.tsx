'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './SolarSystem.module.scss';

export default function SolarSystem() {
	const { t } = useLanguage();

	const solarRooftop = Array(6).fill(null);
	const solarCarports = Array(6).fill(null);

	return (
		<section className={`${styles.section} ${styles.dark}`}>
			<div className={styles.container}>
				<div
					className={`${styles.flexRowResponsive} ${styles.card} ${styles.dark}`}
				>
					<div>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.rooftop.title')}
						</h2>
						<div className={styles.videoWrapper}>
							<video
								className={styles.video}
								src='/energy-solar2.mp4'
								autoPlay
								muted
								loop
							/>
						</div>
					</div>

					<ul className={`${styles.list} ${styles.dark}`}>
						{solarRooftop.map((_, i) => (
							<li key={i}>{t(`solarSystem.rooftop.benefits.${i}`)}</li>
						))}
					</ul>
				</div>

				<div className={`${styles.flexRowResponsive} ${styles.secondaryCard}`}>
					<div className={styles.dark}>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.carports.title')}
						</h2>
						<ul className={`${styles.list} ${styles.dark}`}>
							{solarCarports.map((_, i) => (
								<li key={i}>{t(`solarSystem.carports.benefits.${i}`)}</li>
							))}
						</ul>
					</div>
					<img className={styles.image} src='/solar.gif' alt='Solar Carport' />
				</div>
			</div>
		</section>
	);
}
