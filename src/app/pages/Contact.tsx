import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { LocationMap } from "../components/LocationMap";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Create mailto link with form data
		const subject = encodeURIComponent(
			formData.subject || "Inquiry from Website",
		);
		const body = encodeURIComponent(
			`Name: ${formData.name}\n` +
				`Email: ${formData.email}\n` +
				`Phone: ${formData.phone || "Not provided"}\n` +
				`Subject: ${formData.subject}\n\n` +
				`Message:\n${formData.message}`,
		);

		const mailtoLink = `mailto:info-ke@kairuthiadvocates.co.ke?subject=${subject}&body=${body}`;

		// Open email client
		window.location.href = mailtoLink;
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const contactInfo = [
		{
			icon: Phone,
			title: "Phone",
			details: "0708 209 727",
			link: "tel:0708209727",
		},
		{
			icon: Mail,
			title: "Email",
			details: "info-ke@kairuthiadvocates.com",
			link: "mailto:info-ke@kairuthiadvocates.com",
		},
		{
			icon: MapPin,
			title: "Location",
			details: "Nairobi, Kenya",
			link: "#",
		},
		{
			icon: Clock,
			title: "Office Hours",
			details: "Mon - Fri: 8:00 AM - 5:00 PM",
			link: "#",
		},
	];

	return (
		<div>
			{/* Page Header */}
			<section className="relative py-32 bg-[#3d2b1f] text-[#c9a96e]">
				<div className="max-w-[1400px] mx-auto px-6">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl mb-6">
						CONTACT US
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-white/90 max-w-3xl">
						Get in touch with our legal team. We're here to help you with your
						legal needs.
					</motion.p>
				</div>
			</section>

			{/* Contact Information */}
			<section className="py-16 bg-white">
				<div className="max-w-[1400px] mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{contactInfo.map((info, index) => (
							<motion.div
								key={info.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -5 }}
								className="text-center p-6 bg-[#F5EFE6] rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer">
								<motion.div
									className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4"
									whileHover={{ rotate: 360, scale: 1.1 }}
									transition={{ duration: 0.5 }}>
									<info.icon className="w-6 h-6 text-[#4A5D4E]" />
								</motion.div>
								<h3 className="text-lg mb-2 text-[#2B2B2B]">{info.title}</h3>
								<a
									href={info.link}
									className="text-black/70 hover:text-[#6B4F3A] transition-colors">
									{info.details}
								</a>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form & Map */}
			<section className="py-24 bg-[#F5EFE6]">
				<div className="max-w-[1400px] mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}>
							<h2 className="text-3xl mb-6 text-[#2B2B2B]">
								Send Us a Message
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="name" className="block mb-2 text-black">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-white rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-[#1d4a14]"
										required
									/>
								</div>

								<div>
									<label htmlFor="email" className="block mb-2 text-black">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-white rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-[#1d4a14]"
										required
									/>
								</div>

								<div>
									<label htmlFor="phone" className="block mb-2 text-black">
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-white rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-[#1d4a14]"
									/>
								</div>

								<div>
									<label htmlFor="subject" className="block mb-2 text-black">
										Subject
									</label>
									<select
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-white rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-[#1d4a14]"
										required>
										<option value="">Select a subject</option>
										<option value="general">General Inquiry</option>
										<option value="consultation">Book a Consultation</option>
										<option value="corporate">Corporate Law</option>
										<option value="real-estate">Real Estate</option>
										<option value="family">Family Law</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label htmlFor="message" className="block mb-2 text-black">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows={6}
										className="w-full px-4 py-3 bg-white rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-[#1d4a14] resize-none"
										required
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-[#4A5D4E] text-white px-8 py-4 rounded-lg hover:bg-[#6B4F3A] transition-all text-lg hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group">
									<span className="relative z-10">Send Message</span>
									<div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
								</button>
							</form>
						</motion.div>

						{/* Map Placeholder */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}>
							<h2 className="text-3xl mb-6 text-[#2B2B2B]">Visit Our Office</h2>
							<div className="bg-white rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[500px]">
								<LocationMap
									latitude={-1.2730544}
									longitude={37.0004434}
									locationName="Kairuthi & Co. Advocates"
								/>
							</div>

							<div className="mt-8 bg-white p-6 rounded-lg">
								<h3 className="text-xl mb-4 text-[#2B2B2B]">
									Schedule a Consultation
								</h3>
								<p className="text-black/70 mb-4">
									Ready to discuss your legal needs? Contact us to schedule a
									consultation with one of our experienced attorneys.
								</p>
								<a
									href="tel:0708209727"
									className="inline-block bg-[#4A5D4E] text-white px-6 py-3 rounded-lg hover:bg-[#6B4F3A] transition-all hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group">
									<span className="relative z-10">Call Now: 0708 209 727</span>
									<div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-24 bg-white">
				<div className="max-w-[1400px] mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl text-[#2B2B2B]">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-black/70 mt-4">
							Common questions about our services and processes
						</p>
					</div>

					<div className="max-w-3xl mx-auto space-y-6">
						{[
							{
								question: "How do I schedule a consultation?",
								answer:
									"You can schedule a consultation by calling us at 0708 209 727, filling out the contact form above, or sending us an email. We typically respond within 24 hours.",
							},
							{
								question: "What should I bring to the first meeting?",
								answer:
									"Please bring any relevant documents related to your case, including contracts, correspondence, court papers, or other materials that may help us understand your situation.",
							},
							{
								question: "How are your fees structured?",
								answer:
									"Our fees vary depending on the nature and complexity of your case. We offer transparent pricing and will discuss our fee structure during your initial consultation.",
							},
							{
								question: "Do you handle cases outside Nairobi?",
								answer:
									"Yes, we handle cases throughout Kenya. Our team is experienced in working with clients across different regions and can accommodate remote consultations when needed.",
							},
							{
								question: "How long does a typical case take?",
								answer:
									"The duration varies greatly depending on the type of case. Some matters can be resolved in weeks, while others may take months or longer. We will provide you with a realistic timeline during our consultation.",
							},
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-[#F5EFE6] p-6 rounded-lg">
								<h3 className="text-lg mb-3 text-[#2B2B2B]">{faq.question}</h3>
								<p className="text-black/70 leading-relaxed">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Office Information */}
			<section className="py-24 bg-[#F5EFE6]">
				<div className="max-w-[1400px] mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div>
							<h2 className="text-3xl mb-6 text-[#2B2B2B]">
								Office Information
							</h2>
							<div className="space-y-6">
								<div>
									<h3 className="text-xl mb-2 text-[#2B2B2B]">Location</h3>
									<p className="text-black/70">
										Our offices are conveniently located in Nairobi, providing
										easy access for clients across the city and surrounding
										areas.
									</p>
								</div>
								<div>
									<h3 className="text-xl mb-2 text-[#2B2B2B]">Parking</h3>
									<p className="text-black/70">
										Ample parking is available for clients visiting our offices.
										Please inform us in advance if you require special parking
										arrangements.
									</p>
								</div>
								<div>
									<h3 className="text-xl mb-2 text-[#2B2B2B]">Accessibility</h3>
									<p className="text-black/70">
										Our facilities are designed to be accessible to all clients.
										Please let us know if you have any specific accessibility
										requirements.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-3xl mb-6 text-[#2B2B2B]">
								Emergency Contact
							</h2>
							<p className="text-lg text-black/70 mb-6">
								For urgent legal matters requiring immediate attention, please
								call our main line and indicate the urgent nature of your call.
								We have protocols in place to handle emergency situations.
							</p>
							<div className="bg-white p-6 rounded-lg">
								<h3 className="text-xl mb-4 text-[#2B2B2B]">
									After-Hours Support
								</h3>
								<p className="text-black/70 mb-4">
									While our regular office hours are Monday to Friday, 8:00 AM
									to 5:00 PM, we understand that legal emergencies can arise at
									any time.
								</p>
								<p className="text-black/70">
									For existing clients with urgent matters outside regular
									hours, please call our main line and leave a detailed message.
									A member of our team will respond as quickly as possible.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
