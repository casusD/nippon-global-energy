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
					<p className={styles.description}>{t('about.subtitle.first')}</p>
					{/* <div className={styles.stats}>
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
					</div> */}

					<div className={styles.stats}>
						<div className={styles.weAre}>
							<h3>{t('about.subtitle.second')}</h3>
							<p>{t('about.description.first')}</p>

							<span>{t('about.description.second')}</span>
						</div>
						<div className={styles.weAre}>
							<h3>{t('about.subtitle.fourth')}</h3>
							{/* <p>{t('about.description.third')}</p> */}
							<ul>
								<li>{t('about.stats.first')}</li>
								<li>{t('about.stats.second')}</li>
								<li>{t('about.stats.third')}</li>
								<li>{t('about.stats.fourth')}</li>
							</ul>
						</div>
					</div>

					<div className={styles.vision}>
						<h2>{t('about.subtitle.third')}</h2>

						<p>{t('about.description.third')}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
