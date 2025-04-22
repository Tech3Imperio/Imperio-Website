import { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  faqs: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "Product & Specifications",
    faqs: [
      {
        question:
          "What types of glass do you use for frameless glass railings?",
        answer:
          "We use toughened (tempered) glass or laminated toughened glass, typically ranging from 12mm to 20mm thickness, depending on the project requirements.",
      },
      {
        question:
          "What is the difference between toughened glass and laminated glass?",
        answer:
          "Toughened glass is heat-treated to increase its strength and shatters into small, blunt pieces when broken. Laminated glass consists of two or more layers of glass bonded with an interlayer, ensuring that even if broken, the glass remains held together, enhancing safety.",
      },
      {
        question:
          "When should laminated glass be used instead of toughened glass?",
        answer:
          "Laminated glass is recommended for high-safety applications, such as balconies, staircases, and high-rise buildings, as it prevents shards from falling in case of breakage. It is also preferred in areas requiring sound insulation and UV protection.",
      },
      {
        question: "What types of interlayers are used in laminated glass?",
        answer:
          "We use PVB (Polyvinyl Butyral) or SGP (SentryGlas) interlayers. PVB provides excellent safety and sound insulation, while SGP offers superior strength and durability.",
      },
      {
        question: "Does laminated glass provide better sound insulation?",
        answer:
          "Yes, laminated glass significantly reduces noise due to its interlayer, making it an ideal choice for urban environments and busy areas.",
      },
      {
        question:
          "Do you offer different glass finishes (frosted, tinted, etc.)?",
        answer:
          "Yes, we offer various finishes, including clear, frosted, tinted, and textured glass, to match different design preferences.",
      },
      {
        question: "What types of fittings and hardware do you use?",
        answer:
          "We use high-quality stainless steel (SS 304/316) or aluminum profiles for base channels, clamps, and handrails, ensuring durability and corrosion resistance.",
      },
    ],
  },
  {
    title: "Aluminium Base Profiles & Handrails",
    faqs: [
      {
        question:
          "What are aluminium base profiles used for in frameless glass railings?",
        answer:
          "Aluminium base profiles serve as the foundation for securing the glass panels, providing stability and a sleek appearance while allowing easy installation.",
      },
      {
        question:
          "What are the benefits of using aluminium base profiles over stainless steel?",
        answer:
          "Aluminium base profiles are lightweight, corrosion-resistant, and more cost-effective compared to stainless steel. They also offer a modern aesthetic with a variety of finishes.",
      },
      {
        question: "Do aluminium base profiles come in different finishes?",
        answer:
          "Yes, we offer anodized, powder-coated, and brushed finishes to match the desired architectural style and project requirements.",
      },
      {
        question: "Are aluminium handrails available in custom colors?",
        answer:
          "Yes, we offer powder coating in a range of RAL colors to match specific design aesthetics.",
      },
    ],
  },
  {
    title: "Installation & Customization",
    faqs: [
      {
        question:
          "Can your frameless glass railing be installed on different surfaces?",
        answer:
          "Yes, our systems can be installed on concrete, wood, steel, or tiled surfaces. We provide customized solutions based on your site conditions.",
      },
      {
        question: "Do you offer customized sizes and designs?",
        answer:
          "Absolutely! We tailor glass sizes, thickness, and mounting styles to suit your project’s specific needs.",
      },
      {
        question: "What type of mounting is possible in your railing systems?",
        answer:
          "Imperio has Top mounted, Side Mounted & Infloor Mounting options in various types of railing systems.",
      },
      {
        question:
          "Can the railing be fixed in side mounted or fully concealed inside the floor?",
        answer:
          "Yes, Imperio Railings has solutions for side mounted or fascia mounted railing systems which also helps in adding space to the balcony, staircase or terrace.",
      },
    ],
  },
  {
    title: "Safety & Compliance",
    faqs: [
      {
        question: "Are frameless glass railings safe?",
        answer:
          "Yes, we use toughened and laminated safety glass, which meets building codes. If broken, laminated glass holds together, preventing accidents.",
      },
      {
        question: "Do your glass railings comply with local building codes?",
        answer:
          "Yes, our systems meet all required safety standards and can be designed to comply with specific local regulations.",
      },
    ],
  },
  {
    title: "Cost & Pricing",
    faqs: [
      {
        question:
          "How much does a frameless glass railing cost per running foot?",
        answer:
          "Pricing varies based on glass thickness, hardware type, and installation complexity. On average, it ranges from ₹1,000 to ₹8,000 per running foot. We can provide a detailed quote based on your requirements.",
      },
      {
        question: "Are there any hidden costs?",
        answer:
          "No, our pricing includes glass, hardware, and standard installation. Additional costs may apply for custom designs, site modifications, or special finishes.",
      },
    ],
  },
  {
    title: "Warranty & Support",
    faqs: [
      {
        question: "Do you offer a warranty on your glass railing systems?",
        answer:
          "Yes, we provide a warranty on glass and hardware, typically ranging from 5 to 10 years, depending on the product.",
      },
      {
        question: "What if the glass breaks after installation?",
        answer:
          "We offer replacement services and can assist in quick glass replacements as needed.",
      },
    ],
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<{
    categoryIndex: number;
    faqIndex: number;
  } | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const toggleFaq = (categoryIndex: number, faqIndex: number) => {
    setOpenFaq(
      openFaq?.categoryIndex === categoryIndex && openFaq?.faqIndex === faqIndex
        ? null
        : { categoryIndex, faqIndex }
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <p className="text-3xl lg:text-4xl font-bold text-black mb-8 text-center">
        Frequently Asked Questions
      </p>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto space-x-4 mb-6">
        {faqCategories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-none ${
              activeCategory === index
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqCategories[activeCategory].faqs.map((faq, faqIndex) => (
          <div key={faqIndex} className="border-b pb-2">
            <button
              className="flex justify-between w-full text-left font-medium text-lg py-2"
              onClick={() => toggleFaq(activeCategory, faqIndex)}
            >
              {faq.question}
              {openFaq?.categoryIndex === activeCategory &&
              openFaq?.faqIndex === faqIndex ? (
                <IoChevronUp className="text-gray-600" />
              ) : (
                <IoChevronDown className="text-gray-600" />
              )}
            </button>
            {openFaq?.categoryIndex === activeCategory &&
              openFaq?.faqIndex === faqIndex && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
