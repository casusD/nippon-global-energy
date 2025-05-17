import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSwitcher.module.scss';

export default function LanguageSwitcher() {
	const { t, language, setLanguage } = useLanguage();

	// const [language, setLanguage] = useState<'en' | 'ja'>('en');

	return (
		<div className={styles.wrapper}>
			<div className={styles.switcher}>
				<div
					className={`${styles.activeBg} ${
						language === 'en' ? styles.left : styles.right
					}`}
				></div>
				<button
					className={`${styles.button} ${
						language === 'en' ? styles.active : ''
					}`}
					onClick={() => setLanguage('en')}
				>
					EN
				</button>
				<button
					className={`${styles.button} ${
						language === 'ja' ? styles.active : ''
					}`}
					onClick={() => setLanguage('ja')}
				>
					JP
				</button>
			</div>
		</div>
	);
}
