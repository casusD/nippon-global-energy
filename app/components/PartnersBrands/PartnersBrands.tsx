'use client';
import { useLanguage } from '@/context/LanguageContext';
import styles from './PartnersBrands.module.scss';

export default function PartnersBrands() {
	const { t } = useLanguage();

	const directions = [
		t('partnersBrands.first'),
		t('partnersBrands.second'),
		t('partnersBrands.third'),
		t('partnersBrands.fourth'),
	];

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>{t('partnersBrands.title')}</h2>
				<p className={styles.description}>{t('partnersBrands.description')}</p>
				<ul className={styles.list}>
					{directions.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</section>
	);
}
