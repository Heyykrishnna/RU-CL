import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, GraduationCap, Users, Home, ArrowRight } from 'lucide-react';
import BlurText from './BlurText';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};


const slides = [
  {
    image: "https://framerusercontent.com/images/pxMvi4f6x3gSEzNzc2TDX0aFGMQ.jpeg?scale-down-to=4096&width=5184&height=2772",
    italicHeading: "Foundational Learning",
    boldHeading: "Future-Ready Thinking",
    subHeading: "Shaping Learners through",
    hindiText: "व्यक्ति | विचार | व्यवस्था",
    buttonText: "Learn more",
  },
  {
    image: "https://framerusercontent.com/images/7MyhsrkNz01pfukKf1ZVSf04z1M.jpg?scale-down-to=4096&width=6000&height=4000",
    italicHeading: "Empowering Minds",
    boldHeading: "Global Perspectives",
    subHeading: "Building leaders through",
    hindiText: "ज्ञान | कर्म | भक्ति",
    buttonText: "Discover Programs",
  },
  {
    image: "https://framerusercontent.com/images/6wFKuxRFyZggeoS2RW96bByolM.jpg?scale-down-to=4096&width=6000&height=4000",
    italicHeading: "Academic Excellence",
    boldHeading: "Research & Innovation",
    subHeading: "Fostering curiosity through",
    hindiText: "सत्य | धर्म | शांति",
    buttonText: "Explore Campus",
  },
  {
    image: "https://framerusercontent.com/images/pxMvi4f6x3gSEzNzc2TDX0aFGMQ.jpeg?scale-down-to=4096&width=5184&height=2772",
    italicHeading: "Real-World Impact",
    boldHeading: "Industry Connections",
    subHeading: "Creating the future with",
    hindiText: "प्रेम | करुणा | क्षमा",
    buttonText: "Join Us",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-black font-primary flex flex-col">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
          } else if (swipe > swipeConfidenceThreshold) {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          }
        }}
      >
        <div className="max-w-4xl pt-10 pointer-events-none">
          <BlurText
            key={`blur-${currentSlide}`}
            text={slides[currentSlide].italicHeading}
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="font-secondary italic text-white text-lg md:text-2xl mb-4 tracking-wide font-medium"
          />
          <BlurText 
            key={`bold-${currentSlide}`}
            text={slides[currentSlide].boldHeading}
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="font-primary font-bold text-5xl md:text-5xl lg:text-5xl leading-tight text-[#E8A559] mb-4"
          />

          <motion.div
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <p className="text-[#f5f5f5] font-semibold text-lg md:text-xl">
                {slides[currentSlide].subHeading}
              </p>
              <div className="h-[2px] w-48 bg-white/40"></div>
            </div>
            
            <div className="inline-block border border-gray-400/50 bg-black/40 backdrop-blur-sm rounded-lg px-6 py-3 mb-12">
              <span className="text-white font-medium text-xl md:text-2xl tracking-widest">
                {slides[currentSlide].hindiText}
              </span>
            </div>
            
            <br />
            
            <button className="bg-[#E81C43] hover:bg-white hover:text-black animate-in-out duration-500 text-white px-12 cursor-pointer py-2 rounded-md font-light text-md transition-colors shadow-lg pointer-events-auto">
              {slides[currentSlide].buttonText}
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70 w-2.5'
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 w-full bg-white grid grid-cols-1 md:grid-cols-4 border-t border-gray-200">
        {[
          { text: "UG Admission", icon: Book },
          { text: "Ph.D Admissions", icon: GraduationCap },
          { text: "Teaching Faculty", icon: Home },
          { text: "Founding Team", icon: Users }
        ].map((item, idx) => (
          <div 
            key={idx}
            className={`flex items-center justify-between cursor-pointer bg-white hover:bg-white transition-colors duration-300 group px-6 lg:px-10 py-5 md:py-6 lg:py-8 relative ${
              idx !== 0 ? 'md:border-l border-gray-200' : ''
            }`}
          >
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E81C43] transform scale-x-0 group-hover:scale-x-100 origin-bottom transition-transform duration-500 ease-out" />
            
            <div className="flex items-center gap-4">
              <item.icon className="w-6 h-6 text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
              <span className="font-light text-[#4b4b4b] text-[15px] lg:text-base group-hover:text-[#E81C43] transition-colors duration-300">
                {item.text}
              </span>
            </div>

            <ArrowRight className="w-5 h-5 text-[#1a1a1a] group-hover:text-[#E81C43] -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}
