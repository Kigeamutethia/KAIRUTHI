import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle, Shield, Users, Award } from 'lucide-react';
import heroImage from '../../imports/lawyer-hero.jpg';

export function Home() {
  const features = [
    { icon: Users, title: 'Client-focused approach', description: 'Your needs are our priority' },
    { icon: Shield, title: 'Practical and strategic solutions', description: 'Real-world results' },
    { icon: Award, title: 'Experienced legal representation', description: 'Proven expertise' },
    { icon: CheckCircle, title: 'Commitment to integrity', description: 'Trust and confidentiality' },
  ];

  return (
    <div>
      {/* Hero Section - Split Layout */}
      <section className="relative py-20 overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          <div className="flex-1 bg-[#6B4F3A]"></div>
          <div className="flex-1 bg-white"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6"
              >
                <span className="text-white text-sm font-medium">Established 2022 • Nairobi, Kenya</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
                Kairuthi & Co. <span className="text-[#F5EFE6]">Advocates</span> LLP
              </h1>
              <div className="h-1 w-24 bg-[#F5EFE6] mb-6 rounded-full"></div>
              
              <p className="text-2xl text-[#F5EFE6] mb-6 italic leading-relaxed">
                Trusted Legal Counsel. Practical Solutions. Lasting Impact.
              </p>
              <p className="text-lg text-white/80 mb-4 leading-relaxed">
                Kairuthi & Co. Advocates LLP is a full-service law firm committed to providing strategic, reliable, and client-focused legal solutions. We combine legal expertise with a practical understanding of business and personal needs, ensuring every client receives clear guidance and strong representation.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Established in 2022, we serve individuals, businesses, and institutions with professionalism, discretion, and dedication.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#F5EFE6] text-[#6B4F3A] px-8 py-4 rounded-lg hover:shadow-2xl transition-all text-lg shadow-lg relative overflow-hidden group font-semibold"
                >
                  <span className="relative z-10">Get Legal Assistance</span>
                  <div className="absolute inset-0 bg-[#4A5D4E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="relative z-20 text-white font-semibold">Get Legal Assistance</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Lawyer at Kairuthi & Co. Advocates"
                className="w-full h-[400px] md:h-[600px] object-cover relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e9ede8]/20 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-[#6B4F3A]/10 rounded-full mb-4"
            >
              <span className="text-[#6B4F3A] text-sm font-medium">Our Strengths</span>
            </motion.div>
            <h2 className="text-4xl text-center mb-4 text-[#2B2B2B]">Why Choose Us</h2>
            <div className="h-1 w-16 bg-[#6B4F3A] mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-lg max-w-2xl mx-auto text-black/70">
              We believe in building long-term relationships founded on trust, responsiveness, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 cursor-pointer bg-white rounded-xl shadow-lg border border-[#D8CFC4] hover:border-[#6B4F3A]/30 transition-all relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B4F3A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F5EFE6] to-[#d5dbd3] rounded-2xl mb-6 shadow-md relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-[#4A5D4E]" />
                </motion.div>
                <h3 className="text-xl mb-3 text-[#2B2B2B] font-semibold relative z-10">{feature.title}</h3>
                <p className="text-black/70 relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1775163024488-e88e4a71179f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Legal consultation"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-6 text-[#2B2B2B]">Our Commitment</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We believe in building long-term relationships founded on trust, responsiveness, and results. Our goal is to protect your interests while guiding you toward the best possible outcomes.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're facing a complex legal challenge or seeking preventive counsel, our team is dedicated to delivering solutions that align with your objectives and values.
              </p>
              <Link
                to="/about"
                className="inline-block mt-8 bg-[#4A5D4E] text-white px-8 py-3 rounded-lg hover:bg-[#6B4F3A] transition-all hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#6B4F3A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6B4F3A]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-[#6B4F3A]/10 rounded-full mb-4"
            >
              <span className="text-[#2B2B2B] text-sm font-medium">Comprehensive Legal Services</span>
            </motion.div>
            <h2 className="text-4xl mb-4 text-[#2B2B2B]">Our Practice Areas</h2>
            <div className="h-1 w-16 bg-[#6B4F3A] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              We provide comprehensive legal services across multiple disciplines, ensuring expert guidance for all your legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Corporate Law', desc: 'Business formation, governance, and commercial transactions' },
              { title: 'Real Estate', desc: 'Property transactions, leases, and conveyancing services' },
              { title: 'Family Law', desc: 'Divorce, custody, succession, and estate planning' },
              { title: 'Criminal Defense', desc: 'Comprehensive defense and legal representation' },
              { title: 'Employment Law', desc: 'Workplace disputes and HR compliance solutions' },
              { title: 'Intellectual Property', desc: 'Trademark and copyright protection services' },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-[#F5EFE6] to-[#F5EFE6] p-8 rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all border border-[#D8CFC4] hover:border-[#6B4F3A]/20 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6B4F3A]/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <h3 className="text-xl mb-3 text-[#2B2B2B] font-semibold">{area.title}</h3>
                  <p className="text-black/70 leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/practice-areas"
                className="inline-block bg-[#4A5D4E] text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all text-lg shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">View All Practice Areas</span>
                <div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#F5EFE6] via-[#f4f6f3] to-[#F5EFE6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B4F3A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B4F3A]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white/50 rounded-full mb-4 backdrop-blur-sm"
            >
              <span className="text-[#6B4F3A] text-sm font-medium">Client Success Stories</span>
            </motion.div>
            <h2 className="text-4xl mb-4 text-[#2B2B2B]">Client Testimonials</h2>
            <div className="h-1 w-16 bg-[#6B4F3A] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-black/70">What our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Exceptional legal guidance throughout our corporate restructuring. The team was professional, responsive, and delivered results beyond our expectations.',
                author: 'James M.',
                role: 'CEO, Tech Startup',
              },
              {
                quote: 'Their expertise in real estate law made our property transaction seamless. Highly recommend their services for anyone navigating complex legal matters.',
                author: 'Sarah K.',
                role: 'Property Investor',
              },
              {
                quote: 'Compassionate and thorough representation during a difficult family matter. They treated our case with the care and attention it deserved.',
                author: 'Michael O.',
                role: 'Client',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden border border-white/50"
              >
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#6B4F3A]/5 rounded-full blur-2xl"></div>
                <div className="text-4xl md:text-4xl md:text-5xl lg:text-6xl text-[#6B4F3A]/20 mb-4 leading-none">"</div>
                <p className="text-lg mb-6 text-black/80 italic leading-relaxed relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B4F3A] to-[#4A5D4E] flex items-center justify-center text-white font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-[#2B2B2B] font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-black/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#2B2B2B]">How We Work</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Our structured approach ensures clear communication and effective results at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We listen to your needs and assess your legal situation' },
              { step: '02', title: 'Strategy Development', desc: 'We create a tailored legal strategy aligned with your goals' },
              { step: '03', title: 'Expert Execution', desc: 'Our team implements the strategy with precision and care' },
              { step: '04', title: 'Ongoing Support', desc: 'We provide continuous guidance and keep you informed throughout' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-[#6B4F3A] mb-4 opacity-50">{item.step}</div>
                <h3 className="text-xl mb-3 text-[#2B2B2B]">{item.title}</h3>
                <p className="text-black/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#6B4F3A] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { number: '500+', label: 'Cases Handled' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Combined Experience' },
              { number: '13', label: 'Practice Areas' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl mb-2 text-[#F5EFE6]">{stat.number}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 text-[#2B2B2B]">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-black/70 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how we can help you achieve your legal goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#4A5D4E] text-white px-8 py-4 rounded-lg hover:bg-[#6B4F3A] transition-all text-lg hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-[#6B4F3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}