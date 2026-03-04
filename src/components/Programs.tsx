import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programsData = [
  {
    title: "BBA Entrepreneurship",
    description: "The program pairs hands-on learning with entrepreneurial insight, enabling students to build, manage, and scale ideas across industries.",
    image: "https://framerusercontent.com/images/BWir9Y8BCNLsp72tCcpSigGRuQ.jpg?scale-down-to=1024&width=5185&height=4000",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Design",
    description: "The curriculum integrates hands-on learning, preparing students to tackle design challenges across industries.",
    image: "https://framerusercontent.com/images/ooDgdEo7SELeYldxeB3c4vOKb8E.jpg?scale-down-to=2048&width=6000&height=4000",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Sc (Hons) Psychology",
    description: "Hands-on learning through two internships, industrial visits, and practical fieldwork further equip graduates with real-world expertise.",
    image: "https://framerusercontent.com/images/BOcHtZAYPb8Oc0m7Sa2qhS1pbxE.jpg?scale-down-to=2048&width=6720&height=4480",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Tech CS & Data Science",
    description: "With global study treks and internships at top firms, students gain real-world experience in applying analytics to solve business challenges",
    image: "https://framerusercontent.com/images/7BeqkCHlGjnmpg8Xji4fbIlGvQ.png?scale-down-to=2048&width=5392&height=3595",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Tech CS & AI",
    description: "This industry-aligned program combines theoretical knowledge with hands-on experience, focusing on AI, machine learning, and data science.",
    image: "https://framerusercontent.com/images/viBGFjvJNX5Sqe3JCkv48awJng.jpg?scale-down-to=2048&width=5177&height=4000",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "Rishihood Foundation",
    description: "An immersive one-year program for all first-year learners that builds self confidence, societal awareness and trans-disciplinary meta skills to succeed in the post-AI VUCA world. ",
    image: "https://framerusercontent.com/images/nb4RQpg8q7pZw2YueGXm0i0Eptk.jpg?scale-down-to=2048&width=6000&height=4000",
    format: "6 Courses",
    duration: "1st Year",
    eligibility: "1st Year Learners"
  }
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-24 px-4 md:px-12 lg:px-24 font-primary">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-[32px] font-semibold text-[#d00736] mb-4">
            Undergraduate Programs
          </h2>
          <p className="text-[#555] text-lg md:text-sm font-medium">
            Practical learning and personal growth to build skills, mindset, and future-ready leadership.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {programsData.map((program, idx) => {
              const isActive = idx === activeIndex;
              const isFoundation = program.title === "Rishihood Foundation";
              
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left w-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-[#fcf7ef] border-l-4 border-[#d00736] rounded-xl py-5 px-6" 
                      : isFoundation
                        ? "bg-white border border-[#d00736] shadow-sm rounded-xl py-5 px-6 hover:shadow-md"
                        : "bg-white border border-gray-100 shadow-sm rounded-xl py-5 px-6 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <span className={`text-lg md:text-lg ${
                    isActive ? "text-[#111] font-semibold" 
                    : isFoundation ? "text-[#d00736] font-medium"
                    : "text-[#777] font-light"
                  }`}>
                    {program.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-2/3 bg-[#fcf7ef] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch overflow-hidden relative min-h-[450px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col md:flex-row gap-8 items-stretch"
              >
                <div className="w-full md:w-5/12 h-[250px] md:h-auto rounded-xl overflow-hidden shadow-sm shrink-0">
                  <img 
                    src={programsData[activeIndex].image} 
                    alt={programsData[activeIndex].title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-3xl font-semibold text-[#d00736] mb-6 mt-10">
                    {programsData[activeIndex].title}
                  </h3>
                  
                  <div className="w-full h-px bg-gray-200 mb-6"></div>
                  
                  <p className="text-[#555] text-base md:text-md mb-8 leading-relaxed font-light">
                    {programsData[activeIndex].description}
                  </p>
                  
                  <div className="w-full h-px bg-gray-200 mb-6"></div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col border-r border-gray-200 pr-4">
                      <span className="text-sm text-gray-400 mb-1 font-light">
                        {programsData[activeIndex].title === "Rishihood Foundation" ? "Learning" : "Format"}
                      </span>
                      <span className="text-lg font-semibold text-[#111]">{programsData[activeIndex].format}</span>
                    </div>
                    <div className="flex flex-col border-r border-gray-200 px-2 lg:px-4">
                      <span className="text-sm text-gray-400 mb-1 font-light">Duration</span>
                      <span className="text-lg font-semibold text-[#111]">{programsData[activeIndex].duration}</span>
                    </div>
                    <div className="flex flex-col pl-2 lg:pl-4">
                      <span className="text-sm text-gray-400 mb-1 font-light">Eligibility</span>
                      <span className="text-lg font-semibold text-[#111]">{programsData[activeIndex].eligibility}</span>
                    </div>
                  </div>

                  {programsData[activeIndex].title !== "Rishihood Foundation" && (
                    <button className="w-full bg-[#d00736] hover:bg-[#c91738] text-white py-4 rounded-xl font-medium text-lg transition-colors shadow-md mt-auto">
                      View Program
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
