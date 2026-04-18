import { motion } from 'motion/react';
import { Shield, Heart, Users, Award, CheckCircle } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity and Professionalism',
      description: 'We uphold the highest ethical standards in every matter we handle.',
    },
    {
      icon: Heart,
      title: 'Confidentiality and Trust',
      description: 'Your privacy and trust are paramount to our practice.',
    },
    {
      icon: Users,
      title: 'Client-Centered Service',
      description: 'We listen, understand, and tailor our approach to your unique needs.',
    },
    {
      icon: Award,
      title: 'Excellence in Legal Practice',
      description: 'We strive for excellence in every case and client interaction.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 bg-[#6B4F3A] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl mb-6"
          >
            About the Firm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl"
          >
            A trusted legal practice offering comprehensive services across multiple areas of law.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-6 text-[#2B2B2B]">Who We Are</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Kairuthi & Co. Advocates LLP is a trusted legal practice offering comprehensive legal services across multiple areas of law. Our firm was founded on the belief that quality legal representation should be accessible, reliable, and results-driven.
              </p>
              <p className="text-lg leading-relaxed">
                We take pride in understanding our clients' unique needs and delivering solutions that align with their personal, business, and legal objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571055931484-22dce9d6c510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Law office"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-4 text-[#2B2B2B]">Our Values</h2>
          <p className="text-center text-lg mb-16 max-w-2xl mx-auto">
            The principles that guide our practice and define our commitment to excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#F5EFE6] rounded-full mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-8 h-8 text-[#4A5D4E]" />
                </motion.div>
                <h3 className="text-xl mb-3 text-[#2B2B2B]">{value.title}</h3>
                <p className="text-black/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-[#2B2B2B]">Our Approach</h2>
            <p className="text-xl leading-relaxed mb-8">
              We combine legal knowledge with practical strategy, ensuring clear advice, strong advocacy, and effective solutions.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              Our team works collaboratively with clients to develop strategies that not only address immediate legal concerns but also support long-term goals. We believe that the best outcomes come from a deep understanding of both the law and our clients' objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-[#2B2B2B]">Our Legal Team</h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Experienced advocates committed to delivering exceptional legal representation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Senior Partner',
                specialty: 'Corporate & Commercial Law',
                bio: 'Over 10 years of experience in corporate law, business transactions, and regulatory compliance.',
              },
              {
                name: 'Principal Associate',
                specialty: 'Litigation & Dispute Resolution',
                bio: 'Specializes in civil litigation, arbitration, and alternative dispute resolution mechanisms.',
              },
              {
                name: 'Associate Advocate',
                specialty: 'Real Estate & Conveyancing',
                bio: 'Expert in property law, conveyancing, and real estate transactions across Kenya.',
              },
            ].map((member, index) => (
              <motion.div
                key={member.specialty}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <motion.div 
                  className="w-24 h-24 bg-[#F5EFE6] rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-12 h-12 text-[#4A5D4E]" />
                </motion.div>
                <h3 className="text-xl mb-2 text-[#2B2B2B] text-center">{member.name}</h3>
                <p className="text-[#6B4F3A] mb-4 text-center">{member.specialty}</p>
                <p className="text-black/70 text-center leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-6 text-[#2B2B2B]">Why Work With Us</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Personalized Attention',
                    desc: 'Every client receives dedicated attention and customized legal strategies tailored to their specific situation.',
                  },
                  {
                    title: 'Clear Communication',
                    desc: 'We explain complex legal matters in plain language, keeping you informed every step of the way.',
                  },
                  {
                    title: 'Results-Oriented',
                    desc: 'Our focus is on achieving practical, favorable outcomes that serve your best interests.',
                  },
                  {
                    title: 'Long-Term Relationships',
                    desc: 'We build lasting partnerships with our clients, becoming trusted advisors for all their legal needs.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#4A5D4E]" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-[#2B2B2B]">{item.title}</h3>
                      <p className="text-black/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1656646424842-3a002778be0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Professional meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence */}
      <section className="py-24 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-12 text-[#2B2B2B]">Our Commitment to Excellence</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4 text-[#2B2B2B]">Continuous Learning</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  The legal landscape is constantly evolving. Our team stays current with the latest developments in law, ensuring we provide the most relevant and effective advice to our clients.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 text-[#2B2B2B]">Technology Integration</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  We leverage modern technology to enhance our services, streamline processes, and provide clients with efficient, transparent legal solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 text-[#2B2B2B]">Community Engagement</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Beyond our practice, we are committed to giving back to the community through pro bono work, legal education initiatives, and supporting local causes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}