'use client';

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import enMessages from '../i18n/locales/en.json';
import jaMessages from '../i18n/locales/ja.json';

type Language = 'en' | 'ja';

type LanguageContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
};

const messages = {
	en: enMessages,
	ja: jaMessages,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language') as Language;
		if (savedLanguage) {
			setCurrentLanguage(savedLanguage);
		} else {
			const browserLang = navigator.language.split('-')[0];
			setCurrentLanguage(browserLang === 'ja' ? 'ja' : 'en');
		}
		setMounted(true);
	}, []);

	const setLanguage = (lang: Language) => {
		setCurrentLanguage(lang);
		localStorage.setItem('language', lang);
		if (typeof document !== 'undefined') {
			document.documentElement.lang = lang;
		}
	};

	const t = (key: string) => {
		const keys = key.split('.');
		let value: Record<string, unknown> = messages[currentLanguage];

		for (const k of keys) {
			if (value && typeof value === 'object') {
				value = value[k] as Record<string, unknown>;
			} else {
				return key;
			}
		}

		return typeof value === 'string' ? value : key;
	};

	// Prevent flash of wrong language
	if (!mounted) {
		return null;
	}

	return (
		<LanguageContext.Provider
			value={{
				language: currentLanguage,
				setLanguage: setLanguage,
				t,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
