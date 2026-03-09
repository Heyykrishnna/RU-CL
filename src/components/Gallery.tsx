import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircularGallery from './CircularGallery';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

const row1Items = [
  { image: 'https://framerusercontent.com/images/or5LAExZVFnZxtzcr2l40P4PE.jpg?width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/nq6s1WwiUbcUptZbDATAdwDlNA.jpg?width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/sDyjUcOWyBqcOAH47zI8vbpTqw.jpg?width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/T7KtIUVjyVSOypWisAdW7ZEdG0.jpg?width=6720&height=4480', text: '' },
  { image: 'https://framerusercontent.com/images/L7d3klkaL6QFb05IUcM45oTxRrI.jpg?width=3744&height=2496', text: '' },
  { image: 'https://framerusercontent.com/images/OL0ocYpVVJFbGKbzxVJYHlLrmM.jpg?scale-down-to=1024&width=2265&height=3368', text: '' },
  { image: 'https://framerusercontent.com/images/yhEDHENrBEChIwsFmayZ8S9Oaw.jpg?width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/b4oE5B46CZ13bzVwVyxMfIMLQ.jpg?width=6720&height=4480', text: '' },
  { image: 'https://framerusercontent.com/images/b1XuGG5UJlJQDdj1jafHeAwQfs.jpg?width=6000&height=4000', text: '' },
];

const row2Items = [
  { image: 'https://framerusercontent.com/images/JyoFPhlbGCeEoYluglkTCLa6qw.jpg?scale-down-to=512&width=4898&height=3265', text: '' },
  { image: 'https://framerusercontent.com/images/NaQwlRUNLo1UOP0OBnCXbMMNiXU.jpg?scale-down-to=512&width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/Em54650Np5Bs5JfEnujdGgj2YVY.jpg?scale-down-to=512&width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/jhYBzyfntvRtmLrX1bpe6eSnBU.jpg?scale-down-to=512&width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/L7d3klkaL6QFb05IUcM45oTxRrI.jpg?width=3744&height=2496', text: '' },
  { image: 'https://framerusercontent.com/images/OL0ocYpVVJFbGKbzxVJYHlLrmM.jpg?scale-down-to=1024&width=2265&height=3368', text: '' },
  { image: 'https://framerusercontent.com/images/yhEDHENrBEChIwsFmayZ8S9Oaw.jpg?width=6000&height=4000', text: '' },
  { image: 'https://framerusercontent.com/images/b4oE5B46CZ13bzVwVyxMfIMLQ.jpg?width=6720&height=4480', text: '' },
  { image: 'https://framerusercontent.com/images/b1XuGG5UJlJQDdj1jafHeAwQfs.jpg?width=6000&height=4000', text: '' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-header', start: 'top 85%' },
        }
      );
      gsap.fromTo(
        '.gallery-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-row', start: 'top 90%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fcf7ef] py-10 md:py-14 font-primary overflow-hidden relative"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(208,7,54,0.05) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <img
        src="https://framerusercontent.com/images/O5hT3Jtin2BIPCMxXf47RnB50.png?width=2862&height=3525"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: '55%',
          maxWidth: 700,
          minWidth: 280,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      <div className="gallery-row w-full" style={{ height: '30vw', minHeight: 220, maxHeight: 380 }}>
        <CircularGallery
          items={row1Items}
          bend={0}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollSpeed={1}
          scrollEase={0.04}
        />
      </div>

      <div className="text-center mx-auto max-w-5xl">
          <BlurText
            text="Experience the Rishihood Campus"
            delay={40}
            animateBy="letters"
            direction="bottom"
            className="text-xl md:text-[32px] font-bold justify-center text-[#d00736] mb-4"
          />
          <p className="text-[#555] text-sm md:text-sm font-medium">
            Our campus fests celebrate culture, creativity, and community, bringing learners together in moments that become memories.
          </p>
        </div>

      <div className="gallery-row w-full mt-2 md:mt-4" style={{ height: '30vw', minHeight: 220, maxHeight: 380 }}>
        <CircularGallery
          items={row2Items}
          bend={0}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollSpeed={-1}
          scrollEase={0.04}
        />
      </div>
    </section>
  );
}
