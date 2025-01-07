import { motion } from "framer-motion";

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
  activeSection: string;
}

export default function TableOfContents({
  sections,
  activeSection,
}: TableOfContentsProps) {
  return (
    <nav className="hidden md:block sticky top-4 h-fit">
      <ul className="space-y-2">
        {sections.map((section) => (
          <motion.li
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={`#${section.id}`}
              className={`block px-4 py-2 rounded-lg transition-colors  whitespace-nowrap ${
                activeSection === section.id
                  ? "bg-[#fad000] text-[#03237b] font-bold"
                  : "hover:bg-gray-200"
              }`}
            >
              {section.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
