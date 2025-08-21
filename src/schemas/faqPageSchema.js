// lib/schema/faqPageSchema.js

// This function takes an array of { question: string, answer: string } objects
export const getFAQPageSchema = (faqs) => {
  if (!Array.isArray(faqs) || faqs.length === 0) {
    return null; // Return null or an empty object if no FAQs provided
  }

  const mainEntity = faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };
};