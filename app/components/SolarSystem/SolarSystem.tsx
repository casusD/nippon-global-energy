'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './SolarSystem.module.scss';

export default function SolarSystem() {
	const { t } = useLanguage();

	const solarRooftop = Array(3).fill(null);
	const solarCarports = Array(6).fill(null);

	return (
		<section className={`${styles.section} `}>
			<div className={styles.container}>
				<div className={`${styles.flexRowResponsive} ${styles.card} }`}>
					<div>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.businesses.first.name')}
						</h2>
						<div className={styles.videoWrapper}>
							<img className={styles.video} src='/castol.jpg' alt='Castrol' />
						</div>
					</div>

					<div>
						<p>{t(`solarSystem.businesses.first.text1`)}</p>

						<ul className={`${styles.list} `}>
							<li>{t(`solarSystem.businesses.first.list.first`)}</li>
							<li>{t(`solarSystem.businesses.first.list.second`)}</li>
							<li>{t(`solarSystem.businesses.first.list.third`)}</li>
						</ul>

						<p>{t(`solarSystem.businesses.first.text2`)}</p>
					</div>
				</div>

				<div className={`${styles.flexRowResponsive} ${styles.secondaryCard}`}>
					<div className={styles.dark}>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.businesses.second.name')}
						</h2>

						<div>
							<p>{t(`solarSystem.businesses.second.text1`)}</p>
							<ul className={`${styles.list} `}>
								<li>{t(`solarSystem.businesses.second.list.first`)}</li>
								<li>{t(`solarSystem.businesses.second.list.second`)}</li>
								<li>{t(`solarSystem.businesses.second.list.third`)}</li>
								<li>{t(`solarSystem.businesses.second.list.fourth`)}</li>
							</ul>
							<p>{t(`solarSystem.businesses.second.text2`)}</p>
						</div>
					</div>
					<img
						className={styles.image}
						src='https://sun-asia.ru/wp-content/webp-express/webp-images/uploads/morskie-kontejnernye-perevozki.jpg.webp'
						alt='Solar Carport'
					/>
				</div>

				<div className={`${styles.flexRowResponsive} ${styles.card} `}>
					<div>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.businesses.third.name')}
						</h2>
						<div className={styles.videoWrapper}>
							<img
								className={styles.video}
								src='https://pandapipe.com/wp-content/uploads/2023/10/api-5l-carbon-steel-line-pipe-1024x695.webp'
							/>
						</div>
						<p>{t(`solarSystem.businesses.third.text2`)}</p>
					</div>

					<div>
						<p>{t(`solarSystem.businesses.third.text1`)}</p>

						<ul className={`${styles.list} `}>
							<li>{t(`solarSystem.businesses.third.list.first`)}</li>
							<li>{t(`solarSystem.businesses.third.list.second`)}</li>
							<li>{t(`solarSystem.businesses.third.list.third`)}</li>
							<li>{t(`solarSystem.businesses.third.list.fourth`)}</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
