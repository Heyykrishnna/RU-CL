import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const NavItem = ({ label, hasDropdown, dropdownItems }: { label: string; hasDropdown?: boolean; dropdownItems?: string[] }) => (
  <div className="relative group h-full flex items-center">
    <div className="flex items-center gap-1 cursor-pointer hover:text-[#d00736] transition-colors text-sm py-6">
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4 ml-0.5" />}
    </div>
    
    {hasDropdown && dropdownItems && (
      <div className="absolute top-[70px] left-0 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out w-[320px] bg-[#fdf6e6] shadow-xl rounded-xl p-2 z-100 border border-[#f0e4cf]">
        <ul className="flex flex-col gap-1">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="block px-4 py-2 text-sm font-normal cursor-pointer text-[#4b4b4b] hover:text-[#d00736] hover:bg-[#f6e1da] rounded-lg transition-colors whitespace-normal"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const programsDropdown = [
    "Undergraduate Programs",
    "Postgraduate Programs",
    "Ph.D. Programs",
    "Executive Education"
  ];

  const schoolsDropdown = [
    "School of Entrepreneurship",
    "School of Design",
    "Sajjan Agarwal School of Technology",
    "Mahesh Navani School of Brain, Body & Behavior",
    "Rashtram School of Public Leadership",
    "Centre for Human Sciences"
  ];

  const campusDropdown = [
    "Infrastructure",
    "Student Life",
    "Hostel",
    "Sports",
    "Library"
  ];

  const aboutDropdown = [
    "Our Vision",
    "Leadership",
    "Faculty",
    "Careers",
    "Contact Us"
  ];

  return (
    <nav className="w-full bg-white h-[80px] px-4 lg:px-12 flex items-center justify-between sticky top-0 z-100 shadow-sm font-primary">
      <div className="flex items-center">
        <img src='https://framerusercontent.com/images/5UoshHiRcmY4IutYIv00ZAKewU.png?scale-down-to=512&width=3585&height=1319' className='h-10 w-auto' alt="Logo" />
      </div>
      
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-light text-[#4b4b4b] h-full">
        <NavItem label="Programs" hasDropdown dropdownItems={programsDropdown} />
        <NavItem label="Schools" hasDropdown dropdownItems={schoolsDropdown} />
        <NavItem label="Our Campus" hasDropdown dropdownItems={campusDropdown} />
        <NavItem label="About" hasDropdown dropdownItems={aboutDropdown} />
        <NavItem label="Placements" />
        <NavItem label="Admissions" />
        <NavItem label="Venture Studio" />
      </div>

      <div className="hidden lg:flex items-center">
        <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#d00736] text-[#d00736] font-semibold text-sm rounded-md hover:bg-[#d00736] group animate-in-out duration-500 cursor-pointer hover:text-white transition-colors">
          <span className="w-1.5 h-1.5 bg-[#d00736] hover:bg-white rounded-full animate-pulse group-hover:bg-white"></span>
          Apply Now
        </button>
      </div>

      <button 
        className="lg:hidden p-2 text-gray-800 -mr-2 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="w-7 h-7" strokeWidth={1.5} />
      </button>

      <div 
        className={`fixed inset-0 bg-white z-200 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col font-primary`}
      >
        <div className="flex items-center justify-between p-4 px-6 border-b border-gray-100 h-[80px]">
          <img src='https://framerusercontent.com/images/5UoshHiRcmY4IutYIv00ZAKewU.png?scale-down-to=512&width=3585&height=1319' className='h-10 w-auto' alt="Logo" />
          <button 
            className="p-2 text-gray-800 -mr-2 cursor-pointer hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col gap-10">
          {[
            { label: "Programs", hasDropdown: true, items: programsDropdown },
            { label: "Schools", hasDropdown: true, items: schoolsDropdown },
            { label: "Our Campus", hasDropdown: true, items: campusDropdown },
            { label: "About", hasDropdown: true, items: aboutDropdown },
            { label: "Outcomes", hasDropdown: false },
            { label: "Admissions", hasDropdown: false },
            { label: "Venture Studio", hasDropdown: false },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div 
                className="flex items-center text-[#4b4b4b] font-light text-sm cursor-pointer"
                onClick={() => item.hasDropdown ? toggleDropdown(item.label) : undefined}
              >
                <span className={`flex items-center gap-3 ${openDropdown === item.label && item.label === "Programs" ? "text-[#d00736]" : ""}`}>
                   {item.label}
                   {item.hasDropdown && (
                     <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''} ${openDropdown === item.label && item.label === "Programs" ? "text-[#d00736]" : "text-gray-600"}`} />
                   )}
                </span>
              </div>
              
              {item.hasDropdown && item.items && openDropdown === item.label && (
                <div className={`mt-4 rounded-xl bg-[#fdf6e6]`}>
                  <ul className="flex flex-col">
                    {item.items.map((subItem, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="block px-6 py-4 text-xs font-light text-[#4b4b4b]"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="mt-2 mb-8">
            <button className="px-8 py-3 outline-1 outline-[#d00736] outline-solid text-[#d00736] font-medium text-[16px] rounded-xl flex items-center justify-center gap-2 hover:bg-[#d00736] hover:text-white transition-colors duration-300 w-max">
              <span className="w-2 h-2 bg-[#d00736] group-hover:bg-white rounded-full mt-0.5"></span>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
