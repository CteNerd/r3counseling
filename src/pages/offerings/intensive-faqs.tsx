import React, { useState } from "react";

// Define a type for the FAQ item
type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQs = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "How long does it take to schedule an Intensives?",
      answer:
        "Typically, Intensives are booked 1-2 months in advance. Potential dates are discussed during the 30-minute phone consultation.",
    },
    {
      question: "Are Intensives covered by insurance?",
      answer: "Unfortunately, Intensives are not covered by insurance. Care Credit is an option for payment.",
    },
    {
      question: "How is the length of the Intensive determined?",
      answer:
        "In the initial 30-minute consultation, I offer a recommendation on the appropriate duration of the Intensive based on the experiences you wish to address.",
    },
    {
      question: "Is a deposit required?",
      answer:
        "A 50% non-refundable deposit, which can be transferable, is required within two weeks after the 30-minute phone consultation to secure your booking or after you follow up stating you would like to officially schedule the Intensive.",
    },
    {
      question: "When is the final payment due?",
      answer:
        "The final remainder of payment is due in two weeks prior to the start of the Intensive.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "If you choose to terminate the Intensive before its start date, the 50% non-refundable deposit will be retained. You can reschedule the Intensive 2 weeks prior to the start date of the Intensive, with an agreed upon date between yourself and I. If rescheduled, the initial deposit will be transferred to the new date. If you decide to terminate during the midst of the Intensive, no refund is issued. However, if I initiate termination before the Intensive begins, the deposit will be refunded. For terminations initiated by me during the midst of the Intensive, a prorated refund will be provided.",
    },
    {
      question: "Can I engage in an Intensive if I live in another state?",
      answer:
        "Yes, you can participate in an Intensive even if you live in another state, provided you have an individual therapist in your home state for post-Intensive care. You can fly in for the Intensive and return home afterward.",
    },
  ];

  return (
    <div>
      <ul>
        {faqs.map((faq, index) => (
          <li>
            {" "}
            <FAQItem key={index} {...faq} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: "pointer", marginBottom: "10px" }}
    >
      <p className="faq-question">{question}</p>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQs;
