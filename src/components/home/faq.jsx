import { useState } from "react";
import faqbg from "/src/assets/images/faqbg.png"; // Adjust path if needed

const faqs = [
  { question: "Are there any offers for Hestia '25?", answer: "Yes! We have exclusive discounts and early bird offers. Stay tuned for updates." },
  { question: "Any accommodation facilities?", answer: "Yes, we provide partnered accommodations for participants. Contact us for more details." },
  { question: "Any accommodation facilities?", answer: "Yes, there are various lodging options available near the venue." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="max-screen mx-auto py-12 px-6 text-white text-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${faqbg})` }}
    >
      <h2 className="text-6xl md:text-5xl font-bold mb-10 tracking-wide uppercase font-['Rubik Vinyl']">FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-white pt-6">
            <button
              className="w-full flex justify-between items-center text-2xl md:text-xl font-bold uppercase tracking-wide py-4 px-6  hover:bg-opacity-100 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center gap-3 pl-10 md:pl-5">
                <span className="text-yellow-400 text-3xl md:text-2xl">★</span> {faq.question}
              </span>
              <span className="text-3xl md:text-2xl transition-transform">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="mt-4 text-gray-300 text-lg md:text-base px-6">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
