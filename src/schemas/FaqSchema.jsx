"use client";

const faqs = [
  {
    question: "Do you provide 24/7 car repair in Dubai?",
    answer: "Yes, Fix Car Dubai offers 24/7 emergency roadside and workshop car repair services throughout Dubai."
  },
  {
    question: "Do you offer onsite car battery replacement?",
    answer: "Yes, we provide mobile car battery replacement at your home, office, or roadside anywhere in Dubai."
  },
  {
    question: "Which areas do you serve?",
    answer: "We cover Al Karama, Oud Metha, Al Jaffiliya, Zabeel, Bur Dubai, Dubai Marina, and all major Dubai locations."
  }
];

export const FaqSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
  );
};
