import { useState } from "react";
import faqbg from "/src/assets/images/faqbg.png"; 

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
      <h2 className="text-6xl md:text-7xl font-bold mb-10 tracking-wide uppercase" style={{ fontFamily: 'Rubikvinyl' }}>FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-4 border-white pt-6">
            <button
              className="w-full flex justify-between items-center 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold uppercase tracking-wide py-4 px-6  hover:bg-opacity-100 transition-all"style={{ fontFamily: 'Poppins' }}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center gap-3 pl-10 md:pl-5">
                <span className="text-yellow-400 2xl:text-xl xl:text-lg lg:text-md">★</span> {faq.question}
              </span>
              <span className="2xl:text-3xl xl:text-2xl lg:text-xl transition-transform">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="mt-4   2xl:text-4xl xl:text-3xl lg:text-2xl px-6">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
