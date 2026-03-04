import { motion } from 'framer-motion';
import BlurText from './BlurText';

export default function Stats() {
  const containerVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };
  
  const containerVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const LeafSVG = ({ className }: {className?: string}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 96 156">
      <g transform="translate(-0.285 0)">
        <path d="M 0 156 L 0 0 L 96.571 0 L 96.571 156 Z" fill="transparent"></path>
        <path d="M 49.276 1.427 L 96.053 70.075 L 96.236 70.343 L 96.236 102.371 L 96.01 102.659 L 74.885 129.521 L 74.563 129.931 L 60.18 129.931 L 59.937 129.797 L 48.082 123.283 L 47.951 155.735 L 45.805 155.726 L 45.936 123.375 L 36.939 129.733 L 36.659 129.931 L 29.508 129.931 L 22.229 129.931 L 21.907 129.543 L 0.782 104.174 L 0.537 103.88 L 0.537 71.842 L 0.714 71.575 L 20.153 42.427 L 20.153 42.313 L 20.229 42.313 L 47.491 1.435 L 48.377 0.106 Z M 23.241 127.809 L 29.508 127.879 L 35.971 127.809 L 45.774 120.881 L 15.183 118.13 Z M 48.122 120.876 L 60.736 127.809 L 73.513 127.809 L 81.1 118.158 Z M 2.683 103.119 L 13.73 116.387 L 12.877 115.675 L 45.954 118.766 L 45.965 115.781 L 2.683 101.972 Z M 48.823 115.675 L 48.109 115.781 L 48.109 116.464 L 48.1 118.749 L 82.891 115.881 L 93.743 102.082 Z M 85.674 93.745 L 85.033 94.024 L 48.135 110.08 L 48.135 113.698 L 48.135 113.743 L 94.09 99.741 L 94.09 70.991 L 85.674 58.639 Z M 2.683 72.478 L 2.683 99.741 L 45.974 113.552 L 45.988 110.224 L 11.709 94.01 L 11.099 93.721 L 11.099 59.856 Z M 13.245 56.638 L 13.245 92.383 L 45.997 107.874 L 46.029 100.075 L 20.635 83.491 L 20.153 83.177 L 20.153 46.281 Z M 76.62 83.217 L 76.087 83.523 L 48.178 99.589 L 48.145 107.756 L 83.528 92.36 L 83.528 55.744 L 83.701 55.744 L 76.62 45.353 Z M 22.299 43.063 L 22.299 82.034 L 46.039 97.538 L 46.085 86.302 L 46.084 86.305 L 32.191 71.627 L 30.715 69.586 L 30.715 30.443 Z M 64.381 71.104 L 63.845 71.627 L 48.234 85.927 L 48.188 97.128 L 74.474 81.996 L 74.474 42.313 L 74.549 42.313 L 64.549 27.637 Z M 56.286 61.437 L 56.281 61.739 L 56.116 61.994 L 48.282 74.073 L 48.244 83.295 L 62.403 69.777 L 62.403 24.488 L 56.953 16.49 Z M 32.751 27.389 L 32.838 27.259 L 33.264 69.512 L 46.098 83.165 L 46.136 74.006 L 39.886 61.904 L 39.769 61.677 L 39.769 16.867 Z M 41.915 13.65 L 41.915 61.165 L 47.318 71.627 L 54.144 61.102 L 54.853 13.407 L 48.396 3.932 Z" fill="rgba(204,0,51,0.16)"></path>
      </g>
    </svg>
  );

  return (
    <section className="w-full bg-[#fcfaf5] py-24 px-4 md:px-12 lg:px-24 font-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <motion.div 
            variants={containerVariantsLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 xl:col-span-5 bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center items-start"
          >
            <BlurText
              text="Approaching Rishihood"
              delay={30}
              animateBy="letters"
              direction="bottom"
              className="text-xl md:text-3xl font-bold text-[#E81C43] mb-6"
            />
            <h3 className="text-md md:text-lg font-bold text-[#333] mb-4 leading-snug">
              Reimagining higher education as a force for national transformation.
            </h3>
            <p className="text-[#555] text-base md:text-lg mb-8 leading-relaxed font-light">
              We shape learners for personal growth, professional excellence, and public impact in an industry-integrated, values-first learning environment.
            </p>
            <button className="bg-[#E81C43] hover:bg-[#c91738] text-white px-8 py-3.5 rounded-md font-medium transition-colors shadow-md">
              Download Brochure
            </button>
          </motion.div>
          <motion.div 
            variants={containerVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 xl:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[300px] sm:h-[400px] lg:h-auto"
          >
            <img 
              src="https://framerusercontent.com/images/7MyhsrkNz01pfukKf1ZVSf04z1M.jpg?scale-down-to=4096&width=6000&height=4000" 
              alt="Speaker" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <motion.div 
          variants={containerVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden flex flex-col md:flex-row items-center pt-10 md:pt-0"
        >
          <LeafSVG className="absolute right-0 bottom-0 w-[75px] md:w-[150px] h-auto opacity-30 translate-x-[20%] translate-y-[20%] pointer-events-none" />
          
          <div className="w-full md:w-1/3 flex justify-center items-end self-end z-10">
            <img 
              src="https://framerusercontent.com/images/wto8A0XGiC0azyEaFGUnuXm9I.png?width=838&height=1021" 
              alt="Swami Vivekananda" 
              className="w-32 md:w-48 lg:w-[160px] h-auto object-contain drop-shadow-xl translate-y-2 md:translate-y-8"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          
          <div className="w-full md:w-2/3 py-10 px-8 md:pr-24 md:pl-8 relative z-10 text-center md:text-left mt-4 md:mt-0">
            <p className="text-[#666] text-md lg:text-[18px] leading-relaxed mb-4 font-medium max-w-5xl">
              "We must also remember that the leaders of our societies have never been either generals or kings, but Rishis... If there have been sages and Rishis in the past, be sure that there will be many now."
            </p>
            <p className="text-[#d47e60] font-semibold font-secondary italic text-md">
              — Swami Vivekananda
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            variants={containerVariantsLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col justify-center min-h-[200px]"
          >
            <LeafSVG className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-auto opacity-30 translate-x-[20%] pointer-events-none" />
            
            <div className="relative z-10 flex items-center mb-2">
              <BlurText
                text="2,800"
                delay={50}
                animateBy="letters"
                direction="bottom"
                className="text-5xl md:text-6xl lg:text-[80px] font-bold text-[#111] leading-none tracking-tight"
              />
              <span className="text-5xl md:text-6xl lg:text-[80px] font-bold text-[#E81C43] leading-none tracking-tight ml-1">+</span>
            </div>
            <p className="text-[#555] text-base md:text-lg font-light max-w-xs relative z-10 mt-2">
              Learners & Alumni thriving impact-first network
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col justify-center min-h-[200px]"
          >
            <LeafSVG className="absolute right-20 top-1/2 -translate-y-1/2 w-[250px] md:w-[100px] h-auto opacity-80 translate-x-[20%] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full">
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center mb-2">
                  <BlurText
                    text="50"
                    delay={50}
                    animateBy="letters"
                    direction="bottom"
                    className="text-5xl md:text-6xl lg:text-[80px] font-bold text-[#111] leading-none tracking-tight"
                  />
                  <span className="text-5xl md:text-6xl lg:text-[80px] font-bold text-[#E81C43] leading-none tracking-tight ml-1">+</span>
                </div>
                <p className="text-[#555] text-base md:text-lg font-light mt-2 max-w-[200px]">
                  Institutional Mentors from
                </p>
              </div>

              <div className="flex flex-col gap-6 relative z-10 lg:pr-8 right-30">
                <div className="flex items-center gap-3">
                  <img src="https://framerusercontent.com/images/mQQEZND7w1Dh4xGlRjVWzfyLbE.png?width=260&height=84" alt="Newton School" className="h-8 object-contain" onError={(e) => e.currentTarget.style.display='none'} />
                </div>
                
                <div>
                  <img src="https://framerusercontent.com/images/rNRJqRLJhC6Nrl6BIVnjQWzwDcg.png?width=220&height=92" alt="KPMG" className="h-6 md:h-8 object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
