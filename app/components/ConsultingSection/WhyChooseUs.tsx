'use client';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.scss';

export default function WhyChooseUs() {
	const { t } = useLanguage();

	const points = [
		{
			icon: '✅',
			text: t('whyChooseUs.first'),
		},
		{
			icon: '✅',
			text: t('whyChooseUs.second'),
		},
		{
			icon: '✅',
			text: t('whyChooseUs.third'),
		},
		{
			icon: '✅',
			text: t('whyChooseUs.fourth'),
		},
		{
			icon: '✅',
			text: t('whyChooseUs.fifth'),
		},
	];

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>{t('whyChooseUs.title')}</h2>
				<div className={styles.list}>
					{points.map((point, index) => (
						<motion.div
							key={index}
							className={styles.item}
							whileHover={{ scale: 1.02 }}
						>
							<span className={styles.icon}>{point.icon}</span>
							<p className={styles.text}>{point.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
