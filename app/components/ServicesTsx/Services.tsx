'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Services.module.scss';

export default function Services() {
	const { t } = useLanguage();

	return (
		<section id='services' className={styles.services}>
			<div className={styles.container}>
				<h2 className={styles.title}>{t('services.title')}</h2>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.first')}</h3>
						<img
							className='rounded-xl'
							src='https://s.alicdn.com/@sc01/kf/H37f9df18e81145138217f0c8daff9f60B.jpg'
							alt='Solar'
						/>
					</div>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.second')}</h3>
						<img
							className='rounded-xl'
							src='https://avatars.mds.yandex.net/i?id=170d793bf6f0c4f0e6ad0305c9b9ff17_l-5274347-images-thumbs&n=13'
							alt='Solar'
						/>
					</div>
					<div className={styles.card}>
						<h3 className={styles.cardTitle}>{t('services.list.third')}</h3>
						<img
							className='rounded-xl'
							src='https://avatars.mds.yandex.net/get-altay/11004775/2a0000018bd2028d4d56fa50b0932184941b/XXL_height'
							alt='Solar'
						/>
					</div>
				</div>
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
			</div>
		</section>
	);
}
