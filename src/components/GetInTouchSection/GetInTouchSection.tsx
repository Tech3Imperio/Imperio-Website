"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import CustomButton from "../CustomButton/CustomButton";

export default function GetInTouchSection() {
  const handleOpenPopup = () => {
    window.dispatchEvent(new CustomEvent("openPopupForm"));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-[var(--yellow-500)]" />,
      title: "Phone",
      details: "+91 85919 53382",
      link: "tel:+918591953382",
    },
    {
      icon: <Mail className="h-6 w-6 text-[var(--yellow-500)]" />,
      title: "Email",
      details: "sales@imperiorailing.com",
      link: "mailto:sales@imperiorailing.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[var(--yellow-500)]" />,
      title: "Office",
      details:
        "1, Aman Chambers, New Queens Rd, Charni Road, Mumbai Maharashtra - 400004.",
      link: "https://maps.app.goo.gl/F3YnqUyPAKAFX6h3A",
    },
    {
      icon: <Clock className="h-6 w-6 text-[var(--yellow-500)]" />,
      title: "Working Hours",
      details: "Mon-Sat: 10AM - 7PM",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Our team is here to
            help you find the perfect railing solution for your space.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] rounded-none overflow-hidden shadow-xl">
              <img
                src="/images/Landing/getintouch.webp"
                alt="Contact Imperio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
                <h3 className="text-white text-3xl font-bold mb-4">
                  Ready to transform your space?
                </h3>
                <p className="text-white/80 mb-6 max-w-md">
                  Get in touch with our experts for a free consultation and
                  quote.
                </p>
                <div>
                  <CustomButton
                    variant="primary"
                    size="lg"
                    onClick={handleOpenPopup}
                  >
                    Request a Quote
                  </CustomButton>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="bg-gray-50 p-6 rounded-none hover:shadow-md transition-all duration-300 flex flex-col"
                  variants={itemVariants}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
