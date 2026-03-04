import { Instagram, Facebook, Twitter, Linkedin, Youtube, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#7a131f] bg-cover bg-center text-white font-primary relative overflow-hidden"
      style={{ backgroundImage: "url('https://framerusercontent.com/images/hH2gmaNjYV9HFgBScNHFf0dYc.png?width=4800&height=1224')" }}
    >      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8 flex flex-col relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8 mb-12 pointer-events-none">
            <div className="flex flex-col items-center lg:items-start lg:w-1/4">
                <div className="flex items-center gap-3 mb-4">
                <img 
                    src="https://framerusercontent.com/images/NKvCUEL0ORnQgJto11PdvOykNk.png?scale-down-to=512&width=704&height=280" 
                    alt="Rishihood University Logo" 
                    className="h-14 object-contain brightness-0 invert" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                </div>
                <p className="text-[#e2e2e2] text-md font-medium tracking-wider">
                व्यक्ति | विचार | व्यवस्था
                </p>
            </div>

            <div className="w-full lg:w-2/4 flex justify-center">
                <img 
                src="https://framerusercontent.com/images/IfI0ogz13RBjHXhiYwsz98JETHM.png?width=1606&height=537" 
                alt="Campus Outline" 
                className="w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-md brightness-0 invert opacity-90"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
            </div>

            <div className="flex gap-2 lg:gap-4 lg:w-1/4 justify-center lg:justify-end">
                <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg text-white">Resources</h4>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Blogs</a>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Events</a>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Media</a>
                </div>
                <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg text-white">Quick Links</h4>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Our Story</a>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Schedule Campus Visit</a>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Mandatory Disclosures</a>
                <a href="#" className="text-[#e2e2e2] hover:text-white transition-colors text-sm font-light">Contact Us</a>
                </div>
            </div> 
        </div>

        <div className="w-full h-px bg-white/20 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f]">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f]">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f]">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f]">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#e2e2e2]">
            <MapPin className="w-5 h-5 text-white" />
            <span className="text-sm font-light tracking-wide text-white">
              NH-44 (GT Road), Delhi NCR, Sonipat, Haryana 131021
            </span>
          </div>

          <button className="border border-white/50 bg-black/10 hover:bg-white/30 cursor-pointer backdrop-blur-sm text-white px-10 py-3 rounded-md transition-all duration-300 text-sm font-medium tracking-wide">
            Apply Now
          </button>
        </div>

        <div className="w-full h-px bg-white/20 mb-4"></div>

        <div className="text-center text-xs text-white font-light tracking-wide">
          <p>
            Rishihood University is established by Rishihood Foundation,
          </p>
          <p>
            a non-profit company under Section 8 of the Companies Act, 2013. All Rights Reserved, 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
