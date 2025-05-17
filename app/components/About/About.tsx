'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.scss';

export default function About() {
	const { t } = useLanguage();

	return (
		<section id='about' className={styles.about}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>{t('about.title')}</h2>
					<p className={styles.description}>{t('about.description')}</p>
					<div className={styles.stats}>
						<div className={styles.stat}>
							<span className={styles.statNumber}>15+</span>
							<span className={styles.statLabel}>{t('about.stats.years')}</span>
						</div>
						<div className={styles.stat}>
							<span className={styles.statNumber}>500+</span>
							<span className={styles.statLabel}>
								{t('about.stats.projects')}
							</span>
						</div>
						<div className={styles.stat}>
							<span className={styles.statNumber}>20+</span>
							<span className={styles.statLabel}>
								{t('about.stats.countries')}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
