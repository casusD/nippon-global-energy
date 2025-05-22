'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import {
	Facebook,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Star,
	Twitter,
} from 'lucide-react';
import { useRef, useState } from 'react';
import styles from './Contact.module.scss';

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

export default function Contact() {
	const { t } = useLanguage();

	const { ref: ref1, isInView: isInView1 } = useAnimateOnScroll({ once: true });
	const { ref: ref2, isInView: isInView2 } = useAnimateOnScroll({ once: true });
	// const { ref: ref3, isInView: isInView3 } = useAnimateOnScroll({ once: true });

	const animationVariants1 = {
		hidden: { opacity: 0, x: 100 },
		visible: { opacity: 1, x: 0 },
	};
	const animationVariants2 = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		rating: 0,
	});
	const [status, setStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus({ type: null, message: '' });

		try {
			// Here you would typically send the form data to your backend
			console.log('Form data:', formData);
			setStatus({
				type: 'success',
				message: t('contact.form.success'),
			});
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: '',
				rating: 0,
			});
		} catch (error) {
			setStatus({
				type: 'error',
				message: t('contact.form.error'),
			});
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleRatingChange = (rating: number) => {
		setFormData(prev => ({
			...prev,
			rating,
		}));
	};

	return (
		<section id='contact' className={styles.contactSection}>
			<div className={styles.container}>
				<div className={styles.contactContent}>
					<h2 className={styles.contactTitle}>{t('contact.title')}</h2>

					<div className={styles.contactGrid}>
						<motion.div
							ref={ref1}
							initial='hidden'
							animate={isInView1 ? 'visible' : 'hidden'}
							variants={animationVariants2}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
							<div>
								<div className={styles.contactInfoSection}>
									<h3 className={styles.contactInfoTitle}>
										{t('contact.infoTitle')}
									</h3>
									<div className={styles.contactInfoGrid}>
										<div className={styles.contactInfoItem}>
											<div className={styles.contactInfoLabel}>
												<Mail className={styles.contactSocialIcon} />
												{t('contact.info.email.title')}
											</div>
											<a
												href={`mailto:${t('contact.info.email.value')}`}
												className={styles.contactInfoLink}
											>
												{t('contact.info.email.value')}
											</a>
										</div>

										<div className={styles.contactInfoItem}>
											<div className={styles.contactInfoLabel}>
												<Phone className={styles.contactSocialIcon} />
												{t('contact.info.phone.title')}
											</div>
											<a
												href={`tel:${t('contact.info.phone.value')}`}
												className={styles.contactInfoLink}
											>
												{t('contact.info.phone.value')}
											</a>
										</div>

										<div className={styles.contactInfoItem}>
											<div className={styles.contactInfoLabel}>
												<MapPin className={styles.contactSocialIcon} />
												{t('contact.info.address.title')}
											</div>
											<p className={styles.contactInfoValue}>
												{t('contact.info.address.value')}
											</p>
										</div>
									</div>

									<div className={styles.contactSocialLinks}>
										<a
											href='https://linkedin.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Linkedin className={styles.contactSocialIcon} />
										</a>
										<a
											href='https://twitter.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Twitter className={styles.contactSocialIcon} />
										</a>
										<a
											href='https://facebook.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Facebook className={styles.contactSocialIcon} />
										</a>
									</div>
								</div>
								<div>
									<video
										src='/work-with-us.mp4'
										autoPlay
										muted
										loop
										className='w-full h-72 object-cover rounded-xl mt-10'
									></video>
								</div>
							</div>
						</motion.div>

						<motion.div
							ref={ref2}
							initial='hidden'
							animate={isInView1 ? 'visible' : 'hidden'}
							variants={animationVariants1}
							transition={{ duration: 1, ease: 'easeOut' }}
						>
							<div className={styles.contactFormSection}>
								<form onSubmit={handleSubmit} className={styles.contactForm}>
									<div className={styles.contactFormGroup}>
										<label htmlFor='name' className={styles.contactLabel}>
											{t('contact.form.name')}
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleChange}
											required
											className={styles.contactInput}
										/>
									</div>

									<div className={styles.contactFormGroup}>
										<label htmlFor='email' className={styles.contactLabel}>
											{t('contact.form.email')}
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
											className={styles.contactInput}
										/>
									</div>

									<div className={styles.contactFormGroup}>
										<label htmlFor='phone' className={styles.contactLabel}>
											{t('contact.form.phone')}
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											className={styles.contactInput}
										/>
									</div>

									<div className={styles.contactFormGroup}>
										<label className={styles.contactLabel}>
											{t('contact.form.rating')}
										</label>
										<div className={styles.ratingContainer}>
											{[1, 2, 3, 4, 5].map(star => (
												<button
													key={star}
													type='button'
													className={`${styles.ratingStar} ${
														star <= formData.rating
															? styles.ratingStarActive
															: ''
													}`}
													onClick={() => handleRatingChange(star)}
												>
													<Star
														size={24}
														fill={
															star <= formData.rating ? 'currentColor' : 'none'
														}
													/>
												</button>
											))}
										</div>
									</div>

									<div className={styles.contactFormGroup}>
										<label htmlFor='message' className={styles.contactLabel}>
											{t('contact.form.message')}
										</label>
										<textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											required
											className={styles.contactTextarea}
										/>
									</div>

									<button type='submit' className={styles.contactSubmitButton}>
										{t('contact.form.submit')}
									</button>

									{status.type && (
										<div
											className={`${styles.contactStatusMessage} ${
												status.type === 'success'
													? styles.contactSuccessMessage
													: styles.contactErrorMessage
											}`}
										>
											{status.message}
										</div>
									)}
								</form>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
