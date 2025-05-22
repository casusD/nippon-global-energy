'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.scss';

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

export default function About() {
	const { t } = useLanguage();

	const { ref: ref1, isInView: isInView1 } = useAnimateOnScroll({ once: true });

	const animationVariants1 = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};
	const animationVariants2 = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<section id='about' className={styles.about}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>{t('about.title')}</h2>
					<p className={styles.description}>{t('about.subtitle.first')}</p>

					<div className={styles.stats}>
						<motion.div
							ref={ref1}
							initial='hidden'
							animate={isInView1 ? 'visible' : 'hidden'}
							variants={animationVariants1}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
							<div className={styles.weAre}>
								<h3>{t('about.subtitle.second')}</h3>
								<p>{t('about.description.first')}</p>

								<span>{t('about.description.second')}</span>
							</div>
						</motion.div>
						<motion.div
							ref={ref1}
							initial='hidden'
							animate={isInView1 ? 'visible' : 'hidden'}
							variants={animationVariants2}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
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
						</motion.div>
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
