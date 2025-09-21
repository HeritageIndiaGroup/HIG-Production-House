// "use client";

// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQItem[] = [
//   {
//     question: "What kind of films does HIG Film Production specialize in?",
//     answer:
//       "We specialize in cinematic wedding films, short films, music videos, corporate documentaries, ad films, and high-quality product shoots tailored to your needs.",
//   },
//   {
//     question: "Do you offer pre-wedding and post-wedding shoots?",
//     answer:
//       "Yes, we offer full pre-wedding and post-wedding shoot services with creative concepts, locations, and cinematic editing to make your story unforgettable.",
//   },
//   {
//     question: "Can you help conceptualize and shoot music videos?",
//     answer:
//       "Absolutely! We offer end-to-end music video production including scripting, storyboarding, shooting, editing, and delivery optimized for social platforms.",
//   },
//   {
//     question: "Do you handle corporate videos and documentaries?",
//     answer:
//       "Yes, we create professional corporate films, event coverage, and brand documentaries that align with your business goals and brand identity.",
//   },
//   {
//     question: "What equipment do you use for shooting?",
//     answer:
//       "We use state-of-the-art cinema cameras, drones, gimbals, lighting setups, and audio equipment to ensure a top-tier production quality in every shoot.",
//   },
//   {
//     question: "How long does it take to deliver the final video?",
//     answer:
//       "Delivery time depends on the project scale. For weddings and music videos, typical turnaround is 2–4 weeks. We always aim for timely, high-quality delivery.",
//   },
//   {
//     question: "Can I get both photography and videography packages?",
//     answer:
//       "Yes, we offer comprehensive packages that include both photography and videography for weddings, events, and commercial shoots at competitive rates.",
//   },
// ];

// const HIGFAQ = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   return (
//     <section className="py-20 bg-white text-gray-800">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           <span className="text-[#0891b2]">Frequently Asked</span>{" "}
//           <span className="text-black">Questions</span>
//         </h2>
//         <p className="text-center text-gray-700 mb-10">
//           Common queries about our film production services, timelines, and
//           capabilities.
//         </p>

//         <div className="space-y-5">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 key={index}
//                 className={`border rounded-xl p-5 shadow-sm transition-all duration-300 ${
//                   isOpen
//                     ? "bg-white border-[#0891b2]/40"
//                     : "bg-white/70 border-gray-200"
//                 }`}
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="flex justify-between items-center w-full text-left"
//                 >
//                   <span className="font-semibold text-lg text-gray-900">
//                     {faq.question}
//                   </span>
//                   <ChevronDown
//                     className={`w-5 h-5 transition-transform duration-300 ${
//                       isOpen ? "rotate-180 text-[#0891b2]" : "text-gray-500"
//                     }`}
//                   />
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     isOpen
//                       ? "max-h-[200px] mt-3 opacity-100"
//                       : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <p className="text-gray-600 text-base">{faq.answer}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HIGFAQ;








"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What kind of films does HIG Film Production specialize in?",
    answer:
      "We specialize in cinematic wedding films, short films, music videos, corporate documentaries, ad films, and high-quality product shoots tailored to your needs.",
  },
  {
    question: "Do you offer pre-wedding and post-wedding shoots?",
    answer:
      "Yes, we offer full pre-wedding and post-wedding shoot services with creative concepts, locations, and cinematic editing to make your story unforgettable.",
  },
  {
    question: "Can you help conceptualize and shoot music videos?",
    answer:
      "Absolutely! We offer end-to-end music video production including scripting, storyboarding, shooting, editing, and delivery optimized for social platforms.",
  },
  {
    question: "Do you handle corporate videos and documentaries?",
    answer:
      "Yes, we create professional corporate films, event coverage, and brand documentaries that align with your business goals and brand identity.",
  },
  {
    question: "What equipment do you use for shooting?",
    answer:
      "We use state-of-the-art cinema cameras, drones, gimbals, lighting setups, and audio equipment to ensure a top-tier production quality in every shoot.",
  },
  {
    question: "How long does it take to deliver the final video?",
    answer:
      "Delivery time depends on the project scale. For weddings and music videos, typical turnaround is 2–4 weeks. We always aim for timely, high-quality delivery.",
  },
  {
    question: "Can I get both photography and videography packages?",
    answer:
      "Yes, we offer comprehensive packages that include both photography and videography for weddings, events, and commercial shoots at competitive rates.",
  },
];

const HIGFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-[#0891b2]">Frequently Asked</span>{" "}
          <span className="text-black">Questions</span>
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Common queries about our film production services, timelines, and
          capabilities.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl p-5 shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#0891b2]/40"
                    : "bg-white/70 border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      isOpen ? "text-[#0891b2]" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0891b2]" : "text-gray-500"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[200px] mt-3 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-base">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HIGFAQ;
