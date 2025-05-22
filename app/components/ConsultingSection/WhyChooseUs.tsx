'use client';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './WhyChooseUs.module.scss';

interface UseAnimateOnScrollOptions {
	once?: boolean;
	margin?: string;
	amount?: 'some' | 'all' | number;
}

interface UseAnimateOnScrollResult {
	ref: React.RefObject<HTMLDivElement>;
	isInView: boolean;
}

function useAnimateOnScroll(
	options?: UseAnimateOnScrollOptions
): UseAnimateOnScrollResult {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, options);
	return { ref, isInView };
}

export default function WhyChooseUs() {
	const { t } = useLanguage();

	const { ref: ref1, isInView: isInView1 } = useAnimateOnScroll({ once: true });

	const animationVariants1 = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	};

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
				<motion.div
					ref={ref1}
					initial='hidden'
					animate={isInView1 ? 'visible' : 'hidden'}
					variants={animationVariants1}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
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
				</motion.div>
			</div>
		</section>
	);
}
