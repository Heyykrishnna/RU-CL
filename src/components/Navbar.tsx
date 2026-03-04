import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ label, hasDropdown, dropdownItems }: { label: string; hasDropdown?: boolean; dropdownItems?: string[] }) => (
  <div className="relative group h-full flex items-center">
    <div className="flex items-center gap-1 cursor-pointer hover:text-[#d00736] transition-colors text-sm py-6">
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4 ml-0.5" />}
    </div>
    
    {hasDropdown && dropdownItems && (
      <div className="absolute top-[70px] left-0 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out w-[320px] bg-[#FAEBD7] shadow-lg rounded-xl py-3 z-100">
        <ul className="flex flex-col">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="block px-6 py-3 text-[15px] font-normal text-[#4b4b4b] hover:text-[#d00736] transition-colors whitespace-normal">
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

      <div className="flex items-center">
        <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#d00736] text-[#d00736] font-semibold text-sm rounded-md hover:bg-[#d00736] group animate-in-out duration-500 cursor-pointer hover:text-white transition-colors">
          <span className="w-1.5 h-1.5 bg-[#d00736] hover:bg-white rounded-full animate-pulse group-hover:bg-white"></span>
          Apply Now
        </button>
      </div>
    </nav>
  );
}
