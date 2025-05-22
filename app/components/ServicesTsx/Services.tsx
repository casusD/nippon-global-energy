'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Services.module.scss';

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

export default function Services() {
	const { t } = useLanguage();

	const { ref: ref1, isInView: isInView1 } = useAnimateOnScroll({ once: true });
	const { ref: ref2, isInView: isInView2 } = useAnimateOnScroll({ once: true });
	const { ref: ref3, isInView: isInView3 } = useAnimateOnScroll({ once: true });
	const { ref: ref4, isInView: isInView4 } = useAnimateOnScroll({ once: true });

	const animationVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section id='services' className={styles.services}>
			<div className={styles.container}>
				<h2 className={styles.title}>{t('services.title')}</h2>
				<div className={styles.grid}>
					{/* <motion.div
						ref={ref1}
						initial='hidden'
						animate={isInView1 ? 'visible' : 'hidden'}
						variants={animationVariants}
						transition={{ duration: 1, ease: 'easeOut' }}
					> */}
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.first')}</h3>
						<img
							className='rounded-xl'
							src='https://s.alicdn.com/@sc01/kf/H37f9df18e81145138217f0c8daff9f60B.jpg'
							alt='Solar'
						/>
					</div>
					{/* </motion.div> */}
					{/* <motion.div
						ref={ref2}
						initial='hidden'
						animate={isInView1 ? 'visible' : 'hidden'}
						variants={animationVariants}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
					> */}
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.second')}</h3>
						<img
							className='rounded-xl'
							src='https://avatars.mds.yandex.net/i?id=170d793bf6f0c4f0e6ad0305c9b9ff17_l-5274347-images-thumbs&n=13'
							alt='Solar'
						/>
					</div>
					{/* </motion.div> */}
					{/* <motion.div
						ref={ref3}
						initial='hidden'
						animate={isInView1 ? 'visible' : 'hidden'}
						variants={animationVariants}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
					> */}
					<div className={`${styles.card} ${styles.thirdCard}`}>
						<h3 className={styles.cardTitle}>{t('services.list.third')}</h3>
						<img
							className='rounded-xl'
							src='https://avatars.mds.yandex.net/get-altay/11004775/2a0000018bd2028d4d56fa50b0932184941b/XXL_height'
							alt='Solar'
						/>
					</div>
					{/* </motion.div> */}
				</div>
				{/* <motion.div
					ref={ref4}
					initial='hidden'
					animate={isInView1 ? 'visible' : 'hidden'}
					variants={animationVariants}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
				> */}
				<div className={styles.flex}>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.fourth')}</h3>
						<img
							className='rounded-xl'
							src='https://avatars.mds.yandex.net/i?id=8629cb4788c35c423ccda28f17d19065_l-9065739-images-thumbs&n=13'
							alt='Solar'
						/>
					</div>{' '}
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.fifth')}</h3>
						<img
							className='rounded-xl'
							src='https://www.jetro.go.jp/ext_images/topics/topics2024/20240801/1.jpg'
							alt='Solar'
						/>
					</div>
				</div>
				{/* </motion.div> */}
			</div>
		</section>
	);
}
