'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './SolarSystem.module.scss';

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

export default function SolarSystem() {
	const { t } = useLanguage();
	const { ref: ref1, isInView: isInView1 } = useAnimateOnScroll({ once: true });
	const { ref: ref2, isInView: isInView2 } = useAnimateOnScroll({ once: true });
	const { ref: ref3, isInView: isInView3 } = useAnimateOnScroll({ once: true });

	const animationVariants = {
		hidden: { opacity: 0, y: 150 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section className={`${styles.section} `}>
			<div className={styles.container}>
				{/* <motion.div
					ref={ref1}
					initial='hidden'
					animate={isInView1 ? 'visible' : 'hidden'}
					variants={animationVariants}
					transition={{ duration: 1, ease: 'easeOut' }}
				> */}
				<div className={`${styles.flexRowResponsive} ${styles.card} }`}>
					<div>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.businesses.first.name')}
						</h2>
						<div className={styles.videoWrapper}>
							<img
								className={styles.video}
								src='/solarSystem_first.png'
								alt='Castrol'
							/>
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
				{/* </motion.div> */}

				{/* <motion.div
					ref={ref2}
					initial='hidden'
					animate={isInView2 ? 'visible' : 'hidden'}
					variants={animationVariants}
					transition={{ duration: 1, ease: 'easeOut' }}
				> */}
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
						src='/exportImport.jpg'
						alt='Solar Carport'
					/>
				</div>
				{/* </motion.div> */}

				{/* <motion.div
					ref={ref3}
					initial='hidden'
					animate={isInView3 ? 'visible' : 'hidden'}
					variants={animationVariants}
					transition={{ duration: 1, ease: 'easeOut' }}
				> */}
				<div className={`${styles.flexRowResponsive} ${styles.card} `}>
					<div>
						<h2 className={styles.titleLarge}>
							{t('solarSystem.businesses.third.name')}
						</h2>
						<div className={styles.videoWrapper}>
							<img className={styles.video} src='/solarSystem_third.png' />
						</div>
					</div>
					<p className={styles.floatText}>
						{t(`solarSystem.businesses.third.text2`)}
					</p>

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
				{/* </motion.div> */}
			</div>
		</section>
	);
}
