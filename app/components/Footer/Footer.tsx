'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.scss';

const Footer = () => {
	const { t } = useLanguage();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.grid}>
					{/* Company Info */}
					<div>
						<h3 className={styles.sectionTitle}>NIPPON GLOBAL ENERGY</h3>
						<p className={styles.text}>{t('footer.description')}</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className={styles.sectionTitle}>
							{t('footer.quickLinks.title')}
						</h3>
						<ul className={styles.linkList}>
							<li>
								<a href='#services'>{t('footer.quickLinks.services')}</a>
							</li>
							<li>
								<a href='#about'>{t('footer.quickLinks.about')}</a>
							</li>
							<li>
								<a href='#contact'>{t('footer.quickLinks.contact')}</a>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className={styles.sectionTitle}>{t('footer.legal.title')}</h3>
						<ul className={styles.linkList}>
							<li>
								<a href='#'>{t('footer.legal.privacy')}</a>
							</li>
							<li>
								<a href='#'>{t('footer.legal.terms')}</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className={styles.divider}>
					<p>{t('footer.copyright')}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
