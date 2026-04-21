import { motion } from "motion/react";
import { useState } from "react";
import {
	Building2,
	Home,
	Copyright,
	Shield,
	Plane,
	Gavel,
	Heart,
	Landmark,
	FileText,
	Briefcase,
	Scale,
	TrendingUp,
	FileCheck,
	X,
} from "lucide-react";

export function PracticeAreas() {
	const [selectedArea, setSelectedArea] = useState<number | null>(null);

	const practiceAreas = [
		{
			icon: Building2,
			title: "Corporate & Commercial Law",
			description: "Business formation, governance, contracts, compliance",
			detailedDescription:
				"We provide comprehensive legal support for businesses at every stage of their lifecycle. Our corporate and commercial law practice is designed to help businesses navigate complex legal landscapes while maximizing opportunities for growth and minimizing risk.",
			services: [
				"Company Formation & Registration",
				"Corporate Governance & Compliance",
				"Commercial Contracts & Agreements",
				"Mergers & Acquisitions",
				"Joint Ventures & Partnerships",
				"Shareholder Agreements",
				"Corporate Restructuring",
				"Business Advisory Services",
			],
			expertise:
				"Our team has extensive experience advising startups, SMEs, and large corporations across various industries. We understand that every business is unique, and we tailor our services to meet your specific needs and objectives.",
		},
		{
			icon: Home,
			title: "Conveyancing & Real Estate",
			description: "Property transactions, leases, ownership transfers",
			detailedDescription:
				"Our real estate practice covers all aspects of property law, from residential transactions to complex commercial developments. We conduct thorough due diligence to protect your interests and ensure smooth property transfers.",
			services: [
				"Property Purchases & Sales",
				"Title Searches & Verification",
				"Lease Agreements & Tenancy Matters",
				"Property Development",
				"Land Disputes & Resolution",
				"Mortgage & Charge Registration",
				"Property Subdivision",
				"Real Estate Investment Advisory",
			],
			expertise:
				"With deep knowledge of local property laws and regulations, we guide clients through every step of the conveyancing process, ensuring compliance and protecting your investment.",
		},
		{
			icon: Copyright,
			title: "Intellectual Property Litigation",
			description: "Trademark and copyright protection",
			detailedDescription:
				"Protect your creative works, brands, and innovations with our comprehensive intellectual property services. We help you secure, manage, and enforce your IP rights in an increasingly competitive marketplace.",
			services: [
				"Trademark Registration & Protection",
				"Copyright Registration & Enforcement",
				"Patent Advisory",
				"IP Litigation & Dispute Resolution",
				"Licensing Agreements",
				"Brand Protection Strategies",
				"IP Due Diligence",
				"Trade Secret Protection",
			],
			expertise:
				"Our IP team combines legal expertise with business acumen to help you maximize the value of your intellectual property while defending against infringement.",
		},
		{
			icon: Shield,
			title: "Insurance Law",
			description: "Insurance disputes and advisory",
			detailedDescription:
				"Navigate complex insurance matters with confidence. We represent both policyholders and insurers in disputes and provide strategic advisory on insurance-related issues.",
			services: [
				"Insurance Claim Disputes",
				"Policy Review & Analysis",
				"Subrogation Claims",
				"Insurance Litigation",
				"Reinsurance Matters",
				"Insurance Regulatory Compliance",
				"Risk Management Advisory",
				"Bad Faith Claims",
			],
			expertise:
				"Our insurance law practice is built on years of experience handling complex insurance disputes and providing practical solutions that protect our clients' interests.",
		},
		{
			icon: Plane,
			title: "Immigration Law",
			description: "Visas, permits, and compliance",
			detailedDescription:
				"Whether you're relocating for work, family, or investment, our immigration law services help individuals and businesses navigate visa requirements, work permits, and compliance matters.",
			services: [
				"Work Permits & Employment Passes",
				"Visa Applications & Extensions",
				"Citizenship & Naturalization",
				"Business Immigration",
				"Family Reunification",
				"Immigration Compliance",
				"Deportation Defense",
				"Immigration Appeals",
			],
			expertise:
				"We stay current with changing immigration policies and procedures to provide accurate, timely guidance for your immigration needs.",
		},
		{
			icon: Gavel,
			title: "Criminal Law",
			description: "Defense and representation",
			detailedDescription:
				"Facing criminal charges is a serious matter that requires experienced legal representation. Our criminal defense team is committed to protecting your rights and ensuring you receive a fair trial.",
			services: [
				"Criminal Defense & Representation",
				"Bail Applications",
				"Pre-Trial Negotiations",
				"Trial Representation",
				"Appeals & Reviews",
				"White Collar Crime Defense",
				"Regulatory Offenses",
				"Criminal Investigations Support",
			],
			expertise:
				"With a proven track record in criminal defense, we provide vigorous representation at every stage of the criminal justice process.",
		},
		{
			icon: Heart,
			title: "Family Law",
			description: "Divorce, custody, succession matters",
			detailedDescription:
				"Family matters require sensitivity, discretion, and expert legal guidance. We help clients navigate divorce, custody disputes, succession planning, and other family law issues with compassion and professionalism.",
			services: [
				"Divorce & Separation",
				"Child Custody & Support",
				"Spousal Maintenance",
				"Succession & Estate Planning",
				"Wills & Trusts",
				"Probate & Estate Administration",
				"Adoption Proceedings",
				"Prenuptial Agreements",
			],
			expertise:
				"Our family law team understands the emotional complexity of these matters and works to achieve resolutions that protect your interests and those of your loved ones.",
		},
		{
			icon: Landmark,
			title: "Banking, Finance & Tax Law",
			description: "Financial and tax advisory",
			detailedDescription:
				"Navigate the complex world of banking, finance, and taxation with expert legal guidance. We advise on financial transactions, regulatory compliance, and tax planning strategies.",
			services: [
				"Banking & Finance Transactions",
				"Loan Documentation & Security",
				"Tax Planning & Advisory",
				"Tax Dispute Resolution",
				"Financial Regulatory Compliance",
				"Project Finance",
				"Securities & Capital Markets",
				"Structured Finance",
			],
			expertise:
				"Our banking and finance team has extensive experience structuring complex transactions and providing practical solutions to financial and tax challenges.",
		},
		{
			icon: FileText,
			title: "Insolvency & Debt Recovery",
			description: "Debt recovery and restructuring",
			detailedDescription:
				"Whether you're facing financial difficulties or seeking to recover debts, our insolvency and debt recovery practice provides strategic solutions to protect your interests.",
			services: [
				"Debt Collection & Recovery",
				"Insolvency Proceedings",
				"Corporate Restructuring",
				"Bankruptcy Matters",
				"Creditors' Rights",
				"Receivership",
				"Liquidation Proceedings",
				"Debt Negotiation & Settlement",
			],
			expertise:
				"We understand the urgency of debt recovery and insolvency matters and work efficiently to achieve the best possible outcomes for our clients.",
		},
		{
			icon: Briefcase,
			title: "Employment & Labour Law",
			description: "Workplace disputes and HR compliance",
			detailedDescription:
				"Maintain positive workplace relationships and ensure compliance with employment laws. We advise both employers and employees on a wide range of labor and employment matters.",
			services: [
				"Employment Contracts & Policies",
				"Workplace Disputes & Grievances",
				"Unfair Dismissal & Termination",
				"Employment Tribunal Representation",
				"HR Compliance & Advisory",
				"Discrimination & Harassment Claims",
				"Redundancy & Restructuring",
				"Employee Benefits & Compensation",
			],
			expertise:
				"Our employment law team helps businesses maintain compliant HR practices while representing individuals in workplace disputes.",
		},
		{
			icon: Scale,
			title: "Alternative Dispute Resolution",
			description: "Mediation and arbitration",
			detailedDescription:
				"Resolve disputes efficiently and cost-effectively through alternative dispute resolution. We provide mediation, arbitration, and negotiation services to help parties reach mutually acceptable solutions.",
			services: [
				"Commercial Mediation",
				"Arbitration Proceedings",
				"Negotiation & Settlement",
				"Dispute Resolution Advisory",
				"Construction Disputes",
				"Partnership Disputes",
				"Contract Disputes",
				"International Arbitration",
			],
			expertise:
				"Our ADR specialists are skilled negotiators and mediators who help parties avoid costly and time-consuming litigation.",
		},
		{
			icon: TrendingUp,
			title: "Business Development Services",
			description: "Startup and growth advisory",
			detailedDescription:
				"Support your business growth with strategic legal and business advisory services. We help startups and established businesses navigate expansion, fundraising, and strategic partnerships.",
			services: [
				"Startup Legal Advisory",
				"Business Planning & Strategy",
				"Fundraising & Investment",
				"Strategic Partnerships",
				"Market Entry Advisory",
				"Licensing & Franchising",
				"Business Exit Strategies",
				"Growth & Expansion Planning",
			],
			expertise:
				"We combine legal expertise with business insight to help entrepreneurs and businesses achieve their growth objectives.",
		},
		{
			icon: FileCheck,
			title: "Compliance & Legal Consultancy",
			description: "Regulatory and legal advisory",
			detailedDescription:
				"Stay compliant with evolving regulatory requirements and legal obligations. We provide ongoing legal consultancy and compliance advisory services to help businesses manage risk and operate within the law.",
			services: [
				"Regulatory Compliance Advisory",
				"Legal Risk Assessment",
				"Policy Development & Review",
				"Compliance Training",
				"Regulatory Audits",
				"Data Protection & Privacy",
				"Anti-Money Laundering Compliance",
				"Corporate Governance Advisory",
			],
			expertise:
				"Our compliance team helps organizations develop robust compliance frameworks and navigate complex regulatory environments.",
		},
	];

	return (
		<div>
			{/* Modal */}
			{selectedArea !== null && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
					onClick={() => setSelectedArea(null)}>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}>
						<div className="sticky top-0 bg-white border-b border-black/10 p-6 flex items-start justify-between">
							<div className="flex items-center gap-4">
								<div className="inline-flex items-center justify-center w-12 h-12 bg-[#F5EFE6] rounded-lg flex-shrink-0">
									{(() => {
										const Icon = practiceAreas[selectedArea].icon;
										return <Icon className="w-6 h-6 text-[#4A5D4E]" />;
									})()}
								</div>
								<h2 className="text-3xl text-[#2B2B2B]">
									{practiceAreas[selectedArea].title}
								</h2>
							</div>
							<button
								onClick={() => setSelectedArea(null)}
								className="p-2 hover:bg-black/5 rounded-lg transition-colors">
								<X className="w-6 h-6 text-black/60" />
							</button>
						</div>

						<div className="p-6 space-y-6">
							<p className="text-lg text-black/80 leading-relaxed">
								{practiceAreas[selectedArea].detailedDescription}
							</p>

							<div>
								<h3 className="text-2xl mb-4 text-[#2B2B2B]">
									Our Services Include:
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									{practiceAreas[selectedArea].services.map((service) => (
										<div key={service} className="flex items-start gap-2">
											<div className="w-2 h-2 bg-[#6B4F3A] rounded-full mt-2 flex-shrink-0"></div>
											<span className="text-black/80">{service}</span>
										</div>
									))}
								</div>
							</div>

							<div className="bg-[#F5EFE6] p-6 rounded-lg">
								<h3 className="text-xl mb-3 text-[#2B2B2B]">Our Expertise</h3>
								<p className="text-black/80 leading-relaxed">
									{practiceAreas[selectedArea].expertise}
								</p>
							</div>

							<div className="flex justify-center pt-4">
								<a
									href="/contact"
									className="inline-block bg-[#4A5D4E] text-white px-8 py-4 rounded-lg hover:bg-[#6B4F3A] transition-all text-lg hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group">
									<span className="relative z-10">Schedule a Consultation</span>
									<div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			)}

			{/* Page Header */}
			<section className="relative py-32 bg-[#3d2b1f] text-white overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-10 left-10 w-72 h-72 bg-[#6B4F3A] rounded-full blur-3xl"></div>
				</div>

				<div className="max-w-[1400px] mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
						<span className="text-white/90 text-sm font-medium">
							Comprehensive Legal Services
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl mb-4">
						LEGAL PRACTICE AREAS
					</motion.h1>
					<div className="h-1 w-24 bg-gradient-to-r from-[#6B4F3A] to-white mb-6 rounded-full"></div>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-white/90 max-w-3xl">
						Comprehensive legal services tailored to meet your unique needs
						across multiple disciplines.
					</motion.p>
				</div>
			</section>

			{/* Practice Areas Grid */}
			<section className="py-24 bg-white relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-20 right-20 w-96 h-96 bg-[#6B4F3A]/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 left-20 w-72 h-72 bg-[#6B4F3A]/5 rounded-full blur-3xl"></div>
				</div>

				<div className="max-w-[1400px] mx-auto px-6 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{practiceAreas.map((area, index) => (
							<motion.div
								key={area.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="bg-gradient-to-br from-[#F5EFE6] to-[#F5EFE6] p-8 rounded-xl hover:shadow-2xl transition-all cursor-pointer border border-[#D8CFC4] hover:border-[#6B4F3A]/20 relative group overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-[#6B4F3A]/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform"></div>

								<motion.div
									className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-md relative z-10"
									whileHover={{ rotate: 360, scale: 1.1 }}
									transition={{ duration: 0.6 }}>
									<area.icon className="w-8 h-8 text-[#4A5D4E]" />
								</motion.div>

								<h3 className="text-xl mb-3 text-[#2B2B2B] font-semibold relative z-10">
									{area.title}
								</h3>
								<p className="text-black/70 leading-relaxed mb-6 relative z-10">
									{area.description}
								</p>

								<button
									onClick={() => setSelectedArea(index)}
									className="text-[#4A5D4E] hover:text-[#2B2B2B] transition-colors font-medium relative z-10 flex items-center gap-2 group/btn">
									Read More
									<motion.span
										className="inline-block"
										animate={{ x: [0, 4, 0] }}
										transition={{ duration: 1.5, repeat: Infinity }}>
										→
									</motion.span>
								</button>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Practice Areas */}
			<section className="py-24 bg-[#F5EFE6]">
				<div className="max-w-[1400px] mx-auto px-6">
					<h2 className="text-4xl text-center mb-4 text-[#2B2B2B]">
						Comprehensive Legal Solutions
					</h2>
					<p className="text-center text-lg mb-16 max-w-2xl mx-auto text-black/70">
						Our multidisciplinary approach ensures you receive expert guidance
						across all areas of law
					</p>

					<div className="space-y-12">
						{[
							{
								title: "Corporate & Commercial Law",
								description:
									"We provide comprehensive legal support for businesses at every stage of their lifecycle. From company formation and corporate governance to mergers and acquisitions, our team ensures your business operates within the legal framework while maximizing opportunities for growth.",
								services: [
									"Company Formation & Registration",
									"Commercial Contracts",
									"Corporate Governance",
									"Mergers & Acquisitions",
								],
							},
							{
								title: "Conveyancing & Real Estate",
								description:
									"Our real estate practice covers all aspects of property law, from residential transactions to complex commercial developments. We conduct thorough due diligence to protect your interests and ensure smooth property transfers.",
								services: [
									"Property Purchases & Sales",
									"Lease Agreements",
									"Title Verification",
									"Land Disputes",
								],
							},
							{
								title: "Litigation & Dispute Resolution",
								description:
									"When disputes arise, our experienced litigators provide strong representation in courts and alternative dispute resolution forums. We pursue the most effective strategy for your case, whether through negotiation, mediation, arbitration, or litigation.",
								services: [
									"Civil Litigation",
									"Commercial Disputes",
									"Arbitration",
									"Mediation Services",
								],
							},
						].map((area, index) => (
							<motion.div
								key={area.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white p-8 rounded-lg">
								<h3 className="text-2xl mb-4 text-[#2B2B2B]">{area.title}</h3>
								<p className="text-lg text-black/70 mb-6 leading-relaxed">
									{area.description}
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
									{area.services.map((service) => (
										<div key={service} className="flex items-center gap-2">
											<div className="w-2 h-2 bg-[#6B4F3A] rounded-full"></div>
											<span className="text-black/80">{service}</span>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Industry Focus */}
			<section className="py-24 bg-white">
				<div className="max-w-[1400px] mx-auto px-6">
					<h2 className="text-4xl text-center mb-4 text-[#2B2B2B]">
						Industries We Serve
					</h2>
					<p className="text-center text-lg mb-16 max-w-2xl mx-auto text-black/70">
						Deep expertise across multiple sectors
					</p>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						{[
							"Technology & Startups",
							"Real Estate & Construction",
							"Financial Services",
							"Healthcare",
							"Manufacturing",
							"Retail & E-commerce",
							"Hospitality",
							"Education",
						].map((industry, index) => (
							<motion.div
								key={industry}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								className="bg-[#F5EFE6] p-6 rounded-lg text-center">
								<p className="text-[#2B2B2B]">{industry}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-[#F5EFE6]">
				<div className="max-w-[1400px] mx-auto px-6 text-center">
					<h2 className="text-4xl mb-6 text-[#2B2B2B]">
						Need Legal Assistance?
					</h2>
					<p className="text-xl mb-8 text-black/70 max-w-2xl mx-auto">
						Our experienced team is ready to help you navigate your legal
						challenges with confidence.
					</p>
					<a
						href="/contact"
						className="inline-block bg-[#4A5D4E] text-white px-8 py-4 rounded-lg hover:bg-[#6B4F3A] transition-all text-lg hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group">
						<span className="relative z-10">Schedule a Consultation</span>
						<div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
					</a>
				</div>
			</section>
		</div>
	);
}
